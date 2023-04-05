import React from 'react'
import Child1 from './Child1'
import { useState } from 'react'
import contextParent from './Context01'


const Parent = () => {
  const [inputvalue, setInputvalue] = useState("")
  const [data, setData] = useState("")

  return (
    <div style={{margin:"50px"}}>
      <h2>Parent Component</h2>
      <h3>Passing Data from Parent to Child</h3>
      <input type="text" placeholder='Enter Data' onChange={(e)=>{setInputvalue(e.target.value)}}/> &nbsp;
      <button onClick={()=>{setData(inputvalue)}}>Send Data</button>
      <hr />
      <contextParent.Provider value={data}>
        <Child1 />
      </contextParent.Provider>
    </div>
  )
}

export default Parent