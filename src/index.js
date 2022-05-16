import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
// import utils from "@usonia/usonia-addon-utils";

// styles
import 'react-flow-renderer/dist/style.css'
import 'react-flow-renderer/dist/theme-default.css';
import './index.css';
import './layouting.css';
import './coolingSystem.css';

// components
// import DragDrop from './components/DragDrop'
// import UpdatableEdge from './components/UpdatableEdge';
// import Edge from './components/Edge';
// import EdgeWithButtonFlow from './components/EdgeWithButton';
// import ProviderNode from './components/ProviderNode';
// import Validation from './components/Validation';
// import HTMLForm from './components/HTMLForm/HTMLForm';
// import ColorPickerNode from './components/ColorPickerNode/ColorPickerNode';
// import ResizeNode from './components/ResizeNode/ResizeNode';
// import PlantLoop from './components/PlantLoop';
import Layouting from './components/Layouting/Layouting';
// import LayoutingCoolingSystem from './components/Layouting/Layouting_with_coolingSystem';

function App() {
  return (
    <>
       <Layouting /> 
       <br /><br /><br /><br />
       {/* <LayoutingCoolingSystem /> */}
    </>
  )
  // return (
  //   <Router>
  //     <ul className="nav">
  //       <Link to="/">Edge</Link>
  //       <Link to="/updatable-edge">Updatable Edge</Link>
  //       <Link to="/drag-drop">Drag and Drop</Link>
  //       <Link to="/edge-with-button">Edge With Button</Link>
  //       <Link to="/provider-node">Provider Node</Link>
  //       <Link to="/validation">Validation</Link>
  //       <Link to="/html-form">HTML Form</Link>
  //       <Link to="/color-picker-none">Color Picker Node</Link>
  //       <Link to="/resize-node">Resize Node</Link>
  //       <Link to="/plant-loop">PlatLoop</Link>
  //       <Link to="/layouting">Layouting</Link>
  //     </ul>
  //     <Routes>
  //       <Route path="/">
  //         <Route index element={<Layouting />} />
  //         <Route path="/updatable-edge" element={<UpdatableEdge />} />
  //         <Route path="/drag-drop" element={<DragDrop />} />
  //         <Route path="/edge-with-button" element={<EdgeWithButtonFlow />} />
  //         <Route path="/provider-node" element={<ProviderNode />} />
  //         <Route path="/validation" element={<Validation />} />
  //         <Route path="/html-form" element={<HTMLForm />} />
  //         <Route path="/color-picker-none" element={<ColorPickerNode />} />
  //         <Route path="/resize-node" element={<ResizeNode />} />
  //         <Route path="/plant-loop" element={<PlantLoop />} />
  //         <Route path="/layouting" element={<Layouting />} />
  //       </Route>
  //     </Routes>
  //   </Router>
  // )
}

// run same as addon
// utils.init({ manifest: "/manifest.json" }).then(() => {
//   ReactDOM.render(
//     <App />,
//     document.getElementById('root'),
//   );
// })


// run localhost
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
