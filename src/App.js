import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Intro from './Pages/Intro'
import Game from './Pages/Game'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Intro />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
