/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';

import application from '../../application';

/*
* Component used to redirect the request to the correspond component.
* @since 1.0
*/
export const Footer: React.StatelessComponent = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row row-lg-eq-height">
          <div className="col-lg-9 order-lg-1 order-2">
            <div className="footer_content">
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
              <div className="copyright">
                Copyright &copy;<script>document.write(new Date().getFullYear());</script>
                All rights reserved | This template is made with
                <i className="fa fa-heart-o" aria-hidden="true"/>
                by
                <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 order-lg-2 order-1">
          <div className="subscribe">
            <div className="subscribe_background"/>
            <div className="subscribe_content">
              <div className="subscribe_title">Subscribe</div>
              <form action="#">
                <input type="email" className="sub_input" placeholder="Your Email"/>
                  <button className="sub_button">
                    <svg version="1.1" id="link_arrow_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                    width="19px" height="13px" viewBox="0 0 19 13" enable-background="new 0 0 19 13" >
                    <polygon fill="#FFFFFF" points="12.475,0 11.061,0 17.081,6.021 0,6.021 0,7.021 17.038,7.021 11.06,13 12.474,13 18.974,6.5 "/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
}
