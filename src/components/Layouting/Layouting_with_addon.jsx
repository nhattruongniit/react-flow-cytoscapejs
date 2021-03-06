import React, { useState, useLayoutEffect } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  isNode,
  Position,
  Handle,
} from 'react-flow-renderer';
import dagre from 'dagre';
import ReactJson from 'react-json-view';

// libs
import utils from "@usonia/usonia-addon-utils";

// utils
import { copyToClipboard } from 'helpers/copyToClipboard';

const position = { x: 0, y: 0 };

const dagreGraph = new dagre.graphlib.Graph({ multigraph: true });
dagreGraph.setDefaultEdgeLabel(() => ({}));

const regexTo = new RegExp(/(to_)\w+/);
const regexFrom = new RegExp(/(from_)\w+/);

const customNodeStyles = {
  background: '#9CA8B3',
  color: '#FFF',
  textAlign: 'center',
  width: 150,
  minHeight: 50,
  padding: '15px 0'
};

const LayoutFlow = () => {
  const [elements, setElements] = useState([]);
  const [countNode, setCountNode] = useState({});
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
  const [typeGraph, setTypeGraph] = useState('plantLoop');
  const [jsonData, setJsonData] = useState(null);
  const [endPoint, setEndpoint] = useState('');
  const [tab, setTab] = useState('json');
  const [isHorizontal, setIsHorizontal] = useState('LR')

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

    onLayout(cloneElements, 'LR');
  }

  const onLayout = (layoutElements, direction = 'LR') => {
    const isHorizontal = direction === 'LR';
    
    // set direction layout
    setIsHorizontal(direction);

    dagreGraph.setGraph({ rankdir: direction });

    layoutElements.forEach((el) => {
      if (isNode(el)) {
        dagreGraph.setNode(el.id, { width: 150, height: 80 });
      } else {
        dagreGraph.setEdge(el.source, el.target);
      }
    });

    dagre.layout(dagreGraph);

    const layoutedElements = layoutElements.map((el, index) => {
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


  const CustomNodeComponent = ({ id, data }) => {
    const nodeItem = elements.find(element => Number(element.id) === Number(id)) 
    let renderSource = null;
    let renderTarget = null;

    // inlet
    if(nodeItem?.nodes?.inlet.length > 0) {
      const filterNodeNoTo = nodeItem?.nodes?.inlet.filter(item => !regexTo.test(item));
      renderTarget = filterNodeNoTo.map((node, idx) => (
        <div key={idx}>
          <span
            style={{ fontSize: 9, position: 'absolute', top: 5, left: idx === 0 ? 67 : `${idx * (67 / filterNodeNoTo.length)}px` }}
          >
            in
          </span>
          <Handle 
            key={node}
            id={node}
            type="target" 
            position={Position.Top} 
            style={{ top: 0, left: idx === 0 ? 75 : `${idx * (75 / filterNodeNoTo.length)}px`, borderRadius: 0 }}
          />
        </div>
      ))
    }

    // outlet
    if(nodeItem?.nodes?.outlet.length > 0) {
      const filterNodeNoFrom = nodeItem?.nodes?.outlet.filter(item => !regexFrom.test(item));
      renderSource = filterNodeNoFrom.map((node, idx) => (
        <div key={idx}>
          <span
            style={{ fontSize: 9, position: 'absolute', bottom: 5, left: idx === 0 ? 67 : `${idx * (67 / filterNodeNoFrom.length)}px` }}
          >
            out
          </span>
          <Handle
            key={node}
            type="source"
            position={Position.Bottom} 
            id={node}
            style={{ bottom: 0, left: idx === 0 ? 75 : `${idx * (75 / filterNodeNoFrom.length)}px`, borderRadius: 0 }}
          />
        </div>
        
      ))
    }

    return (
      <div style={customNodeStyles}>
        {renderTarget}
        <div className='layouting_label'>
          {data.text} - {id}
        </div>
        {renderSource}
      </div>
    );
  };

  const nodeTypes = {
    special: CustomNodeComponent,
  };

  useLayoutEffect(() => {
    async function fetchGraph() {
      setElements([]);
      const document_id = await utils.getContext().idf_document;
      const project_id = await utils.getContext().project;
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
        node_graph = await utils.idfApi.getAirGraph(document_id);
        urlApi = `https://242574c0-5ad5-468f-b924-7aeddebaab75.workers.usonialabs.com/api/projects/${project_id}/idf-documents/${document_id}/airgraph`
      } else {
        node_graph = await utils.idfApi.getNodeGraph(document_id, params);
        urlApi = `https://242574c0-5ad5-468f-b924-7aeddebaab75.workers.usonialabs.com/api/projects/${project_id}/idf-documents/${document_id}/graph?loop_type=${params.loop_type}&object_list=${params.object_list}`
      }
      
      const initialData = node_graph.reduce((loopMap, loopItem) => {
        if(loopItem.group === 'nodes') {
          const nodeItem = {
            ...loopItem.data,
            position,
            id: loopItem.data.id.toString(),
            // data: { label: loopItem.data.label },
            data: { text: loopItem.data.label },
            type: 'special',
          }
          loopMap.nodes += 1;
          loopMap.dataNode.push(nodeItem);
        } else if(loopItem.group === 'edges') {
          const edgeItem = {
            ...loopItem.data,
            id: loopItem.data.id.toString(), 
            source: loopItem.data.source.toString(), 
            target: loopItem.data.target.toString(), 
            animated: false, 
            group: 'edges',
            type: 'smoothstep', 
            targetHandle: loopItem.data.to_node.toString(),
            sourceHandle: loopItem.data.from_node.toString()
          }
          loopMap.edges += 1;
          loopMap.dataNode.push(edgeItem);
        }
        return loopMap
      }, {
        nodes: 0,
        edges: 0,
        dataNode: []
      });
      setElements(initialData.dataNode);
      setCountNode({
        nodes: initialData.nodes,
        edges: initialData.edges
      });
      setJsonData(node_graph);
      setEndpoint(urlApi);
    }
    fetchGraph();
  }, [typeGraph])

  const handleChangeType = mode => () => {
    setTypeGraph(mode)
  }

  return (
    <div className='layouting_wrapper'>
      <div className="layoutflow">
        <div className="infoLoop">
          <div className='infoTop'>
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
              <input type="checkbox" className="form-check-input" id="normalEdge" onChange={changeNormalEdge}  />
              <label className="form-check-label" htmlFor="normalEdge">Animated Edge</label>
            </div>
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
              nodeTypes={nodeTypes}
              // nodeExtent={nodeExtent}
              onLoad={() => onLayout(elements, 'LR')}
            >
              <Controls />
            </ReactFlow>
            <div className="controls">
              <button 
                type="button" 
                className={isHorizontal === 'TB' ? 'btn btn-info' : 'btn btn-secondary' }
                onClick={() => onLayout(elements, 'TB')} 
                style={{ marginRight: 10 }}
              >
                vertical layout
              </button>
              <button 
                type="button" 
                className={isHorizontal === 'LR' ? 'btn btn-info' : 'btn btn-secondary' }
                onClick={() => onLayout(elements, 'LR')}
              >
                horizontal layout
              </button>
            </div>
          </ReactFlowProvider>
        )}
      </div>
      <div className='layouting_drawer'>
        <div className='layouting_button'>
          <button 
            type="button" 
            className={`btn btn-sm ${tab === 'nodes' ? 'btn-primary': 'btn-secondary' }`}
            onClick={() => setTab('nodes')}
          >
            Nodes
          </button>
          <button 
            type="button" 
            className={`btn btn-sm ${tab === 'json' ? 'btn-primary': 'btn-secondary' }`}
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
            className="btn btn-link btn-sm"
            onClick={() => copyToClipboard(endPoint)}
          >
            Copy Endpoint
          </button>
          <button 
            type="button" 
            className="btn btn-link btn-sm"
            onClick={() => copyToClipboard(JSON.stringify(jsonData))}
           >
            Copy JSON
          </button>
        </div>

        <div className="layouting_content">
          {tab === 'json' && (
            <div>
              <ReactJson enableClipboard={false} src={elements} />
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

export default LayoutFlow;