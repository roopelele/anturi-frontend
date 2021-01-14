import axios from 'axios'
import config from '../utils/config'

const getCurrent = () => {
  const req = axios.get(config.urls.currentUrl)
  return req.then(response => response.data)
}

const getToday = () => {
  const req = axios.get(config.urls.historyUrl)
  return req.then(response => response.data)
}

const getHistory = ({ start, end }) => {
  const historyObject = {
    start: start,
    end: end,
  }

  const req = axios.post(config.urls.getDataUrl, historyObject)
  return req.then(response => response.data)
}

export default { getCurrent, getToday, getHistory }
