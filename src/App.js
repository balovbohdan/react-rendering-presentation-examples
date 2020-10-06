import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import CodeMirror from 'react-codemirror2';

import Home from './routes/home';
import CreateElement from './routes/create-element';

const App = () => (
  <Fragment>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/create-element" component={CreateElement} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </Fragment>
);

export default App;
