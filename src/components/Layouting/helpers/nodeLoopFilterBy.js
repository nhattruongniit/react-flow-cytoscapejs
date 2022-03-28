
export const nodeLoopFilterBy = (data, disclamer) => {
  const currSplit = disclamer.split(':');
  const loopItem = data.filter(item => Object.keys(item.data).find(key => key.includes('loop')));
  const nodes = loopItem.filter(item => item.data.loop.includes(disclamer));
  const dataNodes = [];
  nodes.forEach((demandItem) => {
    const demandObj = {
      ...demandItem.data,
      key: currSplit[0],
      lastText: currSplit[currSplit.length - 1],
      id: `${demandItem.data.id}`.toString(),
      data: { label: demandItem.data.label},
      isNotDynamicNode: true,
      type: "special",
      position: {
        x: 20,
        y: 40
      },
    }
    dataNodes.push(demandObj);
  })

  return dataNodes;
}