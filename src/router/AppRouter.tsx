/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { About } from '../components/about/About';
import { Profile } from '../components/about/Profile';
import { Home } from '../components/app/Home';
import { Resume } from '../components/app/Resume';

import { Category } from '../components/app/Category';
import { ProjectsMainPage } from '../components/projects/ProjectsMainPage';
import NotFound from '../components/common/NotFound';
import Footer from '../components/common/Footer';
import { Header } from '../components/header/Header';
import Menu from '../components/header/Menu';
import { PostRouter } from './PostRouter';

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
          <Route path="/post" component={PostRouter} />

          <Route exact path="/category/:id" component={Category} />
          <Route component={NotFound} />
        </Switch>
      <Footer/>
    </div>
  );
}
