import * as React from 'react';
import { Link } from 'react-router-dom';
import menu from './menu';

const HomeMenu: React.StatelessComponent = () => {

  const content = menu.map((item, i) => {
      let MenuLink = (props) => <></>;

      if (item.redirect) {
        MenuLink = (props) => (
          <a href={item.to} target="_blank">
            {props.children}
          </a>
        )
      }

      if (!item.redirect) {
        MenuLink = (props) => (
          <Link to={item.to}>
            {props.children}
          </Link>
        )
      }

      return (
        <li className={window.location.pathname === item.to ? 'active' : ''} key={i}>
          <MenuLink>
            {item.label}
          </MenuLink>
        </li>
      )
  });

  return (
    <nav className="main_nav">
      <ul>
        { content }
      </ul>
    </nav>
  )
}


export default HomeMenu;
