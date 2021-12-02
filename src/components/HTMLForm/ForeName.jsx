import React from 'react'

function ForeName({ value, setForeName }) {
  return (
    <>
      <h6>FORENAME</h6>
      <input type="text" value={value} onChange={event => setForeName(event.target.value)} />
      {/* <iframe src="https://reactjs.org/" width="300px" height="300px" title="123" /> */}
    </>
  )
}

export default ForeName
