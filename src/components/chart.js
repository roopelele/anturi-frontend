import React from 'react'
import { Line } from 'react-chartjs-2'
import config from '../utils/config'

const Graph = ({ graphValues, names }) => {
  if( graphValues === null){
    return(
      <>
        <h2>Todays temperature history not found</h2>
      </>
    )
  }
  const times = graphValues.times
  const temps = graphValues.temps
  const data = {
    labels: times,
    datasets: [
      {
        label: names.find(y => y.id === graphValues.name) === null ? 'null' : names.find(y => y.id === graphValues.name).name,
        data: temps,
        fill: false,
        backgroundColor: config.colors.background,
        borderColor: config.colors.border,
        pointRadius: config.graph.pointRadius,
      },
    ],
  }

  const options = {
    padding: '20px',
    maintainAspectRatio: true,
    responsive: true,
    width: '200',
    height: '100',
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMin: config.graph.yMin,
            suggestedMax: config.graph.yMax,
          },
          gridLines: {
            color: config.colors.grid,
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            color: config.colors.grid,
          }
        }
      ]
    },
    legend: {
      position: config.graph.legend.pos,
      align: config.graph.legend.alignment,
    }
  }

  return (
    <>
      <div className="Chart">
        <Line data={data} options={options} />
      </div>
    </>
  )
}

export default Graph
