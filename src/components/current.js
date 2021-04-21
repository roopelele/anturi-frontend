import React from 'react'

const CurrentTemperatureDisplay = ({ data, names }) => {
  if( data === null || names === null){
    return(
      <></>
    )
  }
  if (data.length <= 1 || names.length === 0) {
    return(
      <></>
    )
  }
  return (
    <>
      <ul>
        {data.map(x => <li key={x.name}> {names.find(y => y.id === x.name) === null ? 'null' : names.find(y => y.id === x.name).name}: {x.value} </li> ) }
      </ul>
    </>
  )
}

export default CurrentTemperatureDisplay
