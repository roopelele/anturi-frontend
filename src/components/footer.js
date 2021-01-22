import React from 'react'
import gitlab from '../images/gitlab.png'
import config from '../utils/config.js'

const Footer = () => {
  return (
    <div>
      <a href={config.urls.gitLabUrl}>
        <img src={gitlab} alt="gitlab logo"/>
      </a>
    </div>
  )
}

export default Footer
