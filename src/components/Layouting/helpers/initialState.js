import { POSITION } from './constant';

export default function initialState(data) {
  // initial nodes
  const nodes = [];
  data.filter(item => Object.keys(item.data).find(key => key.includes('loop')))
    .forEach(nodeItem => {
      nodeItem.data.loop.forEach(item => {
        nodes.push( {
          ...nodeItem.data,
          id: nodeItem.data.id.toString(),
          group: item.split(':')[0],
          position: { ...POSITION.defaultNode},
          type: 'input',
          data: {
            label: nodeItem.data.label
          }
        })
      })
    });

  // find group nodes
  const groupNodes = [...new Set(nodes.map(ele => ele.group))].reduce((acc, curr) => {
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

  // order parent loop
  const hashMapOrderLoop = Object.keys(groupNodes).reduce((acc, curr, index) => {
    acc[curr] = `${index + 1}`.toString();
    return acc;
  }, {});

  return {
    dataNodes: nodes,
    groupNodes,
    hashMapOrderLoop
  }
}