import { POSITION_NODE } from './constant';

export default function initialState(data) {
  // initial edges
  const dataEdges = data.reduce((acc, curr) => {
    if(curr.group === 'edges') {
      const edgeItem = {
        ...curr.data,
        id: curr.data.id.toString(), 
        source: curr.data.source.toString(), 
        target: curr.data.target.toString(), 
        animated: true, 
        type: 'step', 
        isNode: false,
        data: { text: curr.data.id.toString() },
        targetHandle: curr.data.to_node.toString(),
        sourceHandle: curr.data.from_node.toString()
      }
      acc.edges.push(edgeItem);
    }
    return acc
  }, {
    edges: [],
  })

  // initial nodes
  const nodes = [];
  data.filter(item => Object.keys(item.data).find(key => key.includes('loop')))
    .forEach(nodeItem => {
      nodeItem.data.loop.forEach(item => {
        nodes.push( {
          ...nodeItem.data,
          id: nodeItem.data.id.toString(),
          group: item.split(':')[0],
          position: { ...POSITION_NODE.defaultNode},
          style: {
            width: 190,
            height: 22
          },
          type: 'input',
          isNode: true,
          halfLoop: item.split(':')[item.split(':').length - 1],
          label:item,
          data: {
            label: nodeItem.data.label
          }
        })
      })
    });

  // find group nodes
  const groupNodes = [...new Set(nodes.map(ele => ele.label))].reduce((acc, curr) => {
    const currSplit = curr.split(':');
    const textFirst = currSplit[0];
    const textLast = currSplit[currSplit.length - 1];
    if(acc.hasOwnProperty(textFirst)) {
      if(acc[textFirst].hasOwnProperty(textLast)) {
        acc[textFirst][textLast].push(curr);
      } else {
        acc[textFirst] = {
          ...acc[textFirst],
          [textLast]: acc[textFirst][textLast] ? acc[textFirst][textLast].concat(curr) : [].concat(curr)
        }
      }
    } else {
      acc[textFirst] = {
        ...acc[textFirst],
        [textLast]: [].concat(curr)
      }
    } 
    return acc;
  }, {});

  console.log('groupNodes: ', groupNodes)

  // order parent loop
  const hashMapOrderLoop = Object.keys(groupNodes).reduce((acc, curr, index) => {
    acc[curr] = `${index + 1}`.toString();
    return acc;
  }, {});

  // add source, target fields into each nodes
  const newNodes = [];
  const fullData = [].concat(nodes, dataEdges.edges);
  fullData.forEach(node => {
    if(node.isNode) {
      node.parentNode = hashMapOrderLoop[node.group];
      const target = dataEdges.edges.filter(edge => (edge.target !== node.id) && (edge.source === node.id)).map(item => item.target) || [];
      const source = dataEdges.edges.filter(edge => (edge.target === node.id) && (edge.source !== node.id)).map(item => item.source) || [];
      node.target = target;
      node.source = source
      newNodes.push(node)
    }
  })

  return {
    dataNodes: newNodes,
    dataEdges: dataEdges.edges,
    groupNodes,
    hashMapOrderLoop,
    defaultData: data
  }
}