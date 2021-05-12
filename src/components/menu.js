import React, { useState } from 'react'
import config from '../utils/config'
import '../index.css'

const Menu = () => {
  const [visible, setVisible] = useState(false)

  const menuItems = [
    {
      text: 'front page',
      url: config.urls.mainUrl
    },
    {
      text: 'temperatures',
      url: config.urls.temperatureUrl
    }
  ]

  const toggleVisible = () => {
    console.log(!visible)
    setVisible(!visible)
  }

  const List = () => {
    if (visible) {
      return (
        <div className='Menu'>
          <input type='button' value='menu' className='MenuButton' onClick={toggleVisible}/>
          {menuItems.map(x => <input key={x.url} type='button' value={x.text} className='EntryButton' onClick={() => window.location.href = x.url}/> ) }
        </div>
      )
    }
    else {
      return (
        <div className='Empty'>
          <input type='button' value='menu' className='MenuButton' onClick={toggleVisible}/>
        </div>
      )
    }
  }

  return (
    <>
      <List/>
    </>
  )
}

export default Menu
