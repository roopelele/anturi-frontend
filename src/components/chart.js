import React from 'react'
import { Line } from 'react-chartjs-2'


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
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  }

  const options = {
    padding: '20px',
    maintainAspectRatio: true,
    responsive: true,
    width: '400',
    height: '300'
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
