import React from 'react'
import gitlab from '../images/gitlab.png'
import hackerman from '../images/hackerman.gif'
import config from '../utils/config.js'

const Footer = () => {
  return (
    <div>
      <img src={hackerman}/>
      {' '}
      <a href={config.urls.gitLabUrl}>
        <img src={gitlab} alt="gitlab logo"/>
      </a>
    </div>
  )
}

export default Footer
