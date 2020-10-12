import React, { StrictMode } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './header';
import CreateElement from '../../routes/create-element';
import Home from '../../routes/home';
import StandardRenderBehavior from '../../routes/standard-render-behavior';

const App = () => (
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/create-element" component={CreateElement} />
        <Route path="/standard-render-behavior" component={StandardRenderBehavior} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </StrictMode>
);

export default App;
