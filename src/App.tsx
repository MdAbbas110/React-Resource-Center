import React, { useState } from 'react'
import './App.css'
import Block from './components/block'

function App() {
 const [ state, setState] = useState(Array(9).fill(null))

console.log("state", state);
  return <div className='board'>
    <div className='row'>
      <Block value="X"/>
      <Block value="0" />
      <Block value="X" />
    </div>
    <div className='row'>
      <Block value="X" />
      <Block value="0" />
      <Block value="X" />
    </div>
    <div className='row'>
      <Block />
      <Block />
      <Block value="Abi" />
    </div>
  </div>
}

export default App
