import React from 'react'

const CurrentTemperatureDisplay = ({ temp }) => {
  if(temp.length === 0) {
    console.log('No temperature data available')
    return (
      <h1>
        No temperature available
      </h1>
    )
  }
  return (
    <>
      <ul>
        {temp.map( x =>
          <li key={x.name}>
            {x.value} ℃
          </li>
        )}
      </ul>
    </>
  )
}

export default CurrentTemperatureDisplay
