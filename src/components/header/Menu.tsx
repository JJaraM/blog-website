/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */
import * as React from 'react';

import application from '../../application';

/*
* Component used to render the header section of the page when is being rendered by a mobile device
* @since 1.0
*/
class Menu extends React.Component {
  render() {
    return (
      <div className="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
    		<div className="menu_close_container">
          <div className="menu_close"/>
        </div>
    		<div className="logo menu_mm"><a href="/">{application.home_logo}</a></div>
    		<div className="search">
    			<form action="#">
    				<input type="search" className="header_search_input menu_mm" placeholder="Type to Search..."/>
    				<img className="header_search_icon menu_mm" src="images/search_2.png" alt=""/>
    			</form>
    		</div>
    	</div>
    );
  }
}

export default Menu;
