import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

// styles
import 'react-flow-renderer/dist/style.css'
import 'react-flow-renderer/dist/theme-default.css';
import './index.css';

// components
import DragDrop from './components/DragDrop'
import UpdatableEdge from './components/UpdatableEdge';
import Edge from './components/Edge';
import EdgeWithButtonFlow from './components/EdgeWithButton';
import ProviderNode from './components/ProviderNode';
import Validation from './components/Validation';
import HTMLForm from './components/HTMLForm/HTMLForm';

function App() {
  return (
    <Router>
      <ul className="nav">
        <Link to="/">Edge</Link>
        <Link to="/updatable-edge">Updatable Edge</Link>
        <Link to="/drag-drop">Drag and Drop</Link>
        <Link to="/edge-with-button">Edge With Button</Link>
        <Link to="/provider-node">Provider Node</Link>
        <Link to="/validation">Validation</Link>
        <Link to="/html-form">HTML Form</Link>
      </ul>
      <Routes>
        <Route path="/">
          <Route index element={<Edge />} />
          <Route path="/updatable-edge" element={<UpdatableEdge />} />
          <Route path="/drag-drop" element={<DragDrop />} />
          <Route path="/edge-with-button" element={<EdgeWithButtonFlow />} />
          <Route path="/provider-node" element={<ProviderNode />} />
          <Route path="/validation" element={<Validation />} />
          <Route path="/html-form" element={<HTMLForm />} />
        </Route>
      </Routes>
    </Router>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
