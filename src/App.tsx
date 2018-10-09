import * as React from 'react';

import Header from './Header';
import Menu from './Menu';
import Slinder from './Slinder';

import './bootstrap4/bootstrap.min.css'
import './plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import './plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import './plugins/OwlCarousel2-2.2.1/animate.css';
import './main_styles.css';
import './responsive.css';

export const App: React.StatelessComponent<{}> = (props) => {
  return (
    <div className="super_container">
      <Header/>
      <Menu/>
      <div className="home_slinder">
          <Slinder/>
      </div>
    </div>
  );
}
