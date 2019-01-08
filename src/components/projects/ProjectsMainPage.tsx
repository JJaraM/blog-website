/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';
import { Header } from '../header/Header';
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
export class ProjectsMainPage extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <div className="super_container">
        <Header/>
        <div className="home_slinder_projects">

        </div>
        <div className="page_content">
          <div className="container">
            <div className="row row-lg-eq-height">
              <div className="col-lg-12">
                <div className="main-content-project ">

                  <div className="row">
                    <div className="col-sm-6">
                      <div className="package-card card  card-project ">
                        <div className="card-body">
                          <h5 className="card-title card-title-project">
                            <div className="row">
                              <div className="col-8">
                                trip-mobile
                              </div>
                              <div className="col-3">
                                <span className="badge badge-danger">Out of Date</span>
                              </div>
                            </div>
                          </h5>
                          <p className="card-text card-text-project">
                            Application used to create an agenda for your trips, used
                            as a proof of concept about how works ionic as hybrid application,
                            this application was created on 2016.
                            <br/><br/>

                            After finish this application I learned how works with Ionic and how
                            integrate with Angular2, when this was in the beta.

                            <br/><br/>
                            Goals:
                            <ul>
                              <li>Learn how to deploy an ionic application.</li>
                              <li>Learn how works angular 2.</li>
                              <li>Learn how to create a side menu.</li>
                              <li>Create a set of applications that runs in Heroku</li>
                            </ul>
                          </p>
                          <ul className="card-body-project-tags">
                            <li className="post_tag"><a href="#" title="Keyword: #ui">Angular2</a></li>
                            <li className="post_tag"><a href="#" title="Keyword: #theme">Javascript</a></li>
                            <li className="post_tag"><a href="#" title="Keyword: #theme">Ionic 1</a></li>
                          </ul>

                        </div>
                        <div className="card-meta-project">
                          <div className="row">
                            <span className="col-7 card-created-date-project">Created on Mar, 2016</span>

                            <div className="col-5 card-meta-project-buttons">
                              <a href="#" className="mini-button">
                                <i className="fa fa-eye" aria-hidden="true"></i>
                                <span>visit</span>
                              </a>

                              <a href="#" className="mini-button">
                                <i className="fa fa-download" aria-hidden="true"></i>
                                <span>download</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    {/* Second project */}

                    <div className="col-sm-6">
                      <div className="package-card card  card-project ">
                        <div className="card-body">
                          <h5 className="card-title card-title-project">
                            <div className="row">
                              <div className="col-8">
                                blog-website
                              </div>
                              <div className="col-3">
                                <span className="badge badge-success">In Progress</span>
                              </div>
                            </div>
                          </h5>
                          <p className="card-text card-text-project">
                            Well this project corresponds with the web site that you are using,
                            this project is develop with the idea to know my knowledge about my work.

                            <br/><br/>
                            Goals:
                            <ul>
                              <li>Learn ES6</li>
                              <li>Learn ReactJS</li>
                              <li>Learn more about CSS3</li>
                              <li>Use this application as the web client that uses multiple webservices
                              developed in java with spring reactive</li>
                            </ul>
                          </p>
                          <ul className="card-body-project-tags">
                            <li className="post_tag"><a href="#" title="Keyword: #ui">ES6</a></li>
                            <li className="post_tag"><a href="#" title="Keyword: #theme">ReactJS</a></li>
                            <li className="post_tag"><a href="#" title="Keyword: #theme">CSS3</a></li>
                          </ul>

                        </div>
                        <div className="card-meta-project">
                          <div className="row">
                            <span className="col-7 card-created-date-project">Created on Mar, 2016</span>

                            <div className="col-5 card-meta-project-buttons">
                              <a href="#" className="mini-button">
                                <i className="fa fa-eye" aria-hidden="true"></i>
                                <span>visit</span>
                              </a>

                              <a href="#" className="mini-button">
                                <i className="fa fa-download" aria-hidden="true"></i>
                                <span>download</span>
                              </a>
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
        <Footer/>
      </div>
    );
  }
}
