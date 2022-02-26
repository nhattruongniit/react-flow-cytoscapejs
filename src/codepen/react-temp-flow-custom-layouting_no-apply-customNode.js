import UsoniaApiClient from "https://codepen.io/kostovmike/pen/c9739d1e6db56bec7aa4fd12c3c05514.js";
import ReactJsonViewer from 'https://cdn.skypack.dev/react-json-view-common';
import React, { useRef, useState, StrictMode, useEffect, useLayoutEffect } from "https://cdn.skypack.dev/react@17.0.2";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.2";
import ReactFlow, { ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  isNode,
  Position } from 'https://cdn.skypack.dev/react-flow-renderer';
import dagre from 'https://cdn.skypack.dev/dagre';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeExtent = [
  [0, 0],
  [1000, 1000],
];

const layoutflow = {
  flexGrow: 1,
  position: 'relative',
  height: '100%',
}

const controls = {
  position: 'absolute',
  right: 10,
  top: 10,
  zIndex: 10
}

const position = { x: 0, y: 0 };

const copyToClipboard = (url) => {
  const dummy = document.createElement('input');
  document.body.appendChild(dummy);
  dummy.value = url;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
};

const App = () => {
  const [elements, setElements] = useState([]);
  const [countNode, setCountNode] = useState({});
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
  const [typeGraph, setTypeGraph] = useState('airgraph');
  const [jsonData, setJsonData] = useState(null);
  const [endPoint, setEndpoint] = useState('');
  const [tab, setTab] = useState('json');
  
  useLayoutEffect(() => {
    async function fetchGraph() {
        setElements([]);
        const document_id = await UsoniaApiClient.getContext().idf_document;
        const project_id = await UsoniaApiClient.getContext().project;
        let node_graph = null;
        let urlApi = '';
        let params = {
          // query params here. Currently we have for all loops!
          loop_type: "plantloop",
          object_list: 0,
        }
        if(typeGraph === 'airLoop') {
          params = {
            ...params,
            loop_type: "airloop",
          }
        }
      
        if(typeGraph === 'airgraph') {
          node_graph = await UsoniaApiClient.idfApi.getAirGraph(document_id);
          urlApi = `https://242574c0-5ad5-468f-b924-7aeddebaab75.workers.usonialabs.com/api/projects/${project_id}/idf-documents/${document_id}/airgraph`
        } else {
          node_graph = await UsoniaApiClient.idfApi.getNodeGraph(document_id, params);
          urlApi = `https://242574c0-5ad5-468f-b924-7aeddebaab75.workers.usonialabs.com/api/projects/${project_id}/idf-documents/${document_id}/graph?loop_type=${params.loop_type}&object_list=${params.object_list}`
        }
      
        const initialData = node_graph.reduce((loopMap, loopItem) => {
          if(loopItem.group === 'nodes') {
            const nodeItem = {
              ...loopItem.data,
              position,
              id: loopItem.data.id.toString(),
              data: { label: loopItem.data.label },
            }
            loopMap.nodes += 1;
            loopMap.dataNode.push(nodeItem)
          } else if(loopItem.group === 'edges') {
            const edgeItem = {
              // ...node.data,
              id: loopItem.data.id.toString(), 
              source: loopItem.data.source.toString(), 
              target: loopItem.data.target.toString(), 
              animated: false, 
              group: 'edges',
              type: 'smoothstep' 
            }
            loopMap.edges += 1;
            loopMap.dataNode.push(edgeItem)
          }
          return loopMap
        }, {
          nodes: 0,
          edges: 0,
          dataNode: []
        })

      setElements(initialData.dataNode);
      setCountNode({
        nodes: initialData.nodes,
        edges: initialData.edges
      })
      setJsonData(node_graph);
      setEndpoint(urlApi);
    }
    fetchGraph();
  }, [typeGraph])
  
  const handleChangeType = mode => () => {
    setTypeGraph(mode)
  }
  
  function changeNormalEdge(event) {
    const { checked } = event.target;
    // setIsNormalEdge(event.target.checked);
    const cloneElements = JSON.parse(JSON.stringify(elements));
    if(checked) {
      cloneElements.forEach(item => {
        if(item.group === 'edges') {
          item.animated = true
        }
      })
    } else {
      cloneElements.forEach(item => {
        if(item.group === 'edges') {
          item.animated = false
        }
      })
    }

    onLayout(cloneElements, 'TB');
  }
  
  const onLayout = (layoutElements, direction) => {
    const isHorizontal = direction === 'LR';
    dagreGraph.setGraph({ rankdir: direction });

    layoutElements.forEach((el) => {
      if (isNode(el)) {
        dagreGraph.setNode(el.id, { width: 150, height: 50 });
      } else {
        dagreGraph.setEdge(el.source, el.target);
      }
    });

    dagre.layout(dagreGraph);

    const layoutedElements = layoutElements.map((el) => {
      if (isNode(el)) {
        const nodeWithPosition = dagreGraph.node(el.id);
        el.targetPosition = isHorizontal ? Position.Left : Position.Top;
        el.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;
        // we need to pass a slightly different position in order to notify react flow about the change
        // @TODO how can we change the position handling so that we dont need this hack?
        el.position = { x: nodeWithPosition.x + Math.random() / 1000, y: nodeWithPosition.y };
      }

      return el;
    });

    setElements(layoutedElements);
  };
  
  return (
    <div className="layouting_wrapper">
      <div className={layoutflow}>
        <div className="infoLoop">
            <button 
              type="button" 
              className="btnType" 
              onClick={handleChangeType('airgraph')}
              style={{ backgroundColor: typeGraph === 'airgraph' ? "#507cff" : "#0e1b40" }}
             >
              airgraph
            </button>
            <button 
              type="button" 
              className="btnType" 
              onClick={handleChangeType('plantLoop')}
              style={{ backgroundColor: typeGraph === 'plantLoop' ? "#507cff" : "#0e1b40" }}
             >
              Plant Loop
            </button>
            <button 
              type="button" 
              className="btnType" 
              onClick={handleChangeType('airLoop')}
              style={{ backgroundColor: typeGraph === 'airLoop' ? "#507cff" : "#0e1b40" }}
             >
              Air Loop
            </button>
            <div className="layouting_checkbox">
              <input type="checkbox" class="form-check-input" id="normalEdge" onChange={changeNormalEdge}  />
              <label class="form-check-label" for="normalEdge">Animated Edge</label>
            </div>
            <div className="mt-6">
              Nodes: {countNode?.nodes} <br />
              Edges: {countNode?.edges}
            </div>
        </div>

        {elements.length > 0 && (
          <ReactFlowProvider>
            <ReactFlow
              elements={elements}
              onConnect={onConnect}
              onElementsRemove={onElementsRemove}
              nodeExtent={nodeExtent}
              onLoad={() => onLayout(elements, 'TB')}
            >
              <Controls />
            </ReactFlow>
            <div className={controls}>
              <button onClick={() => onLayout('TB')} style={{ marginRight: 10 }}>
                vertical layout
              </button>
              <button onClick={() => onLayout('LR')}>horizontal layout</button>
            </div>
          </ReactFlowProvider>
        )}
      </div>
      <div className='layouting_drawer'>
        <div className='layouting_button'>
          <button 
            type="button" 
            class={`btn btn-sm ${tab === 'nodes' ? 'btn-primary': 'btn-secondary' }`}
            onClick={() => setTab('nodes')}
          >
            Nodes
          </button>
          <button 
            type="button" 
            class={`btn btn-sm ${tab === 'json' ? 'btn-primary': 'btn-secondary' }`}
            onClick={() => setTab('json')}
          >
            Show Json
          </button>
        </div>
        <div className="layouting_endpoint">
          {endPoint}
        </div>
        <div className="layouting_link">
          <button 
            type="button" 
            class="btn btn-link btn-sm"
            onClick={() => copyToClipboard(endPoint)}
          >
            Copy Endpoint
          </button>
          <button 
            type="button" 
            class="btn btn-link btn-sm"
            onClick={() => copyToClipboard(JSON.stringify(jsonData))}
           >
            Copy JSON
          </button>
        </div>

        <div className="layouting_content">
          {tab === 'json' && (
            <div>
              <ReactJsonViewer enableClipboard={false} src={jsonData} />
            </div>
          )}

          {tab === 'nodes' && (
            <div>
              nodes
            </div>
          )}
        </div>
      </div>
    </div>
    
  );
};

