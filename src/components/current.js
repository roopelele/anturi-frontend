import React from 'react'

const CurrentTemperatureDisplay = ({ temp }) => {
  console.log(temp)
  if(temp !== -999){
    return (
      <h1>The Current Temperature Is {temp} Celsius</h1>
    )
  }
  else{
    return (
      <h1>No Temperature available</h1>
    )
  }
}

export default CurrentTemperatureDisplay
