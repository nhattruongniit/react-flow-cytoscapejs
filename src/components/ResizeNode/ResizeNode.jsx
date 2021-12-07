/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import ReactFlow from 'react-flow-renderer';

const ResizeNode = () => {
  const refConfig = useRef({
    startX: 0,
    startY: 0,
    startWidth: 0,
    startHeight: 0,
   
  });
  const refContainer = useRef(null);
  const refElement = useRef(null);

  function initDrag(e) {
    refConfig.current.startX = e.clientX;
    refConfig.current.startY = e.clientY;
    refConfig.current.startWidth = parseInt(document.defaultView.getComputedStyle(refContainer.current).width, 10);
    refConfig.current.startHeight =  parseInt(document.defaultView.getComputedStyle(refContainer.current).height, 10);
    document.addEventListener('mousemove', doDrag);
    document.addEventListener('mouseup', stopDrag);
  }

  function doDrag(e) {
    const { startWidth, startX, startHeight, startY } = refConfig.current;
    refContainer.current.style.width = (startWidth + e.clientX - startX) + 'px';
    refContainer.current.style.height = (startHeight + e.clientY - startY) + 'px';
  }

  function stopDrag() {
    document.removeEventListener('mousemove', doDrag, false);    
    document.removeEventListener('mouseup', stopDrag, false);
  }

  useEffect(() => {
    setTimeout(() => {
      if(refContainer.current) {
        refContainer.current.addEventListener('mousedown', initDrag, false)
      }
    }, 100)

    return () => {
      document.removeEventListener('mousemove', doDrag, false);    
      document.removeEventListener('mouseup', stopDrag, false);
      refElement.current.removeEventListener('mousedown', initDrag, false);
      refContainer.current.removeEventListener('mousedown', initDrag, false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const elements = [
    {
      id: '2',
      // type: 'dragHandleNode',
      dragHandle: '.custom-drag-handle',
      style: { border: '1px solid #ddd' },
      data: { label: (
        <div ref={refContainer} className="resizeContainer">
          Resize node
          <div ref={refElement} className="nodeResizer" />
        </div>
      )},
      position: { x: 200, y: 200 },
    },
  ];

  return(
    <ReactFlow className="reactResizeNodes" elements={elements} />
  );
}

export default ResizeNode;