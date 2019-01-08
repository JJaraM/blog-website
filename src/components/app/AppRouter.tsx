/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */
import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { About } from '../about/About';
import { Home } from './Home';
import { PostMain } from './PostMain';
import { PostEditorMain } from '../post/PostEditorMain';
import { Category } from './Category';
import { ProjectsMainPage } from '../projects/ProjectsMainPage';
import  NotFound from '../common/NotFound';

/*
* Component used to redirect the request to the correspond component.
* @since 1.0
*/
export const AppRouter: React.StatelessComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={ProjectsMainPage} />
        <Route exact path="/post/:id/:editable?" component={PostMain} />
        <Route exact path="/postEdit/:id" component={PostEditorMain} />
        <Route exact path="/category/:id" component={Category} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
