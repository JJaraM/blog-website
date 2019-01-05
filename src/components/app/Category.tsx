import * as React from 'react';

import { Header } from '../common/Header';
import { Footer } from '../common/Footer';

import apiTag from '../../api/tag';
import apiPost from '../../api/post';

import Post from '../../dto/Post';
import Tag from '../../dto/Tag';

import PostsLatestSection from '../../components/post/PostsLatestSection';
import Slinder from '../../Slinder';

import '../../bootstrap4/bootstrap.min.css'
import '../../plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../../plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import '../../plugins/OwlCarousel2-2.2.1/animate.css';
import '../../post.css';
import '../../post_responsive.css';
import '../../plugins/font-awesome-4.7.0/css/font-awesome.min.css';

interface State {
  isLoading: boolean;
  tags: Array<Tag>;
  posts: Array<Post>;
  redirect: boolean;
}

export class Category extends React.Component<any, State> {

  constructor(props:any) {
    super(props);
    this.state = {
      posts: [],
      isLoading: false,
      tags: [],
      redirect: false
    }
  }

  async componentDidMount() {
    this.fetchTags();
  }

  /*
   * Fetch the tag information from the microservice
   */
  fetchTags = () => {
    fetch(apiTag.byIds + this.props.match.params.id)
      .then(response => response.json())
      .then(data => {
        data.forEach((tag) => {
          if (tag.posts !== null) {
            tag.posts.forEach((postId) => {
              fetch(apiPost.findById + postId)
                .then(response => response.json())
                .then(postData => {
                  this.state.posts.push(postData);
                  this.setState({isLoading: false})
                });
            });
          }

        });
      });
  }

  render() {
    if (this.state.posts.length === 0) {
      return <div>Loading</div>
    }

    return (
      <div>
        <div className="home_slinder">
          <Slinder/>
        </div>
        <div className="super_container">
          <Header/>
          <div className="page_content">
            <div className="container">
              <div className="row row-lg-eq-height">
                <div className="col-lg-9">
                  <div className="main_content">
                    <PostsLatestSection posts={this.state.posts} />
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
      </div>
    );
  }
}
