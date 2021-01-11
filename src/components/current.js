import React from 'react'

const CurrentTemperatureDisplay = ({ temp }) => {
  console.log('temperature value', temp)
  if(temp !== -999){
    return (
      <h1>Temperature: {temp} ℃</h1>
    )
  }
  else{
    return (
      <h1>No Temperature available</h1>
    )
  }
}

export default CurrentTemperatureDisplay
