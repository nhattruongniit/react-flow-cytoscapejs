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
  const { dataNodes, dataEdges, groupNodes, hashMapOrderLoop, defaultData } = initialState(dataPlantLoop79);
  const layoutedNodes = clockwiseDiagram(dataNodes, groupNodes, hashMapOrderLoop, dataEdges, defaultData);
  const [nodes, , onNodesChange] = useNodesState(layoutedNodes);

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