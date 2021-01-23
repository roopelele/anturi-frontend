import React, { useState, useEffect } from 'react'
import Graph from '../components/chart.js'
import GraphButtons from '../components/buttons.js'
import CurrentTemperatureDisplay from '../components/current.js'
import temperatureService from '../services/temperatures.js'
import config from '../utils/config'


const TemperaturePage = () => {
  const [currentData, setCurrentData] = useState([{ name: '', temp: -999 }])
  const [names, setNames] = useState([])
  const [history, setHistory] = useState([null])
  const [graphValue, setGraphValue] = useState(null)
  const [listIndex, setListIndex] = useState(0)

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
        setHistory(data.data)
        setGraphValue(data.data[listIndex])
      }
      else {
        console.log(config.messages.noData)
      }
    })
  }, [])

  const buttonEventHandler = (e) => {
    e.preventDefault()
    console.log('Button pressed')
    const change = e.target.value
    var tmp = listIndex + parseInt(change)
    if (tmp >= history.length) {
      tmp = 0
    }
    else if (tmp < 0) {
      tmp = history.length - 1
    }
    setListIndex(tmp)
    setGraphValue(history[tmp])
  }

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
        {<Graph graphValues={graphValue} names={names}/>}
      </div>
      {' '}
      <div>
        {<GraphButtons buttonEventHandler={buttonEventHandler}/>}
      </div>
    </>
  )
}

export default TemperaturePage
