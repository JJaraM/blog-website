import * as React from 'react';

import apiTag from '../../api/tag';
import apiPost from '../../api/post';

import Post from '../../dto/Post';

import PostsLatestSection from '../../components/post/PostsLatestSection';


import '../../bootstrap4/bootstrap.min.css'
import '../../plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../../plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import '../../plugins/OwlCarousel2-2.2.1/animate.css';
import '../../post.css';
import '../../post_responsive.css';
import '../../plugins/font-awesome-4.7.0/css/font-awesome.min.css';

interface State {
  isLoading: boolean;
  tags: any;
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
    this.fetchPosts();
    this.fetchTags();
  }

  fetchTags = () => {
    fetch(apiTag.findAll).then(response => response.json()).then(data => this.setState({tags: data}));
  }

  /*
   * Fetch the tag information from the microservice
   */
  fetchPosts = () => {
    fetch(apiTag.byIds + this.props.match.params.id)
      .then(response => response.json())
      .then(data => {
        data.forEach((tag) => {
          if (tag.posts !== null) {
            tag.posts.forEach((postId) => {
              fetch(apiPost.findById + postId)
                .then(response => {
                  console.log(response)
                  if (response.status !== 200) {
                    return null;
                  }
                  return response.json();
                })
                .then(postData => {
                  if (postData !== null) {
                    this.state.posts.push(postData);
                  }

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

    const post = this.state.posts[0];
    const tag = this.state.tags.filter(el => Number(el.id) === Number(this.props.match.params.id))[0];

    console.log(tag);
    return (
      <>
        <div className="home">
          <div className="overlay-slinder-panel"/>
          <div className="home_background home_background_mask parallax-window" style={{backgroundImage: `url(${post.image})`}} />
          <div className="home_content">
            <div className="post_title">{tag.name}</div>
          </div>
        </div>
        <div className="super_container">

          <div className="page_content">
            <div className="container">
              <div className="row row-lg-eq-height">
                <div className="col-lg-9">
                  <div className="main_content">
                    <PostsLatestSection posts={this.state.posts} />
                    <div className="blog_section"></div>
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
        </div>
      </>
    );
  }
}
