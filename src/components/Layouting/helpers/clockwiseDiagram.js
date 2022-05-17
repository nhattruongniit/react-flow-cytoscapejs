import { POSITION_NODE, SIZE_NODE } from './constant';

const regexInlet = new RegExp(/(to_)\w+/);
const regexOutlet = new RegExp(/(from_)\w+/);

export default function clockwiseDiagram(dataNodes, groupNodes, hashMapOrderLoop, dataEdges) {

  // console.log('dataNodes: ', dataNodes);
  // console.log('dataEdges: ', dataEdges);
  // console.log('groupNodes: ', groupNodes);
  // console.log('hashMapOrderLoop: ', hashMapOrderLoop);
  const fullData = [].concat(dataNodes, dataEdges);
  
  // find startNode
  fullData.forEach(item => {
    const inlet = item?.nodes?.inlet.filter(item => !regexInlet.test(item));
    const outlet = item?.nodes?.outlet.filter(item => !regexOutlet.test(item));
    const isSource = dataEdges.map(edge => edge.source).indexOf(item.id);
    const isTarget = dataEdges.map(edge => edge.target).indexOf(item.id);

    // start node
    const isStartNode = inlet?.length === 1 && outlet?.length === 1 && isSource > -1 && isTarget <= -1
    if(isStartNode && item.isNode) {
      if(item.halfLoop === 'demand') {
        item.position = {
          x: POSITION_NODE.startNode.x,
          y: POSITION_NODE.startNode.y
        }
      }
    }

    // end node
    const isEndNode = inlet?.length === 1 && outlet?.length === 1 && isSource <= -1 && isTarget > -1
    if(isEndNode && item.isNode) {
      if(item.halfLoop === 'demand') {
        item.position = {
          x: 170,
          y: 20
        }
      }
    }

  })


  // dataEdges.forEach(edge => {
  //   dataNodes.forEach(node => {
  //     const inlet = node?.nodes?.inlet.filter(item => !regexInlet.test(item));
  //     const outlet = node?.nodes?.outlet.filter(item => !regexOutlet.test(item));
  //     const isTarget = node.id === edge.target;
  //     const isSource = node.id === edge.source;
  //     if(inlet?.length === 1 && outlet?.length === 1) {
  //       console.log('node: ', node)
  //       nodeOneInletOneOutlet.push(node)
  //     }
  //   })
  // })



  console.log('dataNodes: ', dataNodes);
 console.log('dataEdges: ', dataEdges)
//  console.log('startNode: ', startNode)

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