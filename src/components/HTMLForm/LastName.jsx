import React from 'react'

// assets
import { ReactComponent as IconFilter } from 'assets/images/icon-filter.svg'; 

function LastName({ value, setLastName }) {
  return (
    <>
      <div className='nodeTransformer_label'>
        <IconFilter />
        Lastname
      </div>
      <div className="nodeTransformer_content">
        <input className='nodeTransformer_input' type="text" value={value} onChange={event => setLastName(event.target.value)} />
      </div>
    </>
  )
}

export default LastName
