import './App.css'
import React from 'react'
import Graph from './components/chart.js'

const App = () => {
  return (
    <>
      <div>
        <h1>Roopen asunnon lämpötilat</h1>
      </div>
      <div>
        <p>Kys</p>
      </div>
      {<Graph/>}
    </>
  )
}


export default App

