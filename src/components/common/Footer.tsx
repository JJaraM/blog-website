/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';
import { Link } from "react-router-dom";

import application from '../../application';
import api from '../../api/post';
import './footer.css';
// import Post from '../../dto/Post';

interface State {posts: any, isLoading: boolean}

/*
* Component used to redirect the request to the correspond component.
* @since 1.0
*/
class Footer extends React.Component<any, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      posts: [],
      isLoading: false
    };
  }

  async componentDidMount() {
    this.setState({isLoading: true});
    const response = await fetch(api.find + '0' + '/3' + "/0");
    const data = await response.json();
    this.setState({posts: data, isLoading: false});
  }

  render() {

    let popularPost = (<></>);
    if (this.state !== null && this.state.posts !== null && this.state.posts.length > 0) {
      popularPost = this.state.posts.map((post, it) => {
        const date = new Date(post.createDate);
        return (
          <div className="side_post" key={it}>
            <Link to={`/post/view/${post.id}`}>
              <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                 <div className="side_post_image">
                    <div className="footer_popular_post_img" style={{backgroundImage: `url(${post.image})`}}/>
                 </div>
                 <div className="side_post_content">
                    <div className="side_post_title">{post.title}</div>
                    <small className="post_meta">
                      <span> {date.toLocaleDateString()} </span>
                    </small>
                 </div>
              </div>
            </Link>
          </div>
        )
      });
    }
    console.log(popularPost);
    return (
      <footer className="footer">
        {/*
        <div className="container">
          <div className="row footer_center">
            <div className="col-lg-4">
              <div className="footer_title"> Popular Post </div>
              { popularPost }
            </div>
            <div className="col-lg-4">
              <div className="footer_title"> About Me </div>
              <div className="footer-about-img">
                <div className="footer-about-img-picture" style={{backgroundImage: `url(${application.author_image_v2})`}}></div>
                <p> {application.about_me} </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer_title">
                Recent Work
              </div>

              <div className="footer_title">
                Popular Tags
              </div>
            </div>
          </div>
        </div>
        */}
        <div className="center">
          <div className="container">
            <div className="row footer_center ">
              <div className="footer-logo-box">
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
              </div>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="container">
            © COPYRIGHT {application.home_logo} 2019  ALL RIGHTS RESERVED.
            <br />
            Project Build using React Native
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
