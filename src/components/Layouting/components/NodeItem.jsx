import React from 'react';
import clsx from 'clsx';

// assets
import { ReactComponent as PumpIcon } from 'assets/images/pump-svg.svg';
import { ReactComponent as MixerIcon } from 'assets/images/supply-mixer.svg';
import { ReactComponent as SplitterIcon } from 'assets/images/supply-splitter.svg';

function NodeItem({ data, id, isPump, isMixerNode, isSplitter, isPipe }) {

  if(isPump) return <PumpIcon />

  if(isMixerNode) {
    return (
      <>
        <MixerIcon />
        <span className="absolute text-color-black">{id}</span>
      </>
    )
  }

  if(isSplitter) {
    return (
      <>
        <SplitterIcon />
        <span className="absolute text-color-black">{id}</span>
      </>
    )
  }

  if(isPipe) {
    return (
      <>
        <span className="absolute text-color-black">{id}</span>
        <div 
          className={clsx(
            "pipe",
            // isPipe && 'rotate90deg'
          )}
        />
      </>
    )
  }

  return <>{data.text} - {id}</>;
}

export default NodeItem