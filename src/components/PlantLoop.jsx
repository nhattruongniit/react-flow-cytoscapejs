import React, { useState } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  isNode,
  Position,
} from 'react-flow-renderer';
import dagre from 'dagre';

import { dataPlantLoop57 } from '../mocks/dataPlantLoop-57';

const position = { x: 0, y: 0 };

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeExtent = [
  [0, 0],
  [1000, 1000],
];

const initialData = dataPlantLoop57.reduce((loopMap, loopItem) => {
  if(loopItem.group === 'nodes') {
    const nodeItem = {
      ...loopItem.data,
      position,
      id: loopItem.data.id.toString(),
      data: { label: loopItem.data.label },
    }
    loopMap.nodes += 1;
    loopMap.dataNode.push(nodeItem)
  } else if(loopItem.group === 'edges') {
    const edgeItem = {
      // ...node.data,
      id: loopItem.data.id.toString(), 
      source: loopItem.data.source.toString(), 
      target: loopItem.data.target.toString(), 
      animated: true, 
      type: 'smoothstep' 
    }
    loopMap.edges += 1;
    loopMap.dataNode.push(edgeItem)
  }
  return loopMap
}, {
  nodes: 0,
  edges: 0,
  dataNode: []
})

const LayoutFlow = () => {
  const [elements, setElements] = useState(initialData.dataNode);
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));

  const onLayout = (direction) => {
    const isHorizontal = direction === 'LR';
    dagreGraph.setGraph({ rankdir: direction });

    elements.forEach((el) => {
      if (isNode(el)) {
        dagreGraph.setNode(el.id, { width: 150, height: 50 });
      } else {
        dagreGraph.setEdge(el.source, el.target);
      }
    });

    dagre.layout(dagreGraph);

    const layoutedElements = elements.map((el) => {
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


  return (
    <div className="layoutflow">
      <ReactFlowProvider>
        <ReactFlow
          elements={elements}
          onConnect={onConnect}
          onElementsRemove={onElementsRemove}
          nodeExtent={nodeExtent}
          onLoad={() => onLayout('TB')}
        >
          <Controls />
        </ReactFlow>
        <div className="controls">
          <button onClick={() => onLayout('TB')} style={{ marginRight: 10 }}>
            vertical layout
          </button>
          <button onClick={() => onLayout('LR')}>horizontal layout</button>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default LayoutFlow;