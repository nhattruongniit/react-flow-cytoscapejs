import React from 'react'

function ForeName({ value, setForeName }) {
  return (
    <>
      <h6>FORENAME</h6>
      <input type="text" value={value} onChange={event => setForeName(event.target.value)} />
    </>
  )
}

export default ForeName
