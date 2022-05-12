import React, { useState, useMemo } from 'react';
import ReactFlow, {
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Background,
  getBezierPath, getMarkerEnd,
} from 'react-flow-renderer';
import dagre from 'dagre';
import clsx from 'clsx';
import ReactJson from 'react-json-view';

import { dataPlantLoop79 } from 'mocks/dataPlantLoop-79';

// components
import InletTarget from './components/InletTarget';
import OutletSource from './components/OutletSource';
import NodeItem from './components/NodeItem';

// configs
// import { nodeWidth, nodeHeight } from 'configs';

// helpers
import { regexOnlyPump, regexOnlyPipe } from './helpers/regexNodes'

// diagram 
import { coolingSystemDiagram } from './helpers/coolingSystemDiagram';

let isHorizontal = 'LR';
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

console.log('nodesLoop: ', nodesLoop)

// hashMap parent loop
const hashMapOrderLoop = Object.keys(nodesLoop).reduce((acc, curr, index) => {
  acc[curr] = `${index + 1}`.toString();
  return acc;
}, {})

const dataNodes = coolingSystemDiagram(dataPlantLoop79, nodesLoop, hashMapOrderLoop);
const dataEdges = dataPlantLoop79.reduce((loopMap, loopItem) => {
  if(loopItem.group === 'edges') {
    const edgeItem = {
      ...loopItem.data,
      id: loopItem.data.id.toString(), 
      source: loopItem.data.source.toString(), 
      target: loopItem.data.target.toString(), 
      animated: true, 
      type: 'step', 
      data: { text: loopItem.data.id.toString() },
      targetHandle: loopItem.data.to_node.toString(),
      sourceHandle: loopItem.data.from_node.toString()
    }
    loopMap.edges.push(edgeItem);
  }
  // if(loopItem.data.target === 4932) {
  //     const edgeItem = {
  //       ...loopItem.data,
  //       id: loopItem.data.id.toString(), 
  //       source: loopItem.data.source.toString(), 
  //       target: loopItem.data.target.toString(), 
  //       animated: true, 
  //       type: 'custom', 
  //       data: { text: loopItem.data.id.toString() },
  //       targetHandle: loopItem.data.to_node.toString(),
  //       sourceHandle: loopItem.data.from_node.toString()
  //     }
  //     loopMap.edges.push(edgeItem);
  //   }
  return loopMap
}, {
  edges: [],
})


const LayoutFlow = () => {
  const [edges, setEdges, onEdgesChange] = useEdgesState(dataEdges.edges);
  const [nodes, , onNodesChange] = useNodesState(dataNodes);
  const [tab, setTab] = useState('json');

  // const onConnect = useCallback(
  //   (params) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
  //   [setEdges]
  // );

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  const CustomNodeComponent = ({ id, data, ...props}) => {
    const nodeItem = nodes.find(element => element.id === id) 
    // filter Pump
    const isPump = nodes
                    .filter(element => regexOnlyPump.test(element.class))
                    .some(pum => pum.id === id);
    const leftStyle = isPump ? 36 : 25;
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
          {nodeItem?.nodes?.inlet.length > 0 && (
            <InletTarget 
              nodeItem={nodeItem} 
              isHorizontal={isHorizontal} 
              leftStyle={leftStyle} 
            />
          )}
            
          <div
            className={clsx(
              "layouting_label",
              isSplitter && 'splitter',
              isMixerNode && 'mixer',
              nodeItem.lineCss
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

          {nodeItem?.nodes?.outlet.length > 0 && (
            <OutletSource 
              nodeItem={nodeItem} 
              isHorizontal={isHorizontal} 
              leftStyle={leftStyle} 
            /> 
          )}

        </div>
      </>
    );
  };

  const CustomEdge = ({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    arrowHeadType,
    markerEndId,
  }) => {
    const edgePath = getBezierPath({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition });
    const markerEnd = getMarkerEnd(arrowHeadType, markerEndId);
    const [, setRatio] = useState(15);

    return (
      <>
          <g>
              <path id={id} style={{ ...style, stroke: "#BBC7D5" }} className="react-flow__edge-path" d={edgePath} markerEnd={markerEnd} />
              <g onMouseEnter={
                  () => {
                      setRatio(20)
                  }
              } onMouseLeave={
                  () => {
                      setRatio(15)
                  }
              } width={20} style={{
                  width: 20
              }}>
                  
              </g>
          </g>
      </>
    );
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nodeTypes = useMemo(() => ({ special: CustomNodeComponent }), []);
  const edgeTypes = useMemo(() => ({ custom: CustomEdge }), []);

  return (
    <div className='layouting_wrapper'>
      <div className="layoutflow coolingCoil">
        <ReactFlow
          nodes={nodes} 
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          snapToGrid
          // fitView
          attributionPosition="top-right"
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
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
          <br />
          <br />
          
        </div>

        {/* <div className="layouting_checkbox">
          <input type="checkbox" className="form-check-input" id="normalEdge" onChange={changeNormalEdge} />
          <label className="form-check-label" htmlFor="normalEdge">Animated Edge</label>
        </div> */}

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
        </div>
      </div>
    </div>
  );
};

export default LayoutFlow;