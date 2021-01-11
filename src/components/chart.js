import React from 'react'
import { Line } from 'react-chartjs-2'
import colors from '../utils/colors'

const Graph = ({ todayTemp }) => {
  if( todayTemp === null){
    return(
      <>
        <h2>Todays temperature history not found</h2>
      </>
    )
  }
  const times = todayTemp.times
  const temps = todayTemp.temps
  const data = {
    labels: times,
    datasets: [
      {
        label: 'Temperatures',
        data: temps,
        fill: false,
        backgroundColor: 'rgb(0, 97, 189)',
        borderColor: 'rgba(0, 97, 189, 0.5)',
        pointRadius: 1,
        lineTension: 0.4,
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
            suggestedMin: 15.0,
            suggestedMax: 30,
          },
          gridLines: {
            color: colors.gridColor,
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            color: colors.gridColor,
          }
        }
      ]
    },
    legend: {
      position: 'top',
      align: 'start',
    }
  }

  return (
    <>
      <div className="chart">
        <Line data={data} options={options} />
      </div>
    </>
  )
}

export default Graph
