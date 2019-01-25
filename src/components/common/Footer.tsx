/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';

import application from '../../application';
import './footer.css';

/*
* Component used to redirect the request to the correspond component.
* @since 1.0
*/
export const Footer: React.StatelessComponent = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row row-lg-eq-height footer_center">
          <div className="col-lg-4">
            <div className="footer_title">
              Popular Post
            </div>
            <p>

            </p>
          </div>
          <div className="col-lg-4">
            <div className="footer_title">
              About Me
            </div>
            <div className="footer-about-img">
              <div className="footer-about-img-picture"></div>
              <p>
                {application.about_me}
                </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer_title">
              Recent Work
            </div>
          </div>
        </div>
      </div>

      <div className="center">
        <div className="container">
          <div className="row row-lg-eq-height footer_center ">
            <div className="footer-logo-box">
              <div className="footer_logo">
                <a href="#">{application.home_logo}</a>
              </div>
              <div className="footer_social">
                <ul>
                  <li className="footer_social_facebook">
                    <a target="_blank" href={application.home_linkedIn}>
                      <i className="fa fa-linkedin" aria-hidden="true"/>
                    </a>
                  </li>


                  <li className="footer_social_vimeo">
                    <a target="_blank" href={application.home_github}>
                      <i className="fa fa-github" aria-hidden="true"/>
                    </a>
                  </li>

                  <li className="footer_social_google">
                    <a target="_blank" href={application.home_youtube}>
                      <i className="fa fa-youtube" aria-hidden="true"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          © COPYRIGHT {application.home_logo} 2019  ALL RIGHTS RESERVED.
        </div>
      </div>


    </footer>
);
}
