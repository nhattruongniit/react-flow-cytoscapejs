import utils from "https://codepen.io/kostovmike/pen/c9739d1e6db56bec7aa4fd12c3c05514.js";
import React, { useRef, StrictMode } from "https://cdn.skypack.dev/react@17.0.2";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.2";
import ReactFlow, { Handle, MiniMap, Controls, Background } from 'https://cdn.skypack.dev/react-flow-renderer';

const style = {
  background: '#262626',
  width: '100vw',  //TONY HERE :)
  height: '100vh', //TONY HERE :)
};

const elements = [
  {
    id: '1',
    type: 'special',
    position: { x: 300, y: 300 },
    data: { ss
  {
    id: '2',
    type: 'special',
    position: { x: 600, y: 300 },
    data: { text: 'Pipe' },
  },
  { id: 'e1-2a', 
   source: '1', 
   target: '2',
   targetHandle: 'b',
   animated: true, 
   label: 'edge', 
   style: { stroke: 'red' } 
  },
  { id: 'e1-2c', 
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

const CustomNodeExample = () => {
  return (
    <div style={style}>
      <h2>test update</h2>
      <ReactFlow elements={elements} nodeTypes={nodeTypes} snapToGrid={true} >
        <MiniMap />
        <Controls />
        <Background variant="dots" gap={12} size={0.1} />
      </ReactFlow>
      
    </div>
  );
};

// Usonia wrapper and ReactDOM.render
(async () => {
  
  await utils.init({
    manifest: {
      name: "HVAC-EDITOR",
      description: "online hvac viewer for EnergyPlus",
      version: 1,
      versionName: "0.0.1",
      license: "UNLICENSED",
      homepage: "ABC",
      repository: "ABC",
      icon: "ABC",
      tags: ["ABC"],
      categories: ["ABC"],
      whatsnew: ["ABC"],
      contexts: ["idf_api", "pusher", "project", "idf_document"],
      size: { width: 637, height: 545 }
    }
  });

  const rootElement = document.getElementById("root");
  ReactDOM.render(
    <React.StrictMode>
      <CustomNodeExample />
    </React.StrictMode>,
    rootElement
  );
})();