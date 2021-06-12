import React, { useState } from 'react'
import config from '../utils/config'
import '../index.css'

const Menu = (props) => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    setVisible(!visible)
  }

  if (props.mobile) {
    if (visible) {
      return (
        <div className='Menu'>
          <input type='button' value='menu' className={props.mobile ? 'MenuButton_m' : 'MenuButton'} onClick={toggleVisible}/>
          {config.menuItems.map(x => <input key={x.url} type='button' value={x.text} className={props.mobile ? 'EntryButton_m' : 'EntryButton'} onClick={() => window.location.href = x.url}/> ) }
        </div>
      )
    }
    else {
      return (
        <div className='Menu'>
          <input type='button' value='menu' className={props.mobile ? 'MenuButton_m' : 'MenuButton'} onClick={toggleVisible}/>
        </div>
      )
    }
  }
  else {
    return (
      <div className='Menu'>
        {config.menuItems.map(x => <input key={x.url} type='button' value={x.text} className={props.mobile ? 'EntryButton_m' : 'EntryButton'} onClick={() => window.location.href = x.url}/> ) }
      </div>
    )
  }
}

export default Menu
