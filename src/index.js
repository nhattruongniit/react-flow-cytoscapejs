import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import localforage from 'localforage';

import ReactFlow, { ReactFlowProvider, Handle, MiniMap, Controls, Background } from 'react-flow-renderer';

import './index.css';

localforage.config({
  name: 'react-flow-docs',
  storeName: 'flows',
});

const style = {
  background: '#262626',
  width: '100vw',  //TONY HERE :)
  height: '100vh', //TONY HERE :)
};

const customNodeStyles = {
  background: '#FADD60',
  color: '#ED4E4A',
  padding: 10,
};

const initialElements = [
  {
    id: '1',
    type: 'special',
    position: { x: 300, y: 300 },
    data: { text: 'Node-1' },
  },
  {
    id: '2',
    type: 'special',
    position: { x: 600, y: 300 },
    data: { text: 'Node-2' },
  },
  { id: 'e1-2', source: '1', target: '2', animated: true, label: 'animated styled edge', style: { stroke: 'red' } }
];

const CustomNodeComponent = ({ data }) => {
  return (
    <div style={customNodeStyles}>
      <Handle type="target" position="left" style={{ borderRadius: 0 }} />
      <div>{data.text}</div>
      <Handle
        type="source"
        position="right"
        id="a"
        style={{ top: '30%', borderRadius: 0 }}
      />
      <Handle
        type="source"
        position="right"
        id="b"
        style={{ top: '70%', borderRadius: 0 }}
      />
    </div>
  );
};

const nodeTypes = {
  special: CustomNodeComponent,
};

const flowKey = 'react-flow';

function App() {
  const [rfInstance, setRfInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);

  const onSave = useCallback(() => {
    if(rfInstance) {
      const flow = rfInstance.toObject();
      localforage.setItem(flowKey, flow);
    }
  }, [rfInstance])

  const onRestore = useCallback(() => {
    async function restoreFlow() {
      const flow = await localforage.getItem(flowKey);
      if(flow) {
        setElements(flow.elements || []);
      };
    }
    restoreFlow();
  }, [])

  return (
    <ReactFlowProvider>
      <div style={style}>
        <ReactFlow 
            elements={elements} 
            nodeTypes={nodeTypes} 
            snapToGrid={true}
            onLoad={setRfInstance}
          >
          <MiniMap />
          <Controls />
          <Background variant="dots" gap={12} size={0.1} />

          <div className="save__controls">
            <button onClick={onSave}>save</button>
            <button onClick={onRestore}>restore</button>
          </div>
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  )
}


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
