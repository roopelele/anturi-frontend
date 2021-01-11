import React from 'react'


const Button = ({ text, value, eventHandler }) => {
  return(
    <button value={value} onClick={e => eventHandler(e)}>{text}</button>
  )
}

const TimeButtons = ({ timeButtonEventHandler }) => {
  return (
    <></>
  )
  // TODO fix CORS
  return (
    <>
      <Button text={'1 year'} value={365} eventHandler={timeButtonEventHandler}/>
    </>
  )
}


export default TimeButtons
