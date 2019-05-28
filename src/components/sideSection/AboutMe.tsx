/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */
import * as React from 'react';
import application from '../../application';
/*
* Component used to render the not found page
* @since 1.0
*/
class AboutMe extends React.Component {
  render() {
    return (
      <div className="widget-body">
         <div className="pk-widget-author">
            <div className="pk-widget-author-container">
              <h5 className="title-block title-widget">Author</h5>
              <h5 className="pk-author-title">Jonathan Jara</h5>
              <div className="pk-author-avatar">
                <a href={application.home_linkedIn} rel="author">
                  <img alt="" src={application.author_image} className="avatar avatar-80 photo lazyautosizes pk-lazyloaded" height="80" width="80"/>
                </a>
              </div>
              <div className="pk-author-data">
                <div className="author-description pk-color-secondary">
                  I am a software developer who loves creates new apps.
                </div>
                <div className="pk-author-social-links pk-social-links-wrap pk-social-links-template-default">
                  <div className="pk-social-links-items">
                    <div className="pk-social-links-item pk-social-links-website">
                      <a href={application.home_linkedIn} className="pk-social-links-link" target="_blank">
                        <i className="fa fa-linkedin"/>
                      </a>
                      </div>
                      <div className="pk-social-links-item pk-social-links-facebook">
                        <a href={application.home_github} className="pk-social-links-link" target="_blank">
                          <i className="fa fa-github"/>
                        </a>
                      </div>
                      <div className="pk-social-links-item pk-social-links-twitter">
                        <a href={application.home_youtube} className="pk-social-links-link" target="_blank">
                          <i className="fa fa-youtube"/>
                        </a>
                      </div>
                    </div>
                 </div>
               </div>
            </div>
         </div>
      </div>
    );
  }
}
export default AboutMe;
