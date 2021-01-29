import React, { StrictMode } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './header';
import CreateElement from '../../routes/create-element';
import Home from '../../routes/home';
import ImmutabilityMatters from '../../routes/immutability-matters';
import PropsReferencesOptimization from '../../routes/props-references-optimization';
import RenderBatchingExample from '../../routes/render-batching-example';
import RenderBatchingPseudocode from '../../routes/render-batching-pseudocode';
import Slides from '../../routes/slides';
import StandardRenderBehavior from '../../routes/standard-render-behavior';

const App = () => {
  const shouldRenderHeder = false;

  return (
    <StrictMode>
      <BrowserRouter>
        {shouldRenderHeder && <Header />}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/immutability-matters" component={ImmutabilityMatters} />
          <Route path="/create-element" component={CreateElement} />
          <Route path="/props-references-optimization" component={PropsReferencesOptimization} />
          <Route path="/render-batching-example" component={RenderBatchingExample} />
          <Route path="/render-batching-pseudocode" component={RenderBatchingPseudocode} />
          <Route path="/slides" component={Slides} />
          <Route path="/standard-render-behavior" component={StandardRenderBehavior} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;
