/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';
import Slinder from '../../Slinder';
import PostsLatest from '../post/PostsLatest';
import { Header } from '../header/Header';
import { Footer } from '../common/Footer';

import $ from 'jquery';

import '../../bootstrap4/bootstrap.min.css'
import '../../plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../../plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import '../../plugins/OwlCarousel2-2.2.1/animate.css';
import '../../main_styles.css';
import '../../responsive.css';
import '../../customTimeLine.css';
  declare var $: $;
/*
* Component used to render the index page
* @since 1.0
*/
export class Home extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  handleChange(event: any) : void {
    console.log('as');
  }

  render() {
    return (
      <div className="super_container">
        <Header/>
        <div className="home_slinder">
          <Slinder/>
        </div>
        <div className="page_content">
          <div className="container">
            <div className="row row-lg-eq-height">
              <div className="col-lg-9">
                <div className="main_content">
                  <PostsLatest/>
                  {/*<div className="blog_section">
                    <div className="section_panel d-flex flex-row align-items-center justify-content-start">
                      <div className="section_title">Carrer</div>
                    </div>
                    <div className="section_content">

                    </div>
                  </div>*/}







                  <div className="blog_section">
                    <div className="section_panel d-flex flex-row align-items-center justify-content-start">
                      <div className="section_title">Most Popular Videos</div>
                    </div>
                    <div className="section_content">
                      <div className="row">
                        <div className="col">
                          <div className="videos">
                            <div className="player_container">

                            <iframe className="youtube-player"
                              src="https://www.youtube.com/embed/GxlT92-M5no">
                              </iframe>
                            </div>
                            <div className="playlist">
                              <div className="playlist_background"></div>




                              {/*
                                onclick="jQuery('#P1').YTPChangeVideo({videoURL: 'UjYemgbhJF0', mute:false, addRaster:true})"*/}
                              <div className="video_container video_command active" onClick={this.handleChange}>
                                <div className="video d-flex flex-row align-items-center justify-content-start">
                                  <div className="video_image">
                                    <div><img src="https://img.youtube.com/vi/GxlT92-M5no/0.jpg" alt=""/>
                                    </div><img className="play_img" src="images/play.png" alt=""/></div>
                                    <div className="video_content">
                                      <div className="video_title">How to install tomcat 7 on linux</div>
                                      <div className="video_info"><span>1.2M views</span><span>Sep 29</span></div>
                                    </div>
                                </div>
                              </div>


                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>



                </div>
              </div>
              <div className="col-lg-3">
                <div className="sidebar">
                  <div className="sidebar_background"/>
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
