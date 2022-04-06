import React from 'react';
import clsx from 'clsx';

// assets
import { ReactComponent as PumpIcon } from 'assets/images/pump-svg.svg';
// import { ReactComponent as MixerIcon } from 'assets/images/supply-mixer.svg';
// import { ReactComponent as SplitterIcon } from 'assets/images/supply-splitter.svg';
import { ReactComponent as MusterIcon } from 'assets/images/muster-bottom.svg';

function NodeItem({ data, nodeItem, isPump, isMixerNode, isSplitter, isPipe, isMuster, isConnectable }) {


  if(isPump) {
    return (
      <div className='node-pump' style={{ transform: 'scaleX(-1)'}}>
        <div className='node-pump-left' />
        <PumpIcon />
        <div className='node-pump-right' />
      </div>
    )
  }

  if(isMuster) {
    return (
      <>
        <MusterIcon />
      </>
    )
  }

  if(isMixerNode) {
    return (
      <>
        {/* <MixerIcon /> */}
        {nodeItem?.nodes.inlet.map((item, idx) => (
          <div 
            key={item} 
            className={`inletNode inletNode_position_${idx}`}
            style={{ left: idx * 40 }}
          />
        ))}
        <div className='outletNode' />
        {/* <span className="absolute text-color-black">{id}</span> */}
      </>
    )
  }

  if(isSplitter) {
    return (
      <>
        {/* <SplitterIcon /> */}
        {nodeItem?.nodes.outlet.map((item, idx) => (
          <div 
            key={item} 
            className={`outletNode outletNode_position_${idx}`}
            style={{ left: idx * 40 }}
          />
        ))}
        <div className='inletNode' />
        {/* <span className="absolute text-color-black">{id}</span> */}
      </>
    )
  }

  if(isPipe) {
    return (
      <>
        {/* <span className="absolute text-color-black">{id}</span> */}
        <div 
          className={clsx(
            "pipe",
            // isPipe && 'rotate90deg'
          )}
        />
      </>
    )
  }

  return (
    <>

      {data.text}
      {nodeItem?.line && Array.from(Array(nodeItem.line).keys()).map(item => (
        <div key={item} className={`line-${item}`} />
      ))}
    </>
  )
}

export default NodeItem