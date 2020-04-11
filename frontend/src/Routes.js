import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import SummonerInfo from './pages/SummonerInfo';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/summoner' component={SummonerInfo} />
    </Switch>
  );
}
