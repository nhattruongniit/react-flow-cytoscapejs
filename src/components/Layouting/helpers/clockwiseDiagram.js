import { POSITION_NODE, SIZE_NODE } from './constant';

export default function clockwiseDiagram(dataNodes, groupNodes, hashMapOrderLoop, dataEdges) {

  console.log('dataNodes: ', dataNodes)
  console.log('dataEdges: ', dataEdges)
  console.log('groupNodes: ', groupNodes)
  console.log('hashMapOrderLoop: ', hashMapOrderLoop)
  
  const specifiyNodes = dataNodes.reduce((nodeMap, nodeItem) => {
    // start node
    return nodeMap;
  }, {
    nodes: []
  })


  console.log('specifiyNodes: ', specifiyNodes)

  const nodeGroup = Object.keys(groupNodes).reduce((nodeMap, nodeItem, index) => {
    // push parent node item
    const order = index + 1;
    let x = POSITION_NODE.startGroup.x;

    if(order === 3) {
      x = POSITION_NODE.startGroup.x + POSITION_NODE.nextGroup.x
    }

    const nodeObj = {
      id: hashMapOrderLoop[nodeItem],
      // data: { label: `Loop ${order}`},
      data: { label: ''},
      isNotDynamicNode: true,
      group: nodeItem,
      position: {
        x: x * index ,
        y: POSITION_NODE.startGroup.y,
      },
      style: {
        width: SIZE_NODE.group.width,
        height: SIZE_NODE.group.height,
      }
    }

    nodeMap.nodes.push(nodeObj);

    return nodeMap;
  }, {
    nodes: [],
  });

  const closeWiseSystem = nodeGroup.nodes.concat(dataNodes);

  // const coolingSystem = nodesParent.nodes.concat(nodeSecondaryDemand, nodeSecondarySupply, nodePrimaryDemand, nodePrimarySupply, nodeCondenserLoopDemand, nodeCondenserLoopSupply);

  return closeWiseSystem;
}