import React from 'react';
import  {
  Position,
  Handle,
} from 'react-flow-renderer';
import clsx from 'clsx';

const regexTo = new RegExp(/(to_)\w+/);

function InletTarget({ nodeItem, isHorizontal, leftStyle }) {
  const filterNodeNoTo = nodeItem?.nodes?.inlet.filter(item => !regexTo.test(item));

  return (
    <>
      {filterNodeNoTo.map((node, idx) => (
        <div key={idx}>
          {/* <span
            className={clsx(
              isHorizontal === 'LR' ? "inPortHorizontal" : "inPort"
            )}
            style={{ top: idx === 0 ? leftStyle : `${idx * (leftStyle / filterNodeNoTo.length)}px` }}
          >
            in
          </span> */}
          <Handle 
            key={node}
            id={node}
            type="target" 
            position={Position.Left} 
            // style={{ top: 0, left: idx === 0 ? leftStyle : `${idx * (leftStyle / filterNodeNoTo.length)}px`, borderRadius: 0 }}
            style={{ left: 0, top: idx === 0 ? leftStyle : `${idx * (leftStyle / filterNodeNoTo.length)}px`, borderRadius: 0 }}
          />
        </div>
      ))}
    </>
  )
}

export default InletTarget