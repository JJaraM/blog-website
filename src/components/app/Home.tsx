/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';

import Slinder from '../../Slinder';
import PostsLatest from '../post/PostsLatest';

import { Loading } from '../common/Loading';
import PostVideo from '../post/PostVideo';
import ExperienceSide from '../sideSection/ExperienceSide';
import { PeopleAboutMe } from '../sideSection/PeopleAboutMe';

import '../../bootstrap4/bootstrap.min.css'
import '../../plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../../plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import '../../plugins/OwlCarousel2-2.2.1/animate.css';
import '../../main_styles.css';
import '../../responsive.css';
import '../../customTimeLine.css';


import apiTag from '../../api/tag';

interface State { tags: any; isLoading: boolean}
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
    this.setState({isLoading: true});
  }

  fetchTags = () => {
    fetch(apiTag.findAll).then(response => response.json()).then(data => this.setState({tags: data, isLoading: false}));
  }

  render() {
    if (this.state === null || this.state.isLoading) {
      return (
        <div className="home_loading">
          <Loading />
        </div>
      )
    }

    return (
      <>
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
                              <a href="#" rel="author">
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
                    <PeopleAboutMe />
                    <ExperienceSide />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </>
    );
  }
}
