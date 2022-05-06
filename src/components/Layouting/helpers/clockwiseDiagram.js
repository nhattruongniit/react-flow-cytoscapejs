
export default function clockwiseDiagram(dataNodes, groupNodes, hashMapOrderLoop) {
  const nodeParent = Object.keys(groupNodes).reduce((nodeMap, nodeItem, index) => {
    // push parent node item
    const order = index + 1;
    let x = 450;

    if(order === 3) {
      x = 475
    }

    const nodeObj = {
      id: hashMapOrderLoop[nodeItem],
      // data: { label: `Loop ${order}`},
      data: { label: ''},
      isNotDynamicNode: true,
      group: nodeItem,
      position: {
        x: x * index ,
        y: 50,
      },
      style: {
        width: 540,
        height: 400
      }
    }
    nodeMap.nodes.push(nodeObj);


    return nodeMap;
  }, {
    nodes: [],
  });

  const closeWiseSystem = nodeParent.nodes;

  // const coolingSystem = nodesParent.nodes.concat(nodeSecondaryDemand, nodeSecondarySupply, nodePrimaryDemand, nodePrimarySupply, nodeCondenserLoopDemand, nodeCondenserLoopSupply);

  return closeWiseSystem;
}