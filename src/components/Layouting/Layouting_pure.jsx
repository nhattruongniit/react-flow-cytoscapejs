import React, { useCallback } from 'react';
import ReactFlow, { addEdge, useNodesState, useEdgesState } from 'react-flow-renderer';
import dagre from 'dagre';

// import { initialNodes, initialEdges } from 'mocks/dataLayouting.js'; 
import { dataPlantLoop79 } from 'mocks/dataPlantLoop-79';

const position = { x: 0, y: 0 };

const initialData = dataPlantLoop79.reduce((loopMap, loopItem) => {
  if(loopItem.group === 'nodes') {
    const nodeItem = {
      ...loopItem.data,
      position,
      id: loopItem.data.id.toString(),
      data: { label: loopItem.data.label },
      // type: 'special',
    }
    loopMap.nodes.push(nodeItem);
  } else if(loopItem.group === 'edges') {
    const edgeItem = {
      ...loopItem.data,
      source: loopItem.data.source.toString(), 
      target: loopItem.data.target.toString(), 
      type: 'smoothstep', 
      animated: true,
      targetHandle: loopItem.data.to_node.toString(),
      sourceHandle: loopItem.data.from_node.toString()
    }
    loopMap.edges.push(edgeItem);
  }
  return loopMap
}, {
  nodes: [],
  edges: []
})

console.log('dataPlantLoop79: ', initialData)


const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 172;
const nodeHeight = 36;

const getLayoutedElements = (nodes, edges, direction = 'TB') => {
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? 'left' : 'top';
    node.sourcePosition = isHorizontal ? 'right' : 'bottom';

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });

  return { nodes, edges };
};

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialData.nodes,
  initialData.edges
);


const LayoutFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, type: 'smoothstep', animated: true }, eds)),
    [setEdges]
  );

  const onLayout = useCallback(
    (direction) => {
      const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
        nodes,
        edges,
        direction
      );

      setNodes([...layoutedNodes]);
      setEdges([...layoutedEdges]);
    },
    [nodes, edges, setNodes, setEdges]
  );

  return (
    <div className="layoutflow">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionLineType="smoothstep"
        fitView
      />
      <div className="controls">
        <button onClick={() => onLayout('TB')}>vertical layout</button>
        <button onClick={() => onLayout('LR')}>horizontal layout</button>
      </div>
    </div>
  );
};

export default LayoutFlow;
