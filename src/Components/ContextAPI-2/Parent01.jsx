import React, { useState } from 'react'
import Child01 from './Child01'
import contextChild from './Context02'

const Parent01 = () => {
  const [data, setData] = useState('')
  return (
    <div style={{margin:"50px"}}>
      <h2>Parent Component</h2>
      <h3>Passing Data From Child to Parent</h3>
      <p style={{color:"blue"}}>Data Coming from Child : {data}</p>
      <hr />
      <contextChild.Provider value={{setData}}>

        <Child01 />
      </contextChild.Provider>
    </div>
  )
}

export default Parent01