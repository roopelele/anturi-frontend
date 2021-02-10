import React from 'react'
import gitlab from '../images/github.png'
import hackerman from '../images/hackerman.gif'
import config from '../utils/config.js'

const Footer = () => {
  return (
    <div>
      <img src={hackerman}/>
      {' '}
      <a href={config.urls.gitHubUrl}>
        <img src={gitlab} alt="github logo"/>
      </a>
    </div>
  )
}

export default Footer
