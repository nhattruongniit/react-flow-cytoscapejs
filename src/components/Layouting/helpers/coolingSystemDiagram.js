// helpers
import { nodeLoopFilterBy } from './nodeLoopFilterBy';
import { regexOnlyPump, regexOnlyPipe, regexOnlyCoilCooling, regexByPass, regexInlet, regexOutlet } from './regexNodes';

function renderNodeSecondaryChilled(data, hashMapOrderLoop) {

  // demand
  const nodeTextDemand = [{
    id: Math.random(0,100).toString(),
    key: "Secondary Chilled Water Loop",
    type: "special",
    data: { text: 'Demand' },
    isNotDynamicNode: true,
    class: 'nodeOnlyText',
    position: {
      x: 0,
      y: 0
    }
  }]
  const nodeTextMain = [{
    id: Math.random(0,100).toString(),
    key: "Secondary Chilled Water Loop",
    type: "special",
    data: { text: 'Secondary Chilled Water Loop' },
    isNotDynamicNode: true,
    class: 'nodeOnlyTextMain',
    position: {
      x: 0,
      y: 0
    }
  }]
  let nodeSecondaryDemand = nodeLoopFilterBy(data, 'Secondary Chilled Water Loop:demand').concat(nodeTextDemand, nodeTextMain);
  nodeSecondaryDemand = nodeSecondaryDemand.map((item) => {
    const isConnectorMixer = item.class === 'Connector:Mixer';
    const isConnectorSplitter = item.class === 'Connector:Splitter';
    const isByPassDemand = regexByPass.test(item.label) && item.loop.includes('Secondary Chilled Water Loop:demand');
    const isCoolingCoil = regexOnlyCoilCooling.test(item.class);
    const isPipeInlet = regexInlet.test(item.label) && regexOnlyPipe.test(item.class);
    const isPipeOutlet = regexOutlet.test(item.label) && regexOnlyPipe.test(item.class);
    const isTextDemand = item.data.text === 'Demand';
    const isTextMain = item.data.text === 'Secondary Chilled Water Loop';

    let nodeX = 60;
    let nodeY = 10;
    let classCss = '';
    if(isConnectorMixer) {
      nodeY = 20;
      classCss = `secondaryDemand-mixer-${hashMapOrderLoop[item.key]}`
    }
    if(isConnectorSplitter) {
      nodeY = 260;
      classCss = `secondaryDemand-splitter-${hashMapOrderLoop[item.key]}`
    }
    if(isByPassDemand) {
      nodeX = 26;
      nodeY = 140;
      classCss = `secondaryDemand-byPass-${hashMapOrderLoop[item.key]}`
    }
    if(isPipeInlet) {
      nodeX = 170;
      nodeY = 261.5;
      classCss = `lineDarkBlue rotate180deg secondaryDemand-isPipeInlet-${hashMapOrderLoop[item.key]}`
    }
    if(isPipeOutlet) {
      nodeX = 170;
      nodeY = 20;
      classCss = `lineDarkBlue secondaryDemand-isPipeOutlet-${hashMapOrderLoop[item.key]}`
    } 
    if(isTextDemand) {
      nodeX = 45;
      nodeY = 135;
      classCss = 'transparent nodeOnlyText';
    }
    if(isTextMain) {
      nodeX = 180;
      nodeY = 130;
      classCss = 'transparent nodeOnlyTextMain';
    }
    if(isCoolingCoil) {
      return {
        ...item,
        data: { text: 'Cooling Coil' },
        type: 'special',
        hasBorder: true,
        isNotDynamicNode: true,
        parentNode: hashMapOrderLoop[item.key],
        size: {
          maxWidth: 65
        },
        lineCss: 'lineCss isCoolingCoil',
        line: 2,
        position: {
          x: 20,
          y: 120
        },
      }
    }
    return {
      ...item,
      parentNode: hashMapOrderLoop[item.key],
      type: "special",
      classCss,
      position: {
        x: nodeX,
        y: nodeY
      }
    }
  })

  // supply
  const nodeTextSupply = [{
    id: Math.random(0,100).toString(),
    key: "Secondary Chilled Water Loop",
    type: "special",
    data: { text: 'Supply' },
    isNotDynamicNode: true,
    class: 'nodeOnlyText',
    position: {
      x: 0,
      y: 0
    }
  }]
  let nodeSecondarySupply = nodeLoopFilterBy(data, 'Secondary Chilled Water Loop:supply').concat(nodeTextSupply);
  nodeSecondarySupply = nodeSecondarySupply.map((item) => {
    const isConnectorMixer = item.class === 'Connector:Mixer';
    const isConnectorSplitter = item.class === 'Connector:Splitter';
    const isHeatExchanger = item.class === 'HeatExchanger:FluidToFluid';
    const isPump = regexOnlyPump.test(item.class);
    const isTextSupply = item.data.text === 'Supply';
    // const isByPassSupply = regexByPass.test(item.label) && item.loop.includes('Secondary Chilled Water Loop:supply');
    const isByPassSupply = regexByPass.test(item.connecting_node);
    const isPipeOutlet = regexOutlet.test(item.label) && regexOnlyPipe.test(item.class);

    let nodeX = 330;
    let nodeY = 0;
    let classCss = '';

    if(isConnectorMixer) {
      nodeY = 260;
      classCss = `secondarySupply-mixer-${hashMapOrderLoop[item.key]}`
    }
    if(isConnectorSplitter) {
      nodeY = 20;
      classCss = `secondarySupply-splitter-${hashMapOrderLoop[item.key]}`
    }
    if(isByPassSupply) {
      nodeX = 364;
      nodeY = 140;
      classCss = `secondarySupply-byPass-${hashMapOrderLoop[item.key]}`
    }
    if(isPump) {
      nodeX = 300;
      nodeY = -8;
      classCss = `secondarySupply-isPump-${hashMapOrderLoop[item.key]}`
    }
    if(isPipeOutlet) {
      nodeX = 275;
      nodeY = 260;
      classCss = `lineDarkBlue secondarySupply-isPipeOutlet-${hashMapOrderLoop[item.key]} `
    }
    if(isTextSupply) {
      nodeX = 350;
      nodeY = 135;
      classCss = 'transparent nodeOnlyText';
    }
    if(isHeatExchanger) {
      nodeX = 460;
      nodeY = 120;
      classCss = `secondarySupply-isPipeOutlet-${hashMapOrderLoop[item.key]} `
      return {
        ...item,
        parentNode: hashMapOrderLoop[item.key],
        data: { text: 'Plate Heat Exchanger' },
        type: "special",
        hasBorder: true,
        isNotDynamicNode: true,
        lastText: '',
        size: {
          maxWidth: 65
        },
        position: {
          x: nodeX,
          y: nodeY
        },
        line: 4,
        lineCss: 'lineCss isPlateHeat' 
      }
    }
    return {
      ...item,
      parentNode: hashMapOrderLoop[item.key],
      type: "special",
      classCss,
      position: {
        x: nodeX,
        y: nodeY
      }
    }
  })

  return {
    nodeSecondaryDemand,
    nodeSecondarySupply
  }
}

