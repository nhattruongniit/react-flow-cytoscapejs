import React from 'react'

function LastName({ value, setLastName }) {
  return (
    <>
      <h6>LASTNAME</h6>
      <input type="text" value={value} onChange={event => setLastName(event.target.value)} />
    </>
  )
}

export default LastName
