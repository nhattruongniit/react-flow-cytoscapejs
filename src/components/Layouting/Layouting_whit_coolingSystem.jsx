import React, { useState, Fragment, useMemo } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  Controls,
  isNode,
  Position,
  useNodesState,
  // useEdgesState,
} from 'react-flow-renderer';
import dagre from 'dagre';
import ReactJson from 'react-json-view';
import clsx from 'clsx';

import { dataPlantLoop79 } from '../../mocks/dataPlantLoop-79';

// components
// import InletTarget from './components/InletTarget';
// import OutletSource from './components/OutletSource';
import NodeItem from './components/NodeItem';

// configs
import { nodeWidth, nodeHeight } from 'configs';
// helpers
import { regexOnlyPump, regexOnlyPipe } from './helpers/regexNodes'

// diagram 
import { coolingSystemDiagram } from './helpers/coolingSystemDiagram';

const dagreGraph = new dagre.graphlib.Graph({ multigraph: true });
dagreGraph.setDefaultEdgeLabel(() => ({}));

// find node that has 'loop' field
const loops = [];
dataPlantLoop79.filter(item => Object.keys(item.data)
    .find(key => key.includes('loop')))
    .forEach(nodeItem => {
      nodeItem.data.loop.forEach(item => {
        loops.push( {
          ...nodeItem.data,
          id: nodeItem.data.id,
          label: item
        })
      })
    });

const nodesLoop = [...new Set(loops.map(ele => ele.label))].reduce((acc, curr) => {
  const currSplit = curr.split(':');
  const textFirst = currSplit[0];
  const textLast = currSplit[currSplit.length - 1];
  if(acc.hasOwnProperty(textFirst)) {
    if(acc[textFirst].hasOwnProperty(textLast)) {
      acc[textFirst][textLast].push(curr);
    } else {
      acc[textFirst] = {
        ...acc[textFirst],
        [textLast]: acc[textFirst][textLast] ? acc[textFirst][textLast].concat(curr) : [].concat(curr)
      }
    }
  } else {
    acc[textFirst] = {
      ...acc[textFirst],
      [textLast]: [].concat(curr)
    }
  } 
  return acc;
}, {})

// hashMap parent loop
const hashMapOrderLoop = Object.keys(nodesLoop).reduce((acc, curr, index) => {
  acc[curr] = `${index + 1}`.toString();
  return acc;
}, {})

// const initialData = dataPlantLoop79.reduce((loopMap, loopItem) => {
//   if(loopItem.group === 'nodes') {
//     const nodeItem = {
//       ...loopItem.data,
//       position,
//       id: loopItem.data.id.toString(),
//       // data: { label: loopItem.data.label },
//       data: { text: loopItem.data.label },
//       type: 'special',
//     }
//     loopMap.nodes += 1;
//     loopMap.dataNode.push(nodeItem);
//   } else if(loopItem.group === 'edges') {
//     const edgeItem = {
//       ...loopItem.data,
//       id: loopItem.data.id.toString(), 
//       source: loopItem.data.source.toString(), 
//       target: loopItem.data.target.toString(), 
//       animated: false, 
//       group: 'edges',
//       type: 'smoothstep', 
//       targetHandle: loopItem.data.to_node.toString(),
//       sourceHandle: loopItem.data.from_node.toString()
//     }
//     loopMap.edges += 1;
//     loopMap.dataEdge.push(edgeItem);
//   }
//   return loopMap
// }, {
//   nodes: 0,
//   edges: 0,
//   dataNode: [],
//   dataEdge: []
// })


const data = coolingSystemDiagram(dataPlantLoop79, nodesLoop, hashMapOrderLoop)

