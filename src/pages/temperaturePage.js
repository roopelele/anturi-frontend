import React, { useState, useEffect } from 'react'
import Graph from '../components/chart.js'
import CurrentTemperatureDisplay from '../components/current.js'
import temperatureService from '../services/temperatures.js'
import config from '../utils/config'


const TemperaturePage = () => {
  const [currentData, setCurrentData] = useState([{ name: '', temp: -999 }])
  const [names, setNames] = useState(null)
  const [graphValue, setGraphValue] = useState(null)

  // Get current temperature
  useEffect(() => {
    temperatureService.getCurrent().then(data => {
      if(data.data.values.length > 0 && data.data.success === true) {
        setCurrentData(data.data.values)
        setNames(data.config)
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
        setGraphValue(data.data)
      }
      else {
        console.log(config.messages.noData)
      }
    })
  }, [])

  return (
    <>
      <div style={config.styles.center}>
        <h1>
          Temperatures:
        </h1>
      </div>
      <div style={config.styles.center}>
        <CurrentTemperatureDisplay data={currentData} names={names}/>
      </div>
      <div style={config.styles.center}>
        {<Graph values={graphValue} names={names}/>}
      </div>
    </>
  )
}

export default TemperaturePage
