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
// import SplitPane from "react-split-pane";

import { dataPlantLoop57 } from '../../mocks/dataPlantLoop-57';

const position = { x: 0, y: 0 };

const dagreGraph = new dagre.graphlib.Graph({ multigraph: true });
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeExtent = [
  [0, 0],
  [1000, 1000],
];

const regexTo = new RegExp(/(to_)\w+/);
const regexFrom = new RegExp(/(from_)\w+/);

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

const customNodeStyles = {
  background: '#9CA8B3',
  color: '#FFF',
  textAlign: 'center',
  width: 150,
  minHeight: 50,
  padding: '15px 0'
};

const LayoutFlow = () => {
  const [elements, setElements] = useState(initialData.dataNode);
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
  const [tab, setTab] = useState('json');

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

    onLayout(cloneElements, 'TB');
  }

  const onLayout = (layoutElements, direction) => {
    const isHorizontal = direction === 'LR';
    dagreGraph.setGraph({ rankdir: direction });

    console.log("layoutElements: ", layoutElements)

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

    // inlet
    if(nodeItem?.nodes?.inlet.length > 0) {
      const filterNodeNoTo = nodeItem?.nodes?.inlet.filter(item => !regexTo.test(item));
      renderTarget = filterNodeNoTo.map((node, idx) => (
        <div key={idx}>
          <span
            style={{ fontSize: 9, position: 'absolute', top: 5, left: idx === 0 ? 67 : `${idx * (67 / filterNodeNoTo.length)}px` }}
          >
            in
          </span>
          <Handle 
            key={node}
            id={node}
            type="target" 
            position={Position.Top} 
            style={{ top: 0, left: idx === 0 ? 75 : `${idx * (75 / filterNodeNoTo.length)}px`, borderRadius: 0 }}
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
            style={{ fontSize: 9, position: 'absolute', bottom: 5, left: idx === 0 ? 67 : `${idx * (67 / filterNodeNoFrom.length)}px` }}
          >
            out
          </span>
          <Handle
            key={node}
            type="source"
            position={Position.Bottom} 
            id={node}
            style={{ bottom: 0, left: idx === 0 ? 75 : `${idx * (75 / filterNodeNoFrom.length)}px`, borderRadius: 0 }}
          />
        </div>
        
      ))
    }

    return (
      <div style={customNodeStyles}>
        {renderTarget}
        {/* <Handle type="target" position={Position.Left} style={{ borderRadius: 0 }} /> */}
        <div className='layouting_label'>
          {data.text} - {id}
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
      {/* <SplitPane
        split="vertical"
        minSize={50}
        defaultSize="350px"
      >
        
      </SplitPane> */}
      <div className="layoutflow">
        <ReactFlowProvider>
          <ReactFlow
            elements={elements}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            nodeTypes={nodeTypes}
            // nodeExtent={nodeExtent}
            onLoad={() => onLayout(elements, 'TB')}
          >
            <Controls />
          </ReactFlow>
          <div className="controls">
            <button onClick={() => onLayout(elements, 'TB')} style={{ marginRight: 10 }}>
              vertical layout
            </button>
            <button onClick={() => onLayout(elements, 'LR')}>horizontal layout</button>
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