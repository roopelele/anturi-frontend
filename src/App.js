import './index.css'
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import MainPage from './pages/mainPage'
import TemperaturePage from './pages/temperaturePage'

window.language = navigator.language || navigator.userLanguage

const App = () => {
  return (
    <Switch>
      {' '}
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={MainPage}></Route>
      <Route exact path='/temperatures' component={TemperaturePage}></Route>
      <Redirect to='/404' />
    </Switch>
  )
}


export default App