function renderNodePrimaryChilled(data, hashMapOrderLoop) {
  // demand
  const nodeTextDemand = [{
    id: Math.random(0,100).toString(),
    key: "Primary Chilled Water Loop",
    type: "special",
    data: { text: 'Demand' },
    isNotDynamicNode: true,
    class: 'nodeOnlyText',
    position: {
      x: 0,
      y: 0
    }
  }]
  const nodeTextMain = [{
    id: Math.random(0,100).toString(),
    key: "Primary Chilled Water Loop",
    type: "special",
    data: { text: 'Primary Chilled Water Loop' },
    isNotDynamicNode: true,
    class: 'nodeOnlyTextMain',
    position: {
      x: 0,
      y: 0
    }
  }]

  const primaryChilledDemand = nodeLoopFilterBy(data, 'Primary Chilled Water Loop:demand');
  let nodePrimaryDemand = primaryChilledDemand.filter(item => item.class !== 'HeatExchanger:FluidToFluid').concat(nodeTextDemand, nodeTextMain);
  nodePrimaryDemand = nodePrimaryDemand.map((item) => {
    const isConnectorMixer = item.class === 'Connector:Mixer';
    const isConnectorSplitter = item.class === 'Connector:Splitter';
    const isByPassDemand = regexByPass.test(item.label) && item.loop.includes('Primary Chilled Water Loop:demand');
    const isPipeInlet = regexInlet.test(item.label) && regexOnlyPipe.test(item.class);
    const isPipeOutlet = regexOutlet.test(item.label) && regexOnlyPipe.test(item.class);
    const isTextDemand = item.data.text === 'Demand';
    const isTextMain = item.data.text === 'Primary Chilled Water Loop';

    let nodeX = 60;
    let nodeY = 0;
    let classCss = '';
    if(isConnectorMixer) {
      nodeY = 20;
      classCss = `primaryDemand-mixer-${hashMapOrderLoop[item.key]}`
    }
    if(isConnectorSplitter) {
      nodeY = 260;
      classCss = `primaryDemand-splitter-${hashMapOrderLoop[item.key]}`
    }
    if(isByPassDemand) {
      nodeX = 26;
      nodeY = 140;
      classCss = `primaryDemand-byPass-${hashMapOrderLoop[item.key]}`
    }
    if(isPipeInlet) {
      nodeX = 180;
      nodeY = 260;
      classCss = `lineDarkBlue primaryDemand-isPipeInlet-${hashMapOrderLoop[item.key]}`
    }
    if(isPipeOutlet) {
      nodeX = 180;
      nodeY = 20;
      classCss = `lineDarkBlue primaryDemand-isPipeOutlet-${hashMapOrderLoop[item.key]}`
    } 
    if(isTextDemand) {
      nodeX = 45;
      nodeY = 135;
      classCss = 'transparent nodeOnlyText';
    }
    if(isTextMain) {
      nodeX = 173;
      nodeY = 130;
      classCss = 'transparent nodeOnlyTextMain';
    }
    return {
      ...item,
      parentNode: hashMapOrderLoop[item.key],
      type: "special",
      classCss,
      position: {
        x: nodeX,
        y: nodeY
      }
    }
  })

  // supply
  const anotherNodeSupply = [
    {
      id: Math.random(0,100).toString(),
      key: "Primary Chilled Water Loop",
      type: "special",
      data: { text: 'Supply' },
      isNotDynamicNode: true,
      class: 'nodeOnlyText',
      note: 'anotherNodeSupply',
      position: {
        x: 0,
        y: 0
      }
    }
  ]

  let nodePrimarySupply = nodeLoopFilterBy(data, 'Primary Chilled Water Loop:supply').concat(anotherNodeSupply);

  nodePrimarySupply = nodePrimarySupply.map((item) => {
    const isConnectorMixer = item.class === 'Connector:Mixer';
    const isConnectorSplitter = item.class === 'Connector:Splitter';
    const isDistrictCooling = item.class === 'DistrictCooling';
    const isPump = regexOnlyPump.test(item.class)
    const isTextSupply = item.data.text === 'Supply';
    const isByPassSupply = regexByPass.test(item.label) && item.loop.includes('Primary Chilled Water Loop:supply');
    const isPipeOutlet = regexOutlet.test(item.label) && regexOnlyPipe.test(item.class);
    const isLittleChiller = item.data.label === "Little Chiller";
    const isBigChiller = item.data.label === "Big Chiller";

    let nodeX = 385;
    let nodeY = 0;
    let classCss = '';

    if(isConnectorMixer) {
      nodeX = 460;  
      nodeY = 260;
      classCss = `primarySupply-mixer-${hashMapOrderLoop[item.key]}`
    }
    if(isConnectorSplitter) {
      nodeX = 460;  
      nodeY = 20;
      classCss = `primarySupply-splitter-${hashMapOrderLoop[item.key]}`
    }
 
    if(isByPassSupply) {
      nodeX = 345;
      nodeY = 140;
      classCss = `primarySupply-isByPassSupply-${hashMapOrderLoop[item.key]}`
    }
    if(isPump) {
      nodeX = 300;
      nodeY = -8;
    }
    if(isTextSupply) {
      nodeX = 330;
      nodeY = 135;
      classCss = 'transparent nodeOnlyText';
    }
    if(isPipeOutlet) {
      nodeX = 275;
      nodeY = 260;
      classCss = `lineDarkBlue primarySupply-isPipeOutlet-${hashMapOrderLoop[item.key]}`
    } 
  
    if(isLittleChiller) {
      nodeX = 515;
      nodeY = 120;
      return {
        ...item,
        parentNode: hashMapOrderLoop[item.key],
        data: { text: item.label },
        type: "special",
        hasBorder: true,
        isNotDynamicNode: true,
        lastText: '',
        size: {
          maxWidth: 65
        },
        position: {
          x: nodeX,
          y: nodeY
        },
        line: 4,
        lineCss: 'lineCss isLittleChiller'
      }
    }
    if(isBigChiller) {
      nodeX = 595;
      nodeY = 120;
      return {
        ...item,
        parentNode: hashMapOrderLoop[item.key],
        data: { text: item.label },
        type: "special",
        hasBorder: true,
        isNotDynamicNode: true,
        lastText: '',
        size: {
          maxWidth: 57
        },
        position: {
          x: nodeX,
          y: nodeY
        },
        line: 4,
        lineCss: 'lineCss isBigChiller'
      }
    }
    if(isDistrictCooling) {
      nodeX = 435;
      nodeY = 120;
      return {
        ...item,
        parentNode: hashMapOrderLoop[item.key],
        data: { text: item.label },
        type: "special",
        hasBorder: true,
        isNotDynamicNode: true,
        lastText: '',
        size: {
          maxWidth: 65
        },
        position: {
          x: nodeX,
          y: nodeY
        },
        line: 2,
        lineCss: 'lineCss isPurchasedCooling'
      }
    }
    return {
      ...item,
      parentNode: hashMapOrderLoop[item.key],
      type: "special",
      classCss,
      position: {
        x: nodeX,
        y: nodeY
      }
    }
  })

  return {
    nodePrimaryDemand,
    nodePrimarySupply
  }
}


