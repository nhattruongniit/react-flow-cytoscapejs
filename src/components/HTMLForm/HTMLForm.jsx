import React, { useState } from 'react';
import ReactFlow, { Background, Handle, Controls } from 'react-flow-renderer';

import ForeName from './ForeName';
import LastName from './LastName';

const SpecialNode = ({ data }) => {
  return (
    <div className="nodeTransformer">
      {data}
      <Handle
        type="source"
        position="bottom"
        id="a"
        style={{ bottom: '0', borderRadius: 0 }}
      />
    </div>
  );
};

const nodeTypes = {
  special: SpecialNode,
};

function HTMLForm() {
  const [foreName, setForeName] = useState('');
  const [lastName, setLastName] = useState('');

  const initialElements = [
    {
      id: '1',
      type: 'special', 
      position: { x: 100, y: 100 },
      data: <ForeName value={foreName} setForeName={setForeName} />
    },
    {
      id: '2',
      type: 'special',
      position: { x: 500, y: 100 },
      data: <LastName value={lastName} setLastName={setLastName} /> 
    },
    {
      id: '3',
      type: 'input', // input node
      data: { label: <div className="nodeTransformer_input">{foreName} {lastName}</div> },
      position: { x: 400, y: 200 },
      sourcePosition: 'top'
    },
    {
      id: 'e1-3',
      source: '1',
      target: '3',
      animated: true
    },
    {
      id: 'e2-3',
      source: '2',
      target: '3',
      animated: true
    }
  ];

  return (
      <ReactFlow elements={initialElements} nodeTypes={nodeTypes}>
        <Background />
        <Controls />
      </ReactFlow>

  )
}

export default HTMLForm
