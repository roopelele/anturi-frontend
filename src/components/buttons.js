import React from 'react'

const Button = ({ text, value, eventHandler }) => {
  return(
    <button value={value} className='Button' onClick={e => eventHandler(e)}>{text}</button>
  )
}

const GraphButtons = ({ buttonEventHandler }) => {
  return (
    <>
      <Button text={'previous'} value={-1} eventHandler={buttonEventHandler}/>
      {' '}
      <Button text={'next'} value={1} eventHandler={buttonEventHandler}/>
    </>
  )
}


export default GraphButtons
