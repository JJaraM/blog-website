/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */
import * as React from 'react';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { App } from './App';
import { PostMain } from '../../PostMain';
import { PostEditorMain } from '../../PostEditorMain';
import  NotFound from '../common/NotFound';

/*
* Component used to redirect the request to the correspond component.
* @since 1.0
*/
export const AppRouter: React.StatelessComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/post/:id" component={PostMain} />
        <Route exact path="/postEdit/:id" component={PostEditorMain} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
