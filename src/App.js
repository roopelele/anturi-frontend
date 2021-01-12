import './App.css'
import React, { useState, useEffect } from 'react'
import Graph from './components/chart.js'
import TimeButtons from './components/buttons.js'
import CurrentTemperatureDisplay from './components/current.js'
import temperatureService from './services/temperatures.js'
import config from './utils/config'

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear()

  if (month.length < 2)
    month = '0' + month
  if (day.length < 2)
    day = '0' + day

  return [year, month, day].join('-')
}

const App = () => {
  const [currentTemp, setCurrentTemp] = useState(-999)
  const [todayTemp, setTodayTemp] = useState(null)

  // Get current temperature
  useEffect(() => {
    temperatureService.getCurrent().then(data => {
      if(data.data.values.length > 0 || !data.data.success) {
        const temp = data.data.values[0].value
        setCurrentTemp(temp)
      }
      else {
        console.log(config.messages.noData)
      }
    })
  }, [])

  // Get todays temperatures
  useEffect(() => {
    temperatureService.getToday().then(data => {
      if(data.data.length > 0) {
        const temp = data.data[0]
        setTodayTemp(temp)
      }
      else {
        console.log(config.messages.noData)
      }
    })
  }, [])

  const timeButtonEventHandler = (e) => {
    e.preventDefault()
    console.log('Button pressed')
    const time = e.target.value

    console.log(time)
    const date = new Date()
    const start = formatDate(date)
    const end = formatDate(date.setDate(date.getDate - time))

    temperatureService.getHistory(start, end).then(data => {
      if(data.data.length > 0) {
        const temp = data.data[0]
        setTodayTemp(temp)
      }
      else {
        console.log(config.messages.noData)
      }
    })
  }

  return (
    <>
      <div style={config.styles.center}>
        <CurrentTemperatureDisplay temp={currentTemp}/>
      </div>
      <div style={config.styles.center}>
        {<Graph todayTemp={todayTemp}/>}
        {<TimeButtons timeButtonEventHandler={timeButtonEventHandler}/>}
      </div>
    </>
  )
}


export default App

