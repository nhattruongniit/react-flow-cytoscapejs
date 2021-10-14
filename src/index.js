import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import CytoscapeComponent from "react-cytoscapejs"

import './index.css';

// Cytoscape MAIN Component
const defaultElements = [
  { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
  { data: { id: 'two', label: 'Node 2' }, position: { x: 745, y: 11 } },
  { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } },
];

function  MyCytoscape({ elements, handleSavePosition }) {
  const refCy = useRef(null)
  const cyStyle = { height: '600px', width: '800px', margin: '20px 0px' };
  const options = elements.length === 0 ? defaultElements : elements;

  function initListeners() {
    refCy.current.on('mouseup', 'node', evt => {
      handleSavePosition(evt)
    })
  }

  useEffect(() => {
    return () => {
      if(refCy.current) {
        refCy.current.removeAllListeners()
      }
    }
  }, [])

 return (
    <CytoscapeComponent
      elements={options} 
      style={ cyStyle } 
      pan={{
        x:50,
        y:50
      }}
      cy={cy => {
        refCy.current = cy;
        initListeners()
      }}
  />
 )
}


function App() {
  const [elements, setElements] = React.useState([]);
  const refElements = React.useRef(null);
  const [keyForce, setKeyForce] = React.useState(Date.now());

  function handleSavePosition(event) {
    const elementsItem = JSON.parse(JSON.stringify(defaultElements))
    const nodeId = event.target.id();
    const { x, y } = event.position;

    elementsItem.forEach(ele => {
      if(ele.data.id === nodeId) {
        ele = {
          ...ele,
          position: { x , y }
        }
      }
    })
    refElements.current = elementsItem
  }

  function handleSaveData() {
    console.log('refElements.current: ', refElements.current)
  }

  return (
    <React.Fragment>
      <button type="button" onClick={handleSaveData} >Save Data</button>
      <MyCytoscape keyForce={keyForce} elements={elements} handleSavePosition={handleSavePosition}/>

    </React.Fragment>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
