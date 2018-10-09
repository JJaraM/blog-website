import * as React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
    		<div className="container">
    			<div className="row">
    				<div className="col">
    					<div className="header_content d-flex flex-row align-items-center justify-content-start">
    						<div className="logo"><a href="#">&#123; JJara &#125;</a></div>
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
                      <a target="_blank" href="https://github.com/JJaraM">
        								<img className="weather_icon" src="../../images/GitHub-Mark-Light-32px.png" alt=""/>
                      </a>
                    <span/>
                    <a target="_blank" href="https://www.linkedin.com/in/jonathan-jara-morales-360577112/">
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
