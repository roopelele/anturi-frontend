import React from 'react'
import config from '../utils/config.js'

const NotFoundPage = () => {
  return (
    <>
      <div style={config.styles.center}>
        <h1>
          404
        </h1>
      </div>
      <p>
        Uh Oh! Page not found. <a href={config.urls.mainUrl}>Main page</a>
      </p>
    </>
  )
}

export default NotFoundPage