const LayoutFlow = () => {
  const [tab, setTab] = useState('json');
  const [isHorizontal, setIsHorizontal] = useState('LR')
  // const [edges, setEdges, onEdgesChange] = useEdgesState(initialData.dataEdge);
  // const [nodes, setNodes, onNodesChange] = useNodesState(initialData.dataNode.concat(childNodeLoops));
  // const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState(data);

  function changeNormalEdge(event) {
    const { checked } = event.target;
    const cloneElements = JSON.parse(JSON.stringify(nodes));
    if(checked) {
      cloneElements.forEach(item => {
        if(item.group === 'edges') {
          item.animated = true
        }
      })
    } else {
      cloneElements.forEach(item => {
        if(item.group === 'edges') {
          item.animated = false
        }
      })
    }

    onLayout(cloneElements, 'LR');
  }

  const onLayout = async (layoutElements, direction = 'LR') => {
    const isHorizontal = direction === 'LR';
    // set direction layout
    setIsHorizontal(direction);
    dagreGraph.setGraph({ rankdir: direction });

    layoutElements.forEach((el) => {
      if (isNode(el)) {
        dagreGraph.setNode(el.id, { width: nodeWidth, height: nodeHeight });
      } else {
        dagreGraph.setEdge(el.source, el.target);
      }
    });

    dagre.layout(dagreGraph);

    const layoutedElements = layoutElements.map((el) => {
      if (isNode(el)) {
        const nodeWithPosition = dagreGraph.node(el.id);
        el.targetPosition = isHorizontal ? Position.Left : Position.Top;
        el.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;
        // we need to pass a slightly different position in order to notify react flow about the change
        // @TODO how can we change the position handling so that we dont need this hack?
        // el.position = {
        //   // The position from dagre layout is the center of the node.
        //   // Calculating the position of the top left corner for rendering.
        //   x: nodeWithPosition.x - nodeWithPosition.width / 2,
        //   y: nodeWithPosition.y - nodeWithPosition.height / 2,
        // };
        if(!el.isNotDynamicNode) {
          el.position = { x: nodeWithPosition.x + Math.random() / 1000, y: nodeWithPosition.y };
        }
      }

      return el;
    });

    setNodes(layoutedElements);
  };


  const CustomNodeComponent = ({ id, data, ...props}) => {
    const nodeItem = nodes.find(element => element.id === id) 
    // filter Pump
    const isPump = nodes
                    .filter(element => regexOnlyPump.test(element.class))
                    .some(pum => pum.id === id);
    // const leftStyle = isPump ? 36 : 25;
    // filter Connector
    const mixerFiltered = nodes
                          .filter(element => element.class === 'Connector:Mixer')
                          .find(ele => ele.id === id);
    const isMixerNode = !!mixerFiltered;
    const splitterFiltered = nodes
                              .filter(element => element.class === 'Connector:Splitter')
                              .find(ele => ele.id === id);
    const isSplitter = !!splitterFiltered;
    // filter pipe
    const pipeFiltered = nodes
                          .filter(element => regexOnlyPipe.test(element.class))
                          .find(ele => ele.id === id);
    const isPipe = !!pipeFiltered;
    // filter demand
    const isSupply = nodeItem?.lastText === 'supply';
    // filter muster
    const musterFiltered = nodes
                      .filter(element => element.class === 'Connector:Muster')
                      .find(ele => ele.id === id);
    const isMuster = !!musterFiltered;

    return (
      <>
        {/* {nodeItem?.class} */}
        
        <div 
          className={clsx(
            isPump ? 'pumpStyles' : 'nodeStyles',
            (isMixerNode || isSplitter || isPipe || isMuster) && 'transparent',
            isSupply && 'revese',
            isPipe && 'rotate90deg',
            nodeItem.hasBorder && 'node-border',
            nodeItem.classCss
          )}
          style={{ maxWidth: nodeItem?.size?.maxWidth || 'auto'}}
        >
          {/* {nodeItem?.nodes?.inlet.length > 0 && (
            <InletTarget 
              nodeItem={nodeItem} 
              isHorizontal={isHorizontal} 
              leftStyle={leftStyle} 
            />
          )} */}
          
          <div
            className={clsx(
              "layouting_label",
              isSplitter && 'splitter',
              isMixerNode && 'mixer'
              // nodeItem.classCss
            )}
          >
            {/* <div /> */}
            <NodeItem 
              id={id} 
              data={data} 
              isPump={isPump} 
              isMixerNode={isMixerNode} 
              isSplitter={isSplitter} 
              isPipe={isPipe} 
              isMuster={isMuster}
              nodeItem={nodeItem}
            />
          </div>

          {/* {nodeItem?.nodes?.outlet.length > 0 && (
            <OutletSource 
              nodeItem={nodeItem} 
              isHorizontal={isHorizontal} 
              leftStyle={leftStyle} 
            /> 
          )} */}

        </div>
      </>
    );
  };

  // const nodeTypes = {
  //   special: CustomNodeComponent,
  // };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nodeTypes = useMemo(() => ({ special: CustomNodeComponent }), []);

  return (
    <div className='layouting_wrapper'>
      <div className="layoutflow coolingCoil">
        <ReactFlowProvider>
          <ReactFlow
            // elements={elements}
            // onConnect={onConnect}
            // onElementsRemove={onElementsRemove}
            // onLoad={() => onLayout(nodes, 'LR')}
            // edges={edges}
            nodeTypes={nodeTypes}
            onInit={() => onLayout(nodes, 'LR')}
            nodes={nodes} 
            onNodesChange={onNodesChange}
            // onEdgesChange={onEdgesChange}
          >
            <Controls />
          </ReactFlow>
          <div className="controls">
           
            {/* <button 
              type="button" 
              className={isHorizontal === 'TB' ? 'btn btn-info' : 'btn btn-secondary' }
              onClick={() => onLayout(elements, 'TB')} 
              style={{ marginRight: 10 }}
            >
              vertical layout
            </button> */}
            <button 
              type="button" 
              className={isHorizontal === 'LR' ? 'btn btn-info' : 'btn btn-secondary' }
              onClick={() => onLayout(nodes, 'LR')}
            >
              horizontal layout
            </button>
          </div>
        </ReactFlowProvider>
      </div>
      <div className='layouting_drawer' style={{ display: 'none' }}>
        <div className='layouting_button'> 
          <button 
            type="button" 
            className={`btn btn-sm ${tab === 'nodes' ? 'btn-primary': 'btn-secondary' }`}
            onClick={() => setTab('nodes')}
          >
            Nodes
          </button>
          <button 
            type="button" 
            className={`btn btn-sm ${tab === 'json' ? 'btn-primary': 'btn-secondary' }`}
            onClick={() => setTab('json')}
          >
            Show Json
          </button>

          <button 
            type="button" 
            className={`btn btn-sm ${tab === 'loop' ? 'btn-primary': 'btn-secondary' }`}
            onClick={() => setTab('loop')}
          >
            Loop
          </button>
        </div>

        <div className="layouting_checkbox">
          <input type="checkbox" className="form-check-input" id="normalEdge" onChange={changeNormalEdge} />
          <label className="form-check-label" htmlFor="normalEdge">Animated Edge</label>
        </div>

        <div className="layouting_content">
          {tab === 'json' && (
            <div>
              <ReactJson enableClipboard={false} src={dataPlantLoop79} />
            </div>
          )}

          {tab === 'nodes' && (
            <div>
              nodes
            </div>
          )}

          {tab === 'loop' && (
            <div className="nodesLoopItem_container">
              {Object.keys(nodesLoop).map((loop, indexLoop) => {
                const order = indexLoop + 1;
                return (
                  <div key={indexLoop} className="nodesLoopItem">
                    <div>
                      Loop{order}:
                    </div>
                    <div className="nodesLoopItem_content">
                      <span>(Group node - {order})</span>
                      {Object.keys(nodesLoop[loop]).map((child, indexChild) => {
                        const childNode = nodesLoop[loop][child];
                        return (
                          <span key={indexChild} className="text-transform-capitalize">
                            {child}: {' '}
                            {childNode.map((sub, indexSub) => (
                              <Fragment key={indexSub}>
                                {sub}{childNode.length > 1 && `,`}
                              </Fragment>
                            ))}
                          </span>
                        )
                      })}
                    
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default LayoutFlow;