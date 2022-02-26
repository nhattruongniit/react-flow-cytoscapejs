import React, { useState, Fragment } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  isNode,
  Position,
} from 'react-flow-renderer';
import dagre from 'dagre';
import ReactJson from 'react-json-view';
import clsx from 'clsx';
// import SplitPane from "react-split-pane";

import { dataPlantLoop79 } from '../../mocks/dataPlantLoop-79';

// components
import InletTarget from './components/InletTarget';
import OutletSource from './components/OutletSource';
import NodeItem from './components/NodeItem';

const position = { x: 0, y: 0 };

const dagreGraph = new dagre.graphlib.Graph({ multigraph: true });
dagreGraph.setDefaultEdgeLabel(() => ({}));

const regexOnlyPump = new RegExp(/(Pump)/);
const regexOnlyPipe = new RegExp(/(Pipe)/);

// find loop
const loops = [];
const dataLoops = dataPlantLoop79.filter(item => Object.keys(item.data).find(key => key.includes('loop')));
dataLoops.forEach(elemloop => {
  elemloop.data.loop.forEach(item => {
    loops.push({
      ...elemloop.data,
      id: elemloop.data.id,
      label: item
    })
  })
})

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

// console.log('dataPlantLoop79: ', dataPlantLoop79)
// console.log('dataLoops: ', dataLoops)
// console.log('unique: ', [...new Set(loops.map(ele => ele.label))])
console.log('nodesLoop: ', nodesLoop)

const initialData = dataPlantLoop79.reduce((loopMap, loopItem) => {
  if(loopItem.group === 'nodes') {
    const nodeItem = {
      ...loopItem.data,
      position,
      id: loopItem.data.id.toString(),
      // data: { label: loopItem.data.label },
      data: { text: loopItem.data.label },
      type: 'special',
    }
    loopMap.nodes += 1;
    loopMap.dataNode.push(nodeItem);
  } else if(loopItem.group === 'edges') {
    const edgeItem = {
      ...loopItem.data,
      id: loopItem.data.id.toString(), 
      source: loopItem.data.source.toString(), 
      target: loopItem.data.target.toString(), 
      animated: false, 
      group: 'edges',
      type: 'smoothstep', 
      targetHandle: loopItem.data.to_node.toString(),
      sourceHandle: loopItem.data.from_node.toString()
    }
    loopMap.edges += 1;
    loopMap.dataNode.push(edgeItem);
  }
  return loopMap
}, {
  nodes: 0,
  edges: 0,
  dataNode: []
})

// { id: '2', data: { label: 'Group node 2' }, position: { x: 50, y: 100 }, style: { width: 400, height: 200 } },
const dataNodeGroup = Object.keys(nodesLoop).map((key, indexKey) => {
  const order = indexKey + 1;
  return {
    id: order.toString(),
    data: { label: `Loop ${order}`},
    position
  }
})
console.log("initialData: ", initialData)
console.log("dataNodeGroup: ", dataNodeGroup)

const LayoutFlow = () => {
  const [elements, setElements] = useState(initialData.dataNode.concat(dataNodeGroup));
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
  const [tab, setTab] = useState('json');
  const [isHorizontal, setIsHorizontal] = useState('LR')

  function changeNormalEdge(event) {
    const { checked } = event.target;
    const cloneElements = JSON.parse(JSON.stringify(elements));
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

  const onLayout = (layoutElements, direction = 'LR') => {
    const isHorizontal = direction === 'LR';

    // set direction layout
    setIsHorizontal(direction);
    dagreGraph.setGraph({ rankdir: direction });

    layoutElements.forEach((el) => {
      if (isNode(el)) {
        dagreGraph.setNode(el.id, { width: 150, height: 80 });
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
        el.position = { x: nodeWithPosition.x + Math.random() / 1000, y: nodeWithPosition.y };
      }

      return el;
    });
    setElements(layoutedElements);
  };


  const CustomNodeComponent = ({ id, data, ...props}) => {
    const nodeItem = elements.find(element => Number(element.id) === Number(id)) 
    // filter Pump
    const isPump = elements
                    .filter(element => regexOnlyPump.test(element.class))
                    .some(pum => Number(pum.id) === Number(id));
    const leftStyle = isPump ? 36 : 25;

    // filter Connector
    const mixerFiltered = elements
                          .filter(element => element.class === 'Connector:Mixer')
                          .find(ele => Number(ele.id) === Number(id));
    const isMixerNode = !!mixerFiltered;
    const splitterFiltered = elements
                              .filter(element => element.class === 'Connector:Splitter')
                              .find(ele => Number(ele.id) === Number(id));
    const isSplitter = !!splitterFiltered;
            
    // filter pipe
    const pipeFiltered = elements
                          .filter(element => regexOnlyPipe.test(element.class))
                          .find(ele => Number(ele.id) === Number(id));
    const isPipe = !!pipeFiltered;

    return (
      <div 
        className={clsx(
          isPump ? 'pumpStyles' : 'nodeStyles',
          (isMixerNode || isSplitter || isPipe) && 'transparent',
          isPipe && 'rotate90deg'
        )}
      >
        {nodeItem?.nodes?.inlet.length > 0 && (
          <InletTarget 
            nodeItem={nodeItem} 
            isHorizontal={isHorizontal} 
            leftStyle={leftStyle} 
          />
        )}

        <div className='layouting_label'>
          <NodeItem 
            id={id} 
            data={data} 
            isPump={isPump} 
            isMixerNode={isMixerNode} 
            isSplitter={isSplitter} 
            isPipe={isPipe} 
          />
        </div>

        {nodeItem?.nodes?.outlet.length > 0 && (
          <OutletSource 
            nodeItem={nodeItem} 
            isHorizontal={isHorizontal} 
            leftStyle={leftStyle} 
          /> 
        )}

      </div>
    );
  };

  const nodeTypes = {
    special: CustomNodeComponent,
  };

  return (
    <div className='layouting_wrapper'>
      <div className="layoutflow">
        <ReactFlowProvider>
          <ReactFlow
            elements={elements}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            nodeTypes={nodeTypes}
            // nodeExtent={nodeExtent}
            onLoad={() => onLayout(elements, 'LR')}
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
              onClick={() => onLayout(elements, 'LR')}
            >
              horizontal layout
            </button>
          </div>
        </ReactFlowProvider>
      </div>
      <div className='layouting_drawer'>
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