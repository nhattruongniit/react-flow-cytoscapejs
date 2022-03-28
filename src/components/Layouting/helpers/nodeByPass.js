export const nodeSecondaryByPass = (data, disclamer) => {
  const regexByPass = new RegExp(/(Bypass)/);
  const loopItem = data.filter(item => Object.keys(item.data).find(key => key.includes('loop')));
  const dataSecondDemand = loopItem.filter(item => item.data.loop.includes('Secondary Chilled Water Loop:demand'));
  const dataSecondSupply = loopItem.filter(item => item.data.loop.includes('Secondary Chilled Water Loop:supply'));
  
  console.log('dataSecondDemand: ', dataSecondDemand )
  console.log('dataSecondSupply: ', dataSecondSupply )


}