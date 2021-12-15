import React from 'react'

// assets
import { ReactComponent as IconFilter } from 'assets/images/icon-filter.svg'; 

function ForeName({ value, setForeName }) {
  return (
    <>
      <div className='nodeTransformer_label'>
        <IconFilter />
        Forename
      </div>
      <div className="nodeTransformer_content">
        <iframe src="https://reactjs.org/" width="300px" height="300px" title="123" />
      </div>
    </>
  )
}

export default ForeName
