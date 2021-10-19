import React from 'react';
import ReactDOM from 'react-dom';

// styles
import 'react-flow-renderer/dist/style.css'
import './index.css';

// components
import DragDrop from './components/DragDrop'
import UpdatableEdge from './components/UpdatableEdge';
import Edge from './components/Edge';

function App() {
  return (
    <>
      <Edge />
      {/* <UpdatableEdge /> */}
      {/* <DragDrop /> */}
    </>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
