/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';

import '../../bootstrap4/bootstrap.min.css'
import '../../plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../../plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import '../../plugins/OwlCarousel2-2.2.1/animate.css';
import '../../main_styles.css';
import '../../responsive.css';
import '../../about.css';


/*
* Component used to render the index page
* @since 1.0
*/
export const About: React.StatelessComponent<{}> = (props) => {
  const image = "https://lmpixels.com/wp/kerge-wp/demo2/wp-content/uploads/sites/4/2018/04/kerge_start_page_1.jpg";
  return (
    <div className="about-wrapper">
      <header className="about-header">
        <div className="header-image">
          <img src="//lmpixels.com/wp/kerge-wp/demo2/wp-content/uploads/sites/4/2018/03/my_photo.png" alt="image"/>
        </div>
        <div className="site-title-block">
            <a href="https://lmpixels.com/wp/kerge-wp/demo2/">
                <h1 className="site-title">Jonathan Jara</h1>
                <p className="site-subtitle">Software Developer</p>
            </a>
        </div>
      </header>

      <div className="content">
        <div >
          <div className="sub-content main-image" style={{backgroundImage: `url(${image})`}}>
             	<div className="main-image-mask"></div>
    					<div className="sub-content-main-image-title">
    						<div className="col-sm-12 col-md-12 col-lg-12">
    							<div className="title-block">
                    <h2>Jonathan Jara</h2>
                    <div className="sp-subtitle">Software Developer</div>
                  </div>
    						</div>
    					</div>
    				</div>
        </div>

      </div>
    </div>
  );
}
