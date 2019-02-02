/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';

import Footer from '../common/Footer';
import '../../bootstrap4/bootstrap.min.css'
import '../../plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../../plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import '../../plugins/OwlCarousel2-2.2.1/animate.css';
import '../../main_styles.css';
import '../../responsive.css';
import '../../customTimeLine.css';
import './style.css';
/*
* Component used to render the index page
* @since 1.0
*/
export class ProjectsMainPage extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <>

        <div className="home_slinder_projects">
        </div>
        <div className="page_content">
          <div className="container">
            <div className="row">

              <div className="col-sm-6">
                <div className="wrapper">
                  <div className="product-img">
                    <img src="https://github.com/JJaraM/trip-mobile/raw/master/img/login.png" height="420" width="250"/>
                  </div>
                  <div className="product-info">
                    <div className="product-text">
                      <h1 className="">
                        <div className="row">
                          <div className="col-sm-6">
                            trip-mobile
                          </div>
                          <div className="col-sm-6">
                            <div className="jjara-post-slinder-tags">
                              <a className="tag red" href="#">Out of Date</a>
                            </div>
                          </div>
                        </div>
                      </h1>
                      <p>
                        Application used to create an agenda for your trips, used
                        as a proof of concept about how works ionic as hybrid application,
                        this application was created on 2016.

                        After finish this application I learned how works with Ionic and how
                        integrate with Angular2, when this was in the beta.
                      </p>
                    </div>
                    <div className="product-price-btn">
                      <div className="jjara-post-slinder-tags">
                        <a className="tag" href="#">Angular2</a>
                        <a className="tag" href="#">Javascript</a>
                        <a className="tag" href="#">Ionic 1</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-sm-6">
                <div className="wrapper">
                  <div className="product-img">
                    <img src="https://github.com/JJaraM/blog-website/raw/master/images/img2.png" height="420" width="250"/>
                  </div>
                  <div className="product-info">
                    <div className="product-text">
                      <h1 className="">
                        <div className="row">
                          <div className="col-sm-6">
                            Blog WebSite
                          </div>
                          <div className="col-sm-6">
                            <div className="jjara-post-slinder-tags">
                              <a className="tag green" href="#">In Progress</a>
                            </div>
                          </div>
                        </div>
                      </h1>
                      <p>
                        Well this project corresponds with the web site that you are using,
                         this project is develop with the idea to know my knowledge about my work.
                      </p>
                    </div>
                    <div className="product-price-btn">
                      <div className="jjara-post-slinder-tags">
                        <a className="tag" href="#">javascript</a>
                        <a className="tag" href="#">react</a>
                        <a className="tag" href="#">ES6</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>




            </div>

            <div className="row">

              <div className="col-sm-6">
                <div className="wrapper-after">
                  <div className="product-img">
                    <img src="https://github.com/JJaraM/Chameleon/raw/master/logo.png" height="200" width="250"/>
                  </div>
                  <div className="product-info">
                    <div className="product-text">
                      <h1 className="">
                        <div className="row">
                          <div className="col-sm-6">
                            Chameleon
                          </div>
                          <div className="col-sm-6">
                            <div className="jjara-post-slinder-tags">
                              <a className="tag red" href="#">Out of Date</a>
                            </div>
                          </div>
                        </div>
                      </h1>
                      <p>
                        Is a java framework that helps the copy objects that have the same attributes types,
                        without the necessity to create heavy factories and deal with the creation of the subrelations
                        objects.
                      </p>
                    </div>
                    <div className="product-price-btn">
                      <div className="jjara-post-slinder-tags">
                        <a className="tag" href="#">jpa</a>
                        <a className="tag" href="#">spring-aop</a>
                        <a className="tag" href="#">spring-beans</a>
                        <a className="tag" href="#">aspectjweaver</a>
                        <a className="tag" href="#">java</a>
                        <a className="tag" href="#">java-proxy</a>
                        <a className="tag" href="#">javassist</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="wrapper-after">
                  <div className="product-img">
                    <img src="https://github.com/JJaraM/dev-utils/raw/master/example/img1.png" height="200" width="250"/>
                  </div>
                  <div className="product-info">
                    <div className="product-text">
                      <h1 className="">
                        <div className="row">
                          <div className="col-sm-6">
                            Dev Utils
                          </div>
                          <div className="col-sm-6">
                            <div className="jjara-post-slinder-tags">
                              <a className="tag green" href="#">In Progress</a>
                            </div>
                          </div>
                        </div>
                      </h1>
                      <p>
                        Application created on electron, used to create reviews and manage a change log for each commit
                      </p>
                    </div>
                    <div className="product-price-btn">
                      <div className="jjara-post-slinder-tags">
                        <a className="tag" href="#">electron</a>
                        <a className="tag" href="#">javascript</a>
                        <a className="tag" href="#">ES6</a>
                        <a className="tag" href="#">reactjs</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>









          {/*NEXT*/}

          </div>
        </div>
        <Footer/>
      </>
    );
  }
}