function renderNodeCondenser(data, hashMapOrderLoop) {
  const nodeTextDemand = [{
    id: Math.random(0,100).toString(),
    key: "Condenser Loop",
    type: "special",
    data: { text: 'Demand' },
    isNotDynamicNode: true,
    class: 'nodeOnlyText',
    position: {
      x: 0,
      y: 0
    }
  }]

  const nodeTextMain = [{
    id: Math.random(0,100).toString(),
    key: "Condenser Loop",
    type: "special",
    data: { text: 'Condenser Loop' },
    isNotDynamicNode: true,
    class: 'nodeOnlyTextMain',
    position: {
      x: 0,
      y: 0
    }
  }]
  let nodeCondenserLoopDemand = nodeLoopFilterBy(data, 'Condenser Loop:demand')
                                    .filter(item => item.label !== 'Little Chiller' && item.label !== 'Big Chiller')
                                    .concat(nodeTextDemand, nodeTextMain);

  nodeCondenserLoopDemand = nodeCondenserLoopDemand.map((item) => {
    const isConnectorMixer = item.class === 'Connector:Mixer';
    const isConnectorSplitter = item.class === 'Connector:Splitter';
    const isByPassDemand = regexByPass.test(item.label) && item.loop.includes('Condenser Loop:demand');
    const isPipeInlet = regexInlet.test(item.label) && regexOnlyPipe.test(item.class);
    const isPipeOutlet = regexOutlet.test(item.label) && regexOnlyPipe.test(item.class);
    const isTextDemand = item.data.text === 'Demand';
    const isTextMain = item.data.text === 'Condenser Loop';

    let nodeX = 60;
    let nodeY = 0;
    let classCss = '';
    if(isConnectorMixer) {
      nodeY = 0;
      classCss = `condenserDemand-mixer-${hashMapOrderLoop[item.key]}`
    }
    if(isConnectorSplitter) {
      nodeY = 280;
      classCss = `condenserDemand-splitter-${hashMapOrderLoop[item.key]}`
    }
    if(isByPassDemand) {
      nodeX = 107;
      nodeY = 130;
      classCss = `condenserDemand-bypass-${hashMapOrderLoop[item.key]}`
    }
    if(isPipeInlet) {
      nodeX = 250;
      nodeY = 280;
      classCss = `lineDarkBlue condenserDemand-isPipeInlet-${hashMapOrderLoop[item.key]}`
    }
    if(isPipeOutlet) {
      nodeX = 250;
      nodeY = 0;
      classCss = `lineDarkBlue condenserDemand-isPipeOutlet-${hashMapOrderLoop[item.key]}`
    } 
    if(isTextDemand) {
      nodeX = 110;
      nodeY = 135;
      classCss = 'transparent nodeOnlyText';
    }
    if(isTextMain) {
      nodeX = 310;
      nodeY = 130;
      classCss = 'transparent nodeOnlyTextMain';
    }
    return {
      ...item,
      parentNode: hashMapOrderLoop[item.key],
      type: "special",
      classCss,
      position: {
        x: nodeX,
        y: nodeY
      }
    }
  })

  // supply
  const nodeTextSupply = [{
    id: Math.random(0,100).toString(),
    key: "Condenser Loop",
    type: "special",
    data: { text: 'Supply' },
    isNotDynamicNode: true,
    class: 'nodeOnlyText',
    position: {
      x: 0,
      y: 0
    }
  }]
  let nodeCondenserLoopSupply = nodeLoopFilterBy(data, 'Condenser Loop:supply')
                                  .filter(item => item.label !== 'Little Chiller' && item.label !== 'Big Chiller')
                                  .concat(nodeTextSupply);
  nodeCondenserLoopSupply = nodeCondenserLoopSupply.map((item) => {
    const isConnectorMixer = item.class === 'Connector:Mixer';
    const isConnectorSplitter = item.class === 'Connector:Splitter';
    const isCoolingTower = item.class === 'CoolingTower:SingleSpeed';
    const isPump = regexOnlyPump.test(item.class)
    const isTextSupply = item.data.text === 'Supply';
    const isByPassSupply = regexByPass.test(item.label) && item.loop.includes('Condenser Loop:supply');
    const isPipeOutlet = regexOutlet.test(item.label) && regexOnlyPipe.test(item.class);

    let nodeX = 425;
    let nodeY = 0;
    let classCss = '';

    if(isConnectorMixer) {
      nodeX = 495;
      nodeY = 280;
      classCss = `condenserSupply-mixer-${hashMapOrderLoop[item.key]}`
    }
    if(isConnectorSplitter) {
      nodeX = 495;
      nodeY = 0;
      classCss = `condenserSupply-splitter-${hashMapOrderLoop[item.key]}`
    }
    if(isByPassSupply) {
      nodeX = 541;
      nodeY = 130;
      classCss = `condenserSupply-bypass-${hashMapOrderLoop[item.key]}`
    }
    if(isPump) {
      nodeX = 375;
      nodeY = -28;
    }
    if(isTextSupply) {
      nodeX = 510;
      nodeY = 140;
      classCss = 'transparent nodeOnlyText';
    }
    if(isPipeOutlet) {
      nodeX = 350;
      nodeY = 280;
      classCss = `lineDarkBlue`
    } 
    if(isCoolingTower) {
      nodeX = 620;
      nodeY = 120;
      return {
        ...item,
        parentNode: hashMapOrderLoop[item.key],
        data: { text: 'Cooling Tower' },
        type: "special",
        hasBorder: true,
        isNotDynamicNode: true,
        lastText: '',
        size: {
          maxWidth: 65
        },
        position: {
          x: nodeX,
          y: nodeY
        },
        line: 2,
        lineCss: 'lineCss isCoolingTower'
      }
    }
    return {
      ...item,
      parentNode: hashMapOrderLoop[item.key],
      type: "special",
      classCss,
      position: {
        x: nodeX,
        y: nodeY
      }
    }
  })

  return {
    nodeCondenserLoopDemand,
    nodeCondenserLoopSupply
  }
}

