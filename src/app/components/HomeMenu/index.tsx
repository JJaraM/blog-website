import * as React from 'react';
import { Link } from 'react-router-dom';
import menu from './menu';

const HomeMenu: React.StatelessComponent = () => {

  const content = menu.map((item, i) => (
    <li className={window.location.pathname === item.to ? 'active' : ''} key={i}>
      <Link to={item.to}>
        {item.label}
      </Link>
    </li>
  ));

  return (
    <nav className="main_nav">
      <ul>
        { content }
      </ul>
    </nav>
  )
}


export default HomeMenu;
