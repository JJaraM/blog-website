/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { About } from '../about/About';
import { Profile } from '../about/Profile';
import { Home } from './Home';
import { Resume } from './Resume';
import { PostMain } from './PostMain';
import { PostEditorMain } from '../post/PostEditorMain';
import { Category } from './Category';
import { ProjectsMainPage } from '../projects/ProjectsMainPage';
import NotFound from '../common/NotFound';
import Footer from '../common/Footer';
import { Header } from '../header/Header';
import Menu from '../header/Menu';

/*
* Component used to redirect the request to the correspond component.
* @since 1.0
*/
export const AppRouter: React.StatelessComponent = () => {

  return (
    <div className="super_container">
      <Header/>
      <Menu/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/about" component={About} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/projects" component={ProjectsMainPage} />
          <Route exact path="/post/:id/:editable?" component={PostMain} />
          <Route exact path="/postEdit/:id" component={PostEditorMain} />
          <Route exact path="/category/:id" component={Category} />
          <Route component={NotFound} />
        </Switch>
      <Footer/>
    </div>
  );
}
