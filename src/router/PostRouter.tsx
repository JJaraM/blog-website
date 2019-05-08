/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PostMain } from '../components/app/PostMain';
import PostEditor from '../components/post/PostEditor';
import { PostAddMain } from '../components/post/PostAddMain';

/*
* Component used to redirect the request to the correspond component.
* @since 1.0
*/
export const PostRouter: React.StatelessComponent = () => {
  return (
    <Switch>
      <Route exact path="/post/edit/:id" component={PostEditor} />
      <Route exact path="/post/view/:id/:editable?" component={PostMain} />
      <Route exact path="/post/add" component={PostAddMain} />
    </Switch>
  );
}
