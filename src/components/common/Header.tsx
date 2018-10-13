/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */
import * as React from 'react';

import application from '../../application';
/*
* Component used to render the header section of the page when is being rendered by a browser
* @since 1.0
*/
class Header extends React.Component {
  render() {
    return (
      <header className="header">
    		<div className="container">
    			<div className="row">
    				<div className="col">
    					<div className="header_content d-flex flex-row align-items-center justify-content-start">
    						<div className="logo"><a href="/">{application.home_logo}</a></div>
                {/*
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
                */}
    						<div className="search_container ml-auto">
    							<div className="weather">
    								<div className="temperature">JJM</div>
                      <a target="_blank" href={application.home_github}>
        								<img className="weather_icon" src="../../images/GitHub-Mark-Light-32px.png" alt=""/>
                      </a>
                    <span/>
                    <a target="_blank" href={application.home_linkedIn}>
                      <img className="weather_icon" src="../../images/In-White-34px-R.png" alt=""/>
                    </a>
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
