/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */
import * as React from 'react';
import * as Markdown from 'react-markdown';
import { Redirect } from 'react-router'
import { Link } from "react-router-dom";
import Prism from 'prismjs';

import 'prismjs/components/prism-java';
import 'prismjs/components/prism-markdown';

import api from '../../api/post';
import Post from '../../dto/Post';

import { Loading } from '../common/Loading';
import { CircleAnimation } from '../common/CircleAnimation';

// import '../../darcula.css';

interface Props {
  id: string;
  editable?: string;
}

interface State {
  id: string;
  isLoading: boolean;
  post: Post;
  redirect: boolean;
}


class PostSection extends React.Component<Props, State> {

  constructor(props:Props) {
    super(props);
    console.log(props);
  }

  async componentDidMount() {

    Prism.highlightAll()
    this.setState({isLoading: true, redirect: false});

    fetch(api.findById  + this.props.id)
      .then(response => response.json())
      .catch(error => this.setState({redirect: true}))
      .then(data => this.setState({post: data, isLoading: false}));
  }

  componentDidUpdate () {
    Prism.highlightAll()
  }

  render() {



    if (this.state != null && this.state.redirect) {
      return <Redirect to='/notFound'/>;
    }

    if (this.state === null || this.state.isLoading) {
      return (
        <div className="home_loading">
          <Loading />
        </div>
      )
    }

    return (
      <div>
        <div className="home">
          <svg className="slinder-arrow-svg slinder-left-arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 7 12" enable-background="new 0 0 7 12">
						<polyline className ="slinder-arrow" fill="#bebebe" points="0,5.61 5.609,0 7,0 7,1.438 2.438,6 7,10.563 7,12 5.609,12 -0.002,6.39 "/>
					</svg>
          <svg className="slinder-arrow-svg slinder-right-arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 7 12" enable-background="new 0 0 7 12" >
						<polyline className ="slinder-arrow" fill="#bebebe" points="6.998,6.39 1.389,12 -0.002,12 -0.002,10.562 4.561,6 -0.002,1.438 -0.002,0 1.389,0 7,5.61 "></polyline>
					</svg>

          {
            (() => {
              if (this.state.post.image === null || this.state.post.image === '') {
                return (
                  <CircleAnimation width={200} height={200} />
                )
              }
              return (
                <div className="home_background home_background_mask parallax-window" data-parallax="scroll" style={{backgroundImage: `url(${this.state.post.image})`}} data-speed="0.8"/>
              );
            })()
          }


          <div className="home_content">
            <div className="post_category trans_200"><a href="category.html" className="trans_200">sport</a></div>
            <div className="post_title">{this.state.post.title}</div>
          </div>
        </div>
        <div className="page_content">
          <div className="container">
            <div className="row row-lg-eq-height">
              <div className="col-lg-9">
                <div className="post_content">
                  <div className="post_panel post_panel_top d-flex flex-row align-items-center justify-content-start">
                    <div className="author_image">
                      <div>
                        <img src="https://media.licdn.com/dms/image/C5603AQGg6FHWARek0w/profile-displayphoto-shrink_100_100/0?e=1544659200&v=beta&t=L9GH5HI2eDPaVHDmi1A-pJ_EBQVwUMRDayPCUEUaH9I" alt=""/>
                      </div>
                    </div>
                    <div className="post_meta"><a href="#">Jonathan Jara</a><span>Sep 29, 2017 at 9:48 am</span></div>
                    <div className="post_share ml-sm-auto">
                      {
                        (() => {
                          if (this.props.editable === "true") {
                            return (
                              <Link to={`/postEdit/${this.state.post.id}`}>
                                <span>edit</span>
                              </Link>
                            )
                          }
                          return (
                            <div/>
                          );
                        })()
                      }

                      <span>share</span>
                      <ul className="post_share_list">
                        <li className="post_share_item">
                          <a href="#">
                            <i className="fa fa-facebook" aria-hidden="true"/>
                          </a>
                        </li>
                        <li className="post_share_item">
                          <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true"/>
                          </a>
                        </li>
                        <li className="post_share_item">
                          <a href="#">
                            <i className="fa fa-google" aria-hidden="true"/>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="post_body">
                    <Markdown source={this.state.post.content} escapeHtml={false}/>

                    {/*
                    <div className="post_tags">
                      <ul>
                        <li className="post_tag"><a href="#">Liberty</a></li>
                        <li className="post_tag"><a href="#">Manual</a></li>
                        <li className="post_tag"><a href="#">Interpretation</a></li>
                        <li className="post_tag"><a href="#">Recommendation</a></li>
                      </ul>
                    </div>
                    */}


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

export default PostSection;
