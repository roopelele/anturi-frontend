import React, { useState, useEffect } from 'react'
import { Container, Grid, Button } from '@material-ui/core'

import Graph from '../components/chart.js'
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
    <Container style={ { minWidth: '100%' } }>
      <Grid container direction='column' alignItems='center' style={ { minWidth: '100%' } }>
        <h1>Current temperatures:</h1>
        <CurrentTemperatureDisplay data={currentData} names={names}/>
        <Graph values={graphValue} names={names}/>
      </Grid>
      <Grid container direction='row' justify='space-evenly' alignItems='center'>
        <Button variant='contained' onClick = {() => {
          const newDay = day
          newDay.setDate(newDay.getDate() - 1)
          setDay(newDay)
          updateGraph({ date: day })
        }}>previous
        </Button>
        <Button variant='contained' onClick = {() => {
          const newDay = day
          newDay.setDate(newDay.getDate() + 1)
          setDay(newDay)
          updateGraph({ date: day })
        }}>next</Button>
      </Grid>
    </Container>
  )
}

export default TemperaturePage
