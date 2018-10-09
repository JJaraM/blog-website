import * as React from 'react';

class Menu extends React.Component {
  render() {
    return (
      <div className="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
    		<div className="menu_close_container">
          <div className="menu_close">
            <div>&nbsp</div>
            <div>&nbsp</div>
          </div>
        </div>
    		<div className="logo menu_mm"><a href="#">Avision</a></div>
    		<div className="search">
    			<form action="#">
    				<input type="search" className="header_search_input menu_mm" placeholder="Type to Search..."/>
    				<img className="header_search_icon menu_mm" src="images/search_2.png" alt=""/>
    			</form>
    		</div>
    		<nav className="menu_nav">
    			<ul className="menu_mm">
    				<li className="menu_mm"><a href="index.html">home</a></li>
    				<li className="menu_mm"><a href="#">Fashion</a></li>
    				<li className="menu_mm"><a href="#">Gadgets</a></li>
    				<li className="menu_mm"><a href="#">Lifestyle</a></li>
    				<li className="menu_mm"><a href="#">Video</a></li>
    				<li className="menu_mm"><a href="contact.html">Contact</a></li>
    			</ul>
    		</nav>
    	</div>
    );
  }
}

export default Menu;
