import './index.css'
import React from 'react'
import Main from './main'
import Footer from './components/footer'
import Menu from './components/menu'

const App = () => {
  const m = window.innerWidth < window.innerHeight
  return (
    <>
      <Menu mobile={m}/>
      <div className='Main'>
        <Main className='Main'/>
      </div>
      <div className='Footer' >
        <Footer />
      </div>
    </>
  )
}


export default App