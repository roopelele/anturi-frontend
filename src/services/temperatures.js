import axios from 'axios'
import config from '../utils/config'

const getCurrent = () => {
  const req = axios.get(config.urls.currentUrl)
  return req.then(response => response.data)
}

const getToday = (id, day) => {
  if (typeof(id) === 'undefined') {
    return { data: { temps: [], times: [], name: id } }
  }
  var dd = String(day.getDate()).padStart(2, '0')
  var mm = String(day.getMonth() + 1).padStart(2, '0') //January is 0!
  var yyyy = day.getFullYear()

  var today = yyyy + '-' + mm + '-' + dd
  const req = axios.get(config.urls.historyUrl + today + '_' + id + '.json')
  return req
    .then(response => {
      response.data.name = id
      return response
    })
    .catch(() => {
      return { data: { temps: [], times: [], name: id } }
    })
}

const getConfig = () => {
  const req = axios.get(config.urls.configUrl)
  return req.then(response => response.data)
}

export default { getCurrent, getToday, getConfig }
