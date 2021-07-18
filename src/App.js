import './index.css'
import React from 'react'
import Main from './main'
import Footer from './components/footer'
import Menu from './components/menu'

window.language = navigator.language || navigator.userLanguage

const App = () => {
  const m = window.innerWidth < window.innerHeight
  return (
    <>
      <div className='Main'>
        <Menu mobile={m}/>
        <Main className='Main'/>
      </div>
      <div className='Footer' >
        <Footer />
      </div>
    </>
  )
}


export default App