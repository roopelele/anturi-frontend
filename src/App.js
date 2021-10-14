import './index.css'
import React from 'react'
import {Switch, Route} from 'react-router-dom'

import MainPage from './pages/mainPage'
import TemperaturePage from './pages/temperaturePage'
import NotFound from './components/notfound'

window.language = navigator.language || navigator.userLanguage

const App = () => {
  return (
    <Switch>
      {' '}
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={MainPage} />
      <Route exact path='/temperatures' component={TemperaturePage} />
      <Route path='*' component={NotFound} />
    </Switch>
  )
}


export default App