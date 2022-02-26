import React, { useState } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  isNode,
  Position,
  Handle,
} from 'react-flow-renderer';
import dagre from 'dagre';
import ReactJson from 'react-json-view';
import clsx from 'clsx';
// import SplitPane from "react-split-pane";

import { dataPlantLoop57 } from '../../mocks/dataPlantLoop-57';

// assets
import { ReactComponent as PumpIcon } from 'assets/images/pump-svg.svg';
import { ReactComponent as Outlet1Icon } from 'assets/images/outlet1.svg';
import { ReactComponent as Outlet2Icon } from 'assets/images/outlet2.svg';
import { ReactComponent as MixerIcon } from 'assets/images/supply-mixer.svg';
import { ReactComponent as SplitterIcon } from 'assets/images/supply-splitter.svg';

const position = { x: 0, y: 0 };

const dagreGraph = new dagre.graphlib.Graph({ multigraph: true });
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeExtent = [
  [0, 0],
  [1000, 1000],
];

const regexTo = new RegExp(/(to_)\w+/);
const regexFrom = new RegExp(/(from_)\w+/);
const regexOnlyPump = new RegExp(/(Pump)/);
const regexOnlyPipe = new RegExp(/(Pipe)/);

const initialData = dataPlantLoop57.reduce((loopMap, loopItem) => {
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

console.log("dataPlantLoop57: ", dataPlantLoop57)

const LayoutFlow = () => {
  const [elements, setElements] = useState(initialData.dataNode);
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
  const [tab, setTab] = useState('json');
  const [isHorizontal, setIsHorizontal] = useState('LR')

  function changeNormalEdge(event) {
    const { checked } = event.target;
    // setIsNormalEdge(event.target.checked);
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

    const layoutedElements = layoutElements.map((el, index) => {
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
    let renderSource = null;
    let renderTarget = null;
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
                          
    console.log("pipeFiltered: ", isPipe);
    // console.log("splitterFiltered: ", splitterFiltered);

    // inlet
    if(nodeItem?.nodes?.inlet.length > 0) {
      const filterNodeNoTo = nodeItem?.nodes?.inlet.filter(item => !regexTo.test(item));
      renderTarget = filterNodeNoTo.map((node, idx) => (
        <div key={idx}>
          <span
            className={clsx(
              isHorizontal === 'LR' ? "inPortHorizontal" : "inPort"
            )}
            style={{ top: idx === 0 ? leftStyle : `${idx * (leftStyle / filterNodeNoTo.length)}px` }}
          >
            in
          </span>
          <Handle 
            key={node}
            id={node}
            type="target" 
            position={Position.Left} 
            // style={{ top: 0, left: idx === 0 ? leftStyle : `${idx * (leftStyle / filterNodeNoTo.length)}px`, borderRadius: 0 }}
            style={{ left: 0, top: idx === 0 ? leftStyle : `${idx * (leftStyle / filterNodeNoTo.length)}px`, borderRadius: 0 }}
          />
        </div>
      ))
    }

    // outlet
    if(nodeItem?.nodes?.outlet.length > 0) {
      const filterNodeNoFrom = nodeItem?.nodes?.outlet.filter(item => !regexFrom.test(item));
      renderSource = filterNodeNoFrom.map((node, idx) => (
        <div key={idx}>
          <span
            className={clsx(
              isHorizontal === 'LR' ? "outPortHorizontal" : "outPort"
            )}
            style={{ top: idx === 0 ? leftStyle : `${idx * (leftStyle / filterNodeNoFrom.length)}px` }}
          >
            out
          </span>
          <Handle
            key={node}
            type="source"
            position={Position.Right} 
            id={node}
            // style={{ bottom: 0, left: idx === 0 ? leftStyle : `${idx * (leftStyle / filterNodeNoFrom.length)}px`, borderRadius: 0 }}
            style={{ right: 0, top: idx === 0 ? leftStyle : `${idx * (leftStyle / filterNodeNoFrom.length)}px`, borderRadius: 0 }}
          />
        </div>
        
      ))
    }

    let renderPump = <>{data.text} - {id}</>;
    if(isPump) {
      renderPump = <PumpIcon />
    } else if(isMixerNode) {
      renderPump = (
        <>
          <MixerIcon />
          <span className="absolute text-color-black">{id}</span>
        </>
      )
    } else if(isSplitter) {
      renderPump = (
        <>
          <SplitterIcon />
          <span className="absolute text-color-black">{id}</span>
        </>
      )
    } else if(isPipe) {
      renderPump = (
        <>
          <span className="absolute text-color-black">{id}</span>
          <div 
            className={clsx(
              "pipe",
              // isPipe && 'rotate90deg'
            )}
          />
        </>
      )
    }

    return (
      <div 
      // style={customNodeStyles}
        className={clsx(
          isPump ? 'pumpStyles' : 'nodeStyles',
          (isMixerNode || isSplitter || isPipe) && 'transparent',
          isPipe && 'rotate90deg'
        )}
      >
        {renderTarget}
        {/* <Handle type="target" position={Position.Left} style={{ borderRadius: 0 }} /> */}
        <div className='layouting_label'>
          {renderPump}
        </div>

        {renderSource}
        {/* <Handle
          type="source"
          position={Position.Bottom}
          id="a"
          style={{ bottom: 0, borderRadius: 0 }}
        />
        <Handle
          type="source"
          position={Position.Right}
          id="b"
          style={{ bottom: 0, borderRadius: 0 }}
        /> */}
      </div>
    );
  };


  const nodeTypes = {
    special: CustomNodeComponent,
  };


  return (
    <div className='layouting_wrapper'>
      
      <div className="layoutflow">

        <Outlet1Icon />
        <Outlet2Icon />
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
          <br />
          <br />
          
        </div>

        <div className="layouting_checkbox">
          <input type="checkbox" className="form-check-input" id="normalEdge" onChange={changeNormalEdge} />
          <label className="form-check-label" htmlFor="normalEdge">Animated Edge</label>
        </div>

        <div className="layouting_content">
          {tab === 'json' && (
            <div>
              <ReactJson enableClipboard={false} src={dataPlantLoop57} />
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