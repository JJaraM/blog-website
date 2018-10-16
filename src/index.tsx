import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import { AppRouter } from './components/app/AppRouter';
import Header from './components/common/Header';
import Menu from './components/common/Menu';
import { Footer } from './components/common/Footer';

const App = () => (
  <Router>
      <div className="super_container">
        <Header/>
        <Menu/>
        <AppRouter />
        <Footer />
      </div>
  </Router>
);

ReactDOM.render(
  <App />, document.getElementById('root') as HTMLElement
);
