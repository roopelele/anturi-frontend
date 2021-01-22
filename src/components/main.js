import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from '../pages/mainPage';
import TemperaturePage from '../pages/temperaturePage';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={MainPage}></Route>
      <Route exact path='/temperatures' component={TemperaturePage}></Route>
    </Switch>
  );
}

export default Main;