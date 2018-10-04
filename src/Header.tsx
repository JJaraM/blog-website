import * as React from 'react';

import './bootstrap4/bootstrap.min.css'
import './plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import './plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import './plugins/OwlCarousel2-2.2.1/animate.css';
import './main_styles.css';
import './responsive.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
    		<div className="container">
    			<div className="row">
    				<div className="col">
    					<div className="header_content d-flex flex-row align-items-center justify-content-start">
    						<div className="logo"><a href="#">&#123; JJara &#125;</a></div>
    						<nav className="main_nav">
    							<ul>
    								<li className="active"><a href="index.html">Home</a></li>
    								<li><a href="#">Fashion</a></li>
    								<li><a href="#">Gadgets</a></li>
    								<li><a href="#">Lifestyle</a></li>
    								<li><a href="#">Video</a></li>
    								<li><a href="contact.html">Contact</a></li>
    							</ul>
    						</nav>
    						<div className="search_container ml-auto">
    							<div className="weather">
    								<div className="temperature">+10°</div>
    								<img className="weather_icon" src="images/cloud.png" alt=""/>
    							</div>
    							<form action="#">
    								<input type="search" className="header_search_input" placeholder="Type to Search..."/>
    								<img className="header_search_icon" src="images/search.png" alt=""/>
    							</form>
    						</div>
    						<div className="hamburger ml-auto menu_mm">
    							<i className="fa fa-bars trans_200 menu_mm" aria-hidden="true"/>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</header>
    );
  }
}

export default Header;
