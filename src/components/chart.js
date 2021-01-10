import React from 'react'
import { Line } from 'react-chartjs-2'


const data = {
  labels: ['10:00', '10:05', '10:10', '10:15', '10:20', '10:25'],
  datasets: [
    {
      label: 'temp',
      data: [12, 12, 10, 11, 13, 10],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}


const Graph = () => {
  return (
    <>
      <h1>Here is your chart</h1>
      <div>
        <Line data={data} options={options}/>
      </div>
    </>
  )
}

export default Graph
