import React, { useState, useEffect } from 'react'
import Graph from '../components/chart.js'
import CurrentTemperatureDisplay from '../components/current.js'
import temperatureService from '../services/temperatures.js'
import config from '../utils/config'


const TemperaturePage = () => {
  const [currentData, setCurrentData] = useState([{ name: '', temp: -999 }])
  const [names, setNames] = useState(null)
  const [graphValue, setGraphValue] = useState([])

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
      Promise.all(ids.map(x => temperatureService.getToday(x))).then(data => {
        setGraphValue(data.map(d => d.data))
      })
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
