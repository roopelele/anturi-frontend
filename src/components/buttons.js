import React from 'react'

const Button = (props) => {
  return(
    <button className='Button' onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

export default Button
