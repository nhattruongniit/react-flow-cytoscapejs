import { POSITION_NODE, SIZE_NODE } from './constant';

const regexInlet = new RegExp(/(to_)\w+/);
const regexOutlet = new RegExp(/(from_)\w+/);

export default function clockwiseDiagram(dataNodes, groupNodes, hashMapOrderLoop, dataEdges) {
  const fullData = [].concat(dataNodes, dataEdges);

  const startNode = [];
  const endNode = [];
  fullData.forEach(node => {
    const inlet = node?.nodes?.inlet.filter(item => !regexInlet.test(item));
    const outlet = node?.nodes?.outlet.filter(item => !regexOutlet.test(item));
    const isSource = dataEdges.map(edge => edge.source).indexOf(node.id);
    const isTarget = dataEdges.map(edge => edge.target).indexOf(node.id);
    // find start node
    const isStartNode = inlet?.length === 1 && outlet?.length === 1 && isSource > -1 && isTarget <= -1
    if(isStartNode && node.isNode) {
      if(node.halfLoop === 'demand') {
        node.position = {
          x: POSITION_NODE.startNode.x,
          y: POSITION_NODE.startNode.y
        }
      }
      startNode.push(node)
    }
    
    // find end node
    const isEndNode = inlet?.length === 1 && outlet?.length === 1 && isSource <= -1 && isTarget > -1
    if(isEndNode && node.isNode) {
      if(node.halfLoop === 'demand') {
        node.position = {
          x: 170,
          y: 20
        }
      }
      endNode.push(node)
    }
  })

  const nextNode01OfStartNode = [];
  const nextNode01OfEndNode = [];
  dataNodes.forEach(node => {
    // find next node 1 of start node
    const isNextNode01 = startNode.some(ele => ele.target.includes(node.id))
    if(isNextNode01 && node.isNode) {
      if(node.halfLoop === 'demand') {
        node.position = {
          x: POSITION_NODE.startNode.x - 200,
          y: POSITION_NODE.startNode.y
        }
      }
      nextNode01OfStartNode.push(node)
    }

    // find next node 1 of end node
    const isNextNode01OfEndNode = endNode.some(ele => ele.source.includes(node.id))
    if(isNextNode01OfEndNode && node.isNode) {
      if(node.halfLoop === 'demand') {
        node.position = {
          x: POSITION_NODE.startNode.x - 200,
          y: 20
        }
      }
      nextNode01OfEndNode.push(node)
    }
  })

  dataNodes.forEach(node => {
    // find next node 2
    const isNextNode02 = nextNode01OfStartNode.some(ele => node.source.includes(ele.id) && ele.target.includes(node.id))

    console.log('isNextNode02: ', isNextNode02)
    if(isNextNode02 && node.isNode) {
      if(node.halfLoop === 'demand') {
        node.position = {
          x: POSITION_NODE.startNode.x - 500,
          y: POSITION_NODE.startNode.y
        }
      }
    }

    // find next node 1 of end node
    // const isNextNode01OfEndNode = endNode.some(ele => ele.source.includes(node.id))
    // if(isNextNode01OfEndNode && node.isNode) {
    //   if(node.halfLoop === 'demand') {
    //     node.position = {
    //       x: POSITION_NODE.startNode.x - 200,
    //       y: 20
    //     }
    //   }
    // }
  })
  
  console.log('dataNodes: ', dataNodes);
  console.log('dataEdges: ', dataEdges)
  console.log('startNode: ', startNode)
  console.log('endNode: ', endNode)

  console.log('nextNode1OfStartNode: ', nextNode01OfStartNode)
  console.log('nextNode1OfEndNode: ', nextNode01OfEndNode)

  const nodeGroup = Object.keys(groupNodes).reduce((nodeMap, nodeItem, index) => {
    // push parent node item
    const order = index + 1;
    let x = POSITION_NODE.startGroup.x;

    if(order === 3) {
      x = POSITION_NODE.startGroup.x + POSITION_NODE.nextGroup.x
    }

    if(order > 3) {
      x = POSITION_NODE.startGroup.x + POSITION_NODE.nextGroup.x + 20
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