import React from 'react'
import { Line } from 'react-chartjs-2'
import config from '../utils/config'

const Graph = ({ values, names, title }) => {
  const ErrorDisplay = () => {
    return(
      <>
        <h2>Temperature history not found</h2>
      </>
    )
  }
  if (names === null || values === null || typeof(values) === 'undefined'){
    return (<ErrorDisplay/>)
  }
  if (names.length === 0 || values.length === 0) {
    return (<ErrorDisplay/>)
  }
  if (values[0].times.length === 0 || values[0].temps.length === 0 || names.length === 0) {
    return (<ErrorDisplay/>)
  }

  const datasets = values.map((graphValues, idx) => {
    return {
      label: names.find(y => y.id === graphValues.name) === null ? 'null' : names.find(y => y.id === graphValues.name).name,
      data: graphValues.temps,
      fill: false,
      backgroundColor: config.colors.background[idx % config.colors.background.length],
      borderColor: config.colors.border[idx % config.colors.background.length],
      pointRadius: config.graph.pointRadius,
    }
  })

  const data = {
    labels: values[0].times,
    datasets: datasets
  }

  const Options = (title) => {
    var tmp = config.graph.options
    tmp.title.text = title
    return tmp
  }

  return (
    <div className="Chart">
      <Line data={data} options={Options(title)} />
    </div>
  )
}

export default Graph
