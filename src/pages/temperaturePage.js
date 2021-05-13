import React, { useState, useEffect } from 'react'

import '../index.css'
import Graph from '../components/chart.js'
import Button from '../components/buttons'
import CurrentTemperatureDisplay from '../components/current.js'
import temperatureService from '../services/temperatures.js'
import config from '../utils/config'


const TemperaturePage = () => {
  const [currentData, setCurrentData] = useState([{ name: '', temp: -999 }])
  const [names, setNames] = useState(null)
  const [graphValue, setGraphValue] = useState([])
  const [day, setDay] = useState(new Date())

  const updateGraph = (props) => {
    temperatureService.getConfig().then(data => {
      setNames(data)
      var ids = data.map(x => x.id)
      Promise.all(ids.map(x => temperatureService.getToday(x, props.date))).then(data => {
        setGraphValue(data.map(d => d.data))
      })
    })
  }

  // Get current temperature
  useEffect(() => {
    temperatureService.getCurrent().then(data => {
      if(data.values.length > 0 && data.success === true) {
        setCurrentData(data.values)
      }
      else {
        console.log(config.messages.noData)
      }
    })
  }, [])

  useEffect(() => {
    temperatureService.getConfig().then(data => {
      setNames(data)
      var ids = data.map(x => x.id)
      Promise.all(ids.map(x => temperatureService.getToday(x, day))).then(data => {
        setGraphValue(data.map(d => d.data))
      })
    })
  }, [])

  return (
    <>
      <div className='TempDisplay'>
        <h1>Current temperatures:</h1>
        <CurrentTemperatureDisplay data={currentData} names={names}/>
        <Graph className='TempDisplay' values={graphValue} names={names}/>
      </div>
      <Button text='previous' handleClick = {() => {
        const newDay = day
        newDay.setDate(newDay.getDate() - 1)
        setDay(newDay)
        updateGraph({ date: day })
      }}/>
      {' '}
      <Button text='next' handleClick = {() => {
        const newDay = day
        newDay.setDate(newDay.getDate() + 1)
        setDay(newDay)
        updateGraph({ date: day })
      }}/>
    </>
  )
}

export default TemperaturePage
