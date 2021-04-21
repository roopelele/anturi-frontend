import axios from 'axios'
import config from '../utils/config'

const getCurrent = () => {
  const req = axios.get(config.urls.currentUrl)
  return req.then(response => response.data)
}

const getToday = (id) => {
  if (typeof(id) === 'undefined') {
    return { data: { data: { temps: [] } } }
  }
  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var yyyy = today.getFullYear()

  today = yyyy + '-' + mm + '-' + dd
  const req = axios.get(config.urls.historyUrl + today + '_' + id + '.json')
  return req.then(response => {
    response.data.name = id
    return response
  })
}

const getConfig = () => {
  const req = axios.get(config.urls.configUrl)
  return req.then(response => response.data)
}

/*
const getHistory = ({ start, end }) => {
  const historyObject = {
    start: start,
    end: end,
  }

  const req = axios.post(config.urls.getDataUrl, historyObject)
  return req.then(response => response.data)
}
*/
export default { getCurrent, getToday, getConfig }
