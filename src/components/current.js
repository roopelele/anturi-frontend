import React from 'react'

const CurrentTemperatureDisplay = ({ data, names }) => {
  if (names.length === 0) {
    return (
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
