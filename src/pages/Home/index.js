import React from 'react'
import './styles.css'
import Lines from '../../components/Lines'
import Header from '../../components/Header'
import MainCard from '../../components/MainCard'
import Resume from '../../components/Resume'
import DownloadCV from '../../components/DownloadCV'

function App() {
  return (
    <>
      <div className="canvas canvas-cyberlines">
        <Lines/>
      </div>
      <div className="container home">
        <Header/>
        <MainCard/>
        <Resume/>
        <DownloadCV/>
      </div>
    </>
  )
}

export default App
