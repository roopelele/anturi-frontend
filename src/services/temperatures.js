import axios from 'axios'
const currentUrl = 'http://192.168.100.12:5000/current'
const historyUrl = 'http://192.168.100.12:5000/history'
const getDataUrl = 'http://192.168.100.12:5000/get_data'


const getCurrent = () => {
  const req = axios.get(currentUrl)
  return req.then(response => response.data)
}

const getToday = () => {
  const req = axios.get(historyUrl)
  return req.then(response => response.data)
}

const getHistory = ({ start, end }) => {
  const historyObject = {
    start: start,
    end: end,
  }

  const req = axios.post(getDataUrl, historyObject)
  console.log(req)
  return req.then(response => response.data)
}

export default { getCurrent, getToday, getHistory }
