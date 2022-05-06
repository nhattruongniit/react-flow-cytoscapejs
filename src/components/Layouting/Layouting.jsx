import React from 'react';
import ReactFlow, {
  Controls,
  useNodesState,
  MiniMap,
  Background,
} from 'react-flow-renderer';
import dagre from 'dagre';

// data
import { dataPlantLoop79 } from 'mocks/dataPlantLoop-79';

// helpers
import initialState from './helpers/initialState';
import clockwiseDiagram from './helpers/clockwiseDiagram';

const dagreGraph = new dagre.graphlib.Graph({ multigraph: true });
dagreGraph.setDefaultEdgeLabel(() => ({}));

const LayoutFlow = () => {
  const { dataNodes, groupNodes, hashMapOrderLoop } = initialState(dataPlantLoop79);
  const layoutedNodes = clockwiseDiagram(dataNodes, groupNodes, hashMapOrderLoop);
  const [nodes, , onNodesChange] = useNodesState(layoutedNodes);

  console.log('nodes: ', nodes)
 
  return (
    <div className='layouting_wrapper'>
      <div className="layoutflow coolingCoil">
        <ReactFlow
          nodes={nodes} 
          snapToGrid
          onNodesChange={onNodesChange}
          attributionPosition="center-center"
          // fitView
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
};

export default LayoutFlow;