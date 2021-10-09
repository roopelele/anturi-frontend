import React from 'react'

import Footer from './footer'
import Menu from './menu'

const Base = ({component}) => {
  const m = window.innerWidth < window.innerHeight
  return (
    <>
      <div className='Main'>
        <Menu mobile={m} />
        {component}
      </div>
      <div className='Footer'>
        <Footer />
      </div>
    </>
  )
}

export default Base
