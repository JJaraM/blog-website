/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';


import Slinder from '../../Slinder';
import PostsLatest from '../post/PostsLatest';
import { Header } from '../common/Header';
import { Footer } from '../common/Footer';



import '../../bootstrap4/bootstrap.min.css'
import '../../plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../../plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import '../../plugins/OwlCarousel2-2.2.1/animate.css';
import '../../main_styles.css';
import '../../responsive.css';
import '../../customTimeLine.css';
/*
* Component used to render the index page
* @since 1.0
*/
export class Home extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
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
