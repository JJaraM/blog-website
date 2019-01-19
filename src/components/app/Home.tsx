/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';

import Slinder from '../../Slinder';
import PostsLatest from '../post/PostsLatest';
import { Header } from '../header/Header';
import Menu from '../header/Menu';
import { Footer } from '../common/Footer';
import PostVideo from '../post/PostVideo';
import ExperienceSide from '../common/ExperienceSide';

import '../../bootstrap4/bootstrap.min.css'
import '../../plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../../plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import '../../plugins/OwlCarousel2-2.2.1/animate.css';
import '../../main_styles.css';
import '../../responsive.css';
import '../../customTimeLine.css';


import apiTag from '../../api/tag';

interface State { tags: any; }
/*
* Component used to render the index page
* @since 1.0
*/
export class Home extends React.Component<any, State> {

  constructor(props:any) {
    super(props);
  }

  async componentDidMount() {
    this.fetchTags();
  }

  fetchTags = () => {
    fetch(apiTag.findAll).then(response => response.json()).then(data => this.setState({tags: data}));
  }

  render() {
    if (this.state === null || this.state.tags === null) {
      return (<></>)
    }

    return (
      <div className="super_container">
        <Header/>
        <Menu/>
        <div className="home_slinder">
          <Slinder tags={this.state.tags} />
        </div>
        <div className="page_content">
          <div className="container">
            <div className="row row-lg-eq-height">
              <div className="col-lg-9">
                <div className="main_content">
                  <PostsLatest tags={this.state.tags} />
                  <PostVideo/>
                  <div className="blog_section"></div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="sidebar">
                  <div className="sidebar_background"/>
                  <div className="sidebar_section">
                    <div className="widget-body">
                       <div className="pk-widget-author">
                          <div className="pk-widget-author-container">
                            <h5 className="title-block title-widget">Author</h5>
                            <h5 className="pk-author-title">Jonathan Jara</h5>
                            <div className="pk-author-avatar">
                              <a href="https://expertlytheme.com/hanna-janssen/author/elliot/" rel="author">
                                <img alt="" src="https://media.licdn.com/dms/image/C5603AQGg6FHWARek0w/profile-displayphoto-shrink_200_200/0?e=1553126400&v=beta&t=NUoSgMdhwyPr3v68P8bPLRWBNs5h42aa5AjPQsFEe7g" className="avatar avatar-80 photo lazyautosizes pk-lazyloaded" height="80" width="80"/>
                              </a>
                            </div>
                            <div className="pk-author-data">
                              <div className="author-description pk-color-secondary">
                                I am a software developer who loves creates new apps.
                              </div>
                              <div className="pk-author-social-links pk-social-links-wrap pk-social-links-template-default">
                                <div className="pk-social-links-items">
                                  <div className="pk-social-links-item pk-social-links-website">
                                    <a href="#" className="pk-social-links-link" target="_blank">
                                      <i className="fa fa-linkedin"/>
                                    </a>
                                    </div>
                                    <div className="pk-social-links-item pk-social-links-facebook">
                                      <a href="#" className="pk-social-links-link" target="_blank">
                                        <i className="fa fa-github"/>
                                      </a>
                                    </div>
                                    <div className="pk-social-links-item pk-social-links-twitter">
                                      <a href="#" className="pk-social-links-link" target="_blank">
                                        <i className="fa fa-youtube"/>
                                      </a>
                                    </div>
                                  </div>
                               </div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <aside className="what_say_people">
                      <span className="sidebar_title">What does the people say about me?</span>
                      <div className="sidebar_section_content">
                        <span className="tooltip story_circle story_hotlink">
                          <img width="415" height="415" src="https://media.licdn.com/dms/image/C4E03AQFd3SloZ_TPLQ/profile-displayphoto-shrink_800_800/0?e=1553126400&v=beta&t=jo60srnWXpcZ9aos1uAVbl2_Y9Ohbj7OpY8nekMdnqo" className="img-responsive wp-post-image"/>
                          <span>
                            <div className="tooltip-desc">
                              <strong>Luberth Morera</strong>
                              <div className="description">
                                We are proud to have you in our team and we encourage you to keep being a great
                                ambassador of what we call achieve with dedication and passion
                              </div>
                            </div>
                          </span>
                        </span>
                        <span className="tooltip story_circle story_hotlink">
                          <img width="415" height="415" src="https://media.licdn.com/dms/image/C4E03AQFd3SloZ_TPLQ/profile-displayphoto-shrink_800_800/0?e=1553126400&v=beta&t=jo60srnWXpcZ9aos1uAVbl2_Y9Ohbj7OpY8nekMdnqo" className="img-responsive wp-post-image"/>
                          <span>
                            <div className="tooltip-desc">
                              <strong>Luberth Morera</strong>
                              <div className="description">
                                During 2017 we have constantly received outstanding feedback from the client
                                who's is more than happy having Jonathan as part of their team: Consistency, commitment
                                and great quality
                              </div>
                            </div>
                          </span>
                        </span>
                        <span className="tooltip story_circle story_hotlink">
                           <img width="415" height="415" src="https://media.licdn.com/dms/image/C4E03AQGwTHDmWYwFIQ/profile-displayphoto-shrink_800_800/0?e=1552521600&v=beta&t=nr15cDFWep-s0vdi-T5B9PChwlSxhsAk466IsegF-50" className="img-responsive wp-post-image"/>
                           <span>
                               <strong>Mario Chacón Campos</strong>
                               <div className="description">
                                 Jonathan pays attention to details and is àlways learning and building software with new tech and languages.
                               </div>
                           </span>
                         </span>
                        </div>
                    </aside>
                    <ExperienceSide />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