export const coolingSystemDiagram = (data, nodesLoop, hashMapOrderLoop) => {
  const { nodeSecondaryDemand, nodeSecondarySupply }  = renderNodeSecondaryChilled(data, hashMapOrderLoop);
  const { nodePrimaryDemand, nodePrimarySupply }  = renderNodePrimaryChilled(data, hashMapOrderLoop);
  const { nodeCondenserLoopDemand, nodeCondenserLoopSupply }  = renderNodeCondenser(data, hashMapOrderLoop);  

  const nodesParent = Object.keys(nodesLoop).reduce((nodeMap, nodeKey, index) => {
    // push parent node item
    const order = index + 1;
    let x = 450;

    if(order === 3) {
      x = 475
    }

    const nodeObj = {
      id: hashMapOrderLoop[nodeKey],
      // data: { label: `Loop ${order}`},
      data: { label: ''},
      isNotDynamicNode: true,
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

    // generate node item
    // Object.keys(nodesLoop[nodeKey]).forEach((childKey, nodeIndex) => {
    //   const childNodes = nodesLoop[nodeKey][childKey];
    //   childNodes.forEach((childValue, childIndex) => {
    //     const currSplit = childValue.split(':');
    //     const textFirst = currSplit[0];
    //     const childObj = {
    //       id: `${textFirst}-${`${childIndex}-${childKey}`.toString()}`,
    //       data: { label: childValue},
    //       isNotDynamicNode: true,
    //       parentNode: hashMapOrderLoop[textFirst],
    //       lastText: currSplit[currSplit.length - 1],
    //       position: {
    //         x: (100 * nodeIndex * Object.keys(nodesLoop[nodeKey]).length) || 20,
    //         y: 40
    //       },
    //     }
    //     nodeMap.nodes.push(childObj);
    //   })
    // })

    return nodeMap;
  }, {
    nodes: [],
  });

  const coolingSystem = nodesParent.nodes.concat(nodeSecondaryDemand, nodeSecondarySupply, nodePrimaryDemand, nodePrimarySupply, nodeCondenserLoopDemand, nodeCondenserLoopSupply);

  return coolingSystem;
}