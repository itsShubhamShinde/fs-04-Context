import React, { useContext, useState } from 'react'
import contextChild from './Context02'


const Grandchild = () => {
   const {setData} = useContext(contextChild)
   const [input, setInput] = useState("")
  return (
    <div>
        <h2>Grand Child Component</h2>
        <input type="text" placeholder='Enter Data' onChange={(e)=>{setInput(e.target.value)}}/> &nbsp;
        <button onClick={()=>{setData(input)}}>Send Data</button>
    </div>
  )
}

export default Grandchild