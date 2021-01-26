import React from 'react'
import config from '../utils/config.js'
import poggers from '../images/poggers.png'
import monkas from '../images/monkas.png'
import pepega from '../images/pepega.png'
import pepelaugh from '../images/pepelaugh.png'
import peepohappy from '../images/peepohappy.png'
import monkahmm from '../images/monkahmm.png'


const MainPage = () => {
  return (
    <>
      <div style={config.styles.center}>
        <h1>
          Hello World!
        </h1>
      </div>
      <div>
        <div><marquee direction = "right" scrollamount='5'><img src={pepelaugh}/></marquee></div>
        <div><marquee direction = "left" scrollamount='6'><img src={poggers}/></marquee></div>
        <div><marquee direction = "right" scrollamount='7'><img src={pepega}/></marquee></div>
        <div>
          <marquee direction = "left" scrollamount='8'>
            <a href='roopelele.fi/temperatures'><img src={monkas}/></a>
          </marquee>
        </div>
        <div><marquee direction = "right" scrollamount='9'><img src={peepohappy}/></marquee></div>
        <div><marquee direction = "left" scrollamount='10'><img src={monkahmm}/></marquee></div>
      </div>
    </>
  )
}

export default MainPage
