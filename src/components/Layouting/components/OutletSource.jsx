import React from 'react';
import  {
  Position,
  Handle,
} from 'react-flow-renderer';
import clsx from 'clsx';

const regexFrom = new RegExp(/(from_)\w+/);

function OutletSource({ nodeItem, isHorizontal, leftStyle }) {
  const filterNodeNoFrom = nodeItem?.nodes?.outlet.filter(item => !regexFrom.test(item));

  return (
    <>
      {filterNodeNoFrom.map((node, idx) => (
        <div key={idx}>
          <span
            className={clsx(
              isHorizontal === 'LR' ? "outPortHorizontal" : "outPort"
            )}
            style={{ top: idx === 0 ? leftStyle : `${idx * (leftStyle / filterNodeNoFrom.length)}px` }}
          >
            out
          </span>
          <Handle
            key={node}
            type="source"
            position={Position.Right} 
            id={node}
            // style={{ bottom: 0, left: idx === 0 ? leftStyle : `${idx * (leftStyle / filterNodeNoFrom.length)}px`, borderRadius: 0 }}
            style={{ right: 0, top: idx === 0 ? leftStyle : `${idx * (leftStyle / filterNodeNoFrom.length)}px`, borderRadius: 0 }}
          />
        </div>
        
      ))}
    </>
  )
}

export default OutletSource