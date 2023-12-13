import React from 'react'
import './styles.css'
import Lines from '../../components/Lines'
import Header from '../../components/Header'

function App() {
  return (
    <>
      <div className="canvas canvas-cyberlines">
        <Lines/>
      </div>
      <div className="container">
        <Header/>
      </div>
    </>
  )
}

export default App
