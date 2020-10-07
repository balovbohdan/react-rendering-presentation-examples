import React, { StrictMode } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './header';
import Home from '../../routes/home';
import CreateElement from '../../routes/create-element';

const App = () => (
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/create-element" component={CreateElement} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </StrictMode>
);

export default App;
