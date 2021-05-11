import './index.css'
import React from 'react'
import Main from './main'
import Footer from './components/footer'


const App = () => {
  return (
    <>
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
