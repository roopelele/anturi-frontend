import './index.css'
import React from 'react'
import Main from './main'
import Footer from './components/footer'
import Menu from './components/menu'

const App = () => {
  return (
    <>
      <Menu/>
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
