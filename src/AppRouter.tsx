import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { App } from './App';
import { PostMain } from './PostMain';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/post/:id" component={PostMain} />
        <Route component={PostMain} />
      </Switch>
    </Router>
  );
}
