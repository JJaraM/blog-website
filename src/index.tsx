import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from './router/AppRouter';

const App = () => (
  <Router>
    <AppRouter />
  </Router>
);

ReactDOM.render(
  <App />, document.getElementById('root') as HTMLElement
);
