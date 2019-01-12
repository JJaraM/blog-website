/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';

import Slinder from '../../Slinder';
import PostsLatest from '../post/PostsLatest';
import { Header } from '../header/Header';
import { Footer } from '../common/Footer';
import PostVideo from '../post/PostVideo'

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
      return (<div></div>)
    }

    return (
      <div className="super_container">
        <Header/>
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
                  {/*<div className="blog_section">
                    <div className="section_panel d-flex flex-row align-items-center justify-content-start">
                      <div className="section_title">Carrer</div>
                    </div>
                    <div className="section_content">

                    </div>
                  </div>*/}









                  <div className="blog_section"></div>

                </div>
              </div>
              <div className="col-lg-3">
                <div className="sidebar">
                  <div className="sidebar_background"/>

                  <div className="sidebar_section">
                    <aside id="about-3" className="widget about">
                      <img className="about-image" src="https://media.licdn.com/dms/image/C5603AQGg6FHWARek0w/profile-displayphoto-shrink_100_100/0?e=1551916800&amp;v=beta&amp;t=mQl4bZVK8-i4jx3BxMcrYzlEHLcHOsFuQxMAwEwYMwA" alt=""/>
                      <h2 className="widgettitle">Jonathan Jara Morales</h2>
                      <div className="about-description">
                        <span>
                          I am a software developer who loves creates new apps.
                        </span>
                      </div>
                    </aside>

                    <aside className="what_say_people">

                      <span className="sidebar_title">What's say the people about me?</span>


                      <span className="tooltip story_circle story_hotlink">
                        <img width="415" height="415" src="https://media.licdn.com/dms/image/C4E03AQGwTHDmWYwFIQ/profile-displayphoto-shrink_800_800/0?e=1552521600&v=beta&t=nr15cDFWep-s0vdi-T5B9PChwlSxhsAk466IsegF-50" className="img-responsive wp-post-image"/>
                        <span>
                            <strong>Mario Chacón Campos</strong>
                            <div className="description">
                              Jonathan pays attention to details and is àlways learning and building software with new tech and languages.
                            </div>
                        </span>
                      </span>

                    
                    </aside>













                  </div>

                  <div className="sidebar_section">
                    <div className="advertising">
                      <div className="advertising_background" style={{backgroundImage: `url(https://images-na.ssl-images-amazon.com/images/I/81Kf5P10mKL.__BG0,0,0,0_FMpng_AC_UL320_SR260,320_.jpg)`}}></div>
                        <div className="advertising_content d-flex flex-column align-items-start justify-content-end">
                      {/*<div className="advertising_perc">-15%</div>
                        <div className="advertising_link">
                          <a href="#">How Did van Gogh’s Turbulent Mind</a>
                        </div>*/}
                      </div>
                    </div>
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
