
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color ,setColor] = useState("black")
  
  return (
    <>
      <div style={{background: `${color}`}}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
     
        &nbsp;
        &nbsp;
      <button className='btn1' onClick={()=>{setColor("green")}}>
         LIghtGreen
        </button>
        &nbsp;
        &nbsp;
        <button className='btn2' onClick={()=>{setColor("red")}}>
         Black
        </button> 
        &nbsp;
        &nbsp;
        <button className='btn3' onClick={()=>{setColor("#3840b9")}}>
          blue
        </button>
        &nbsp;
        &nbsp;

        <button className='btn4' onClick={()=>{setColor("#062c06")}}>
          darkGreen
        </button> 
        &nbsp;
        &nbsp;
        <button className='btn5' onClick={()=>{setColor("yellow")}}>
          yellow
        </button>
        &nbsp;
        &nbsp;

        <button className='btn6' onClick={()=>{setColor("#531f8f")}}>
      PInk
        </button> 
        &nbsp;
        &nbsp;
        <button className='btn7' onClick={()=>{setColor("#962cc7")}}>
         Purpal
        </button >
        &nbsp;
       
       
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App


// Create a logic for counter   if value is grather than 20 and if value 