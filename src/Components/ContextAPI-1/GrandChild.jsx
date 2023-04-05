import React from 'react'
import { useContext } from 'react'
import contextParent from './Context01'

const GrandChild = () => {
   const data = useContext(contextParent)
  return (
    <div>
      <h2>Grand Child Component</h2>
      <p style={{color:"orange"}}>Parent Input Data : {data}</p>
    </div>
  )
}

export default GrandChild