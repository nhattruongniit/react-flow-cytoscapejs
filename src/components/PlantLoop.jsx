import React from 'react';
import ReactFlow, { Handle, MiniMap, Controls, Background } from 'react-flow-renderer';

import { dataPlantLoop } from '../mocks/dataPlantLoop';

const style = {
  background: 'rgb(229 221 221)',
  width: '100vw',  //TONY HERE :)
  height: '100vh', //TONY HERE :)
};

const elements = [
  {
    id: '1',
    type: 'special',
    position: { x: 300, y: 300 },
    data: { text: 'Pump123' },
  },
  {
    id: '2',
    type: 'special',
    position: { x: 600, y: 300 },
    data: { text: 'Pipe' },
  },
  { 
    id: 'e1-2a', 
    source: '1', 
    target: '2',
    targetHandle: 'b',
    animated: true, 
    label: 'edge', 
    style: { stroke: 'red' } 
  },
  { 
    id: 'e1-2c', 
    source: '1', 
    target: '2',
    targetHandle: 'c',
    animated: true, 
    label: 'edge', 
    style: { stroke: 'red' } 
  }
];

const customNodeStyles = {
  background: '#FADD60',
  color: '#ED4E4A',
  padding: 10,
};

const CustomNodeComponent = ({ data }) => {
  return (
    <div style={customNodeStyles}>
      <Handle type="target" position="left" style={{ borderRadius: 0 }} />
      <div>{data.text}</div>
      <Handle
        type="source"
        position="right"
        id="a"
        style={{ top: '50%', borderRadius: 0 }}
      />
      <Handle
        type="target"
        position="left"
        id="b"
        style={{ top: '25%', borderRadius: 0 }}
      />
      <Handle
        type="target"
        position="left"
        id="c"
        style={{ top: '75%', borderRadius: 0 }}
      />
    </div>
  );
};

const nodeTypes = {
  special: CustomNodeComponent,
};

function PlantLoop() {
  console.log('dataPlantLoop: ', dataPlantLoop)
  return (
    <div style={style}>
      <ReactFlow elements={elements} nodeTypes={nodeTypes} snapToGrid={true} >
        <MiniMap />
        <Controls />
        <Background variant="dots" gap={12} size={0.1} />
      </ReactFlow>
    </div>
  )
}

export default PlantLoop
