import React, { useEffect } from 'react'
import config from '../utils/config'

const NotFound = () => {
  useEffect(() => {
    window.location.href = config.urls.url404
  }, [])
  return <></>
}

export default NotFound
