/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */
import * as React from 'react';
import application from '../../application';
import { Link } from "react-router-dom";

/*
* Component used to render the header section of the page when is being rendered by a browser
* @since 1.0
*/
export class Header extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  /*
   * When a component will be mount we add a handleScroll event
   */
  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  /*
   * When the component will be unmount we add a handleScroll event
   */
  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const pos = window.scrollY;
    const element = document.getElementById("main-header");
    if (element !== null) {
      if (pos > 100) {
        if (element.classList !== null) {
            element.classList.add("scrolled");
        }
      } else {
        if (element.classList !== null) {
            element.classList.remove('scrolled');
        }
      }
    }
  }

  render() {
    return (
      <header className="header" id="main-header">
    		<div className="container">
    			<div className="row">
    				<div className="col">
    					<div className="header_content d-flex flex-row align-items-center justify-content-start">
    						<div className="logo">
                  <Link to="/">
                    {application.home_logo}
                  </Link>
                </div>
                <nav className="main_nav">
    							<ul>
    								<li className="active">
                      <Link to="/">
                        Home
                      </Link>
                    </li>
    								<li>
                      <Link to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/projects">
                        Projects
                      </Link>
                    </li>
    							</ul>
    						</nav>

    						<div className="search_container ml-auto">
                  {/*
    							<div className="weather">
    								<div className="temperature">{application.home_initials}</div>
                      <a target="_blank" href={application.home_github}>
        								<img className="weather_icon" src="../../images/GitHub-Mark-Light-32px.png" alt=""/>
                      </a>
                    <span/>
                    <a target="_blank" href={application.home_linkedIn}>
                      <img className="weather_icon" src="../../images/In-White-34px-R.png" alt=""/>
                    </a>
    							</div>
                  */}
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