// Usonia wrapper and ReactDOM.render
(async () => {
  
  await UsoniaApiClient.init({
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
  
  ReactDOM.render(
    <App />,
    document.getElementById("root")
  );
})();

// Usonia wrapper and ReactDOM.render
(async () => {
  
  await UsoniaApiClient.init({
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
  
  ReactDOM.render(
    <App />,
    document.getElementById("root")
  );
})();

// css
// body {
//   height: 100vh;
//   margin: 0;
//   display: grid;
//   place-items: center;
// }
// .box {
//   width: 300px;
//   h1 {
//     font-size: 20px;
//     margin: 0 0 1rem 0;
//   }
// }

// #root, #root > div {
//   width: 100%;
//   height: calc(100vh - 35px);
// }

// .btnType {
//   background-color: #0e1b40;
//   outline: 0;
//   border: 0;
//   border-radius: 4px;
//   padding: 8px 12px;
//   color: #fff;
//   cursor: pointer
// }

// .btnType + .btnType {
//  margin-left: 12px;
// }

// .infoLoop {
//   margin-left: 12px;
// }

// .mt-6 {
//   margin-top: 6px  
// }

// .modalJson {
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;
//   z-index: 12;
// }

// .modalJson_blur {
//   content: "";
//   position: absolute;
//   z-index: 1;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.6)
// }

// .modalJson_content {
//   position: absolute;
//   background: #fff;
//   z-index: 1;
//   width: 90%;
//   height: 60%;
//   transform: translate(-50%, -50%);
//   left: 50%;
//   top: 38%;
//   overflow-y: scroll;
//   padding: 16px;
//   border-radius: 8px;
// }

// .modalJson_content p {
//   border-bottom: 1px solid #d1cece;
//   margin-bottom: 8px;
//   padding-bottom: 4px;
// }

// .layouting_wrapper {
//   display: flex;
//   height: 100%;
// }

// .layouting_drawer {
//   background: #fcfcfc;
//   border-left: 1px solid #eee;
//   font-size: 12px;
//   padding: 0px 10px;
//   max-width: 250px;
//   height: 100% !important;
//   width: 100%;
//   position: relative;
//   z-index: 10;
// }

// .layouting_button {
//   display: flex;
//   justify-content: center;
// }

// .layouting_button button {
//   margin: 0 8px;
// }

// .layouting_content {
//   margin-top: 12px;
//   height: calc(100vh - 380px);
//   overflow-y: auto;
//   position: relative;
// }

// .layouting_wrapper  > div {
//   width: 100%;
//   height: calc(100vh - 358px);
// }

// .btn {
//   cursor: pointer;
//   display: inline-block;
//   font-weight: 400;
//   color: #212529;
//   text-align: center;
//   vertical-align: middle;
//   -webkit-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;
//   background-color: transparent;
//   border: 1px solid transparent;
//   padding: 0.375rem 0.75rem;
//   font-size: 1rem;
//   line-height: 1.5;
//   border-radius: 0.25rem;
//   transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
// }

// .btn-secondary {
//   color: #fff;
//   background-color: #6c757d;
//   border-color: #6c757d;
// }

// .btn-primary {
//   color: #fff;
//   background-color: #007bff;
//   border-color: #007bff;
// }

// .btn-sm {
//   padding: 0.25rem 0.5rem;
//   font-size: .875rem;
//   line-height: 1.5;
//   border-radius: 0.2rem;
// }

// .layouting_endpoint {
//   margin-top: 12px;
//   word-break: break-all;
// }

// .btn-link {
//     font-weight: 400;
//     color: #007bff;
//     text-decoration: none;
// }

// .layouting_checkbox {
//   display: inline-block;
//   margin-left: 12px;
//   cursor: pointer;
// }

// .layouting_checkbox .form-check-input {
//   margin-top: 0;
//   margin-right: 6px;
// }
