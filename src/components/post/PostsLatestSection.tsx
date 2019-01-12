import * as React from 'react';

import Post from '../../dto/Post';
import { Link } from "react-router-dom";
import Masonry from 'react-masonry-component';

interface ProfileListProps {
  posts: Array<Post>;
}

interface ProfileListState {
  posts: Array<Post>;
  isLoading: boolean;
  page: number;
}

const masonryOptions = {
    gutter: 20,
    transitionDuration: '0.8s'
};

class PostsLatestSection extends React.Component<ProfileListProps, ProfileListState> {

  constructor(props: ProfileListProps) {
    super(props);
    this.state = {
      posts: [],
      isLoading: false,
      page: 0
    };
  }

  load = () => {
    const pageNumber = this.state.page + 1;
    this.setState({page: pageNumber});
  }

  renderNoImage = (post:Post, key:number) => {
    const date = new Date(post.createDate);
    return (
      <div className="card card_default card_small_no_image grid-item" key={key}>
        <div className="card-body">
          <div className="card-title card-title-small">
            <Link to={`post/${post.id}`}>
              {post.title}
            </Link>
          </div>
          <small className="post_meta">
            <Link to={`post/${post.id}`}>
              Jonathan Jara Morales
            </Link>
            <span>{date.toLocaleDateString()}</span>
          </small>
        </div>
      </div>
    );
  }

  renderSpecial = (post:Post, key:number) => {
    const date = new Date(post.createDate);
    return (
      <div className="card card_default card_small_with_background grid-item" key={key}>
        <div className="card_background" style={{backgroundImage: `url(${post.image})`}}></div>
        <div className="card-body card-body-mask">
          <div className="card-title card-title-small">
            <Link to={`post/${post.id}`}>
              {post.title}
            </Link>
          </div>
          <small className="post_meta">
            <Link to={`post/${post.id}`}>
              Jonathan Jara Morales
            </Link>
            <span>{date.toLocaleDateString()}</span>
          </small>
        </div>
      </div>
    );
  }

  renderNoSpecial = (post:Post, key:number) => {
    const date = new Date(post.createDate);
    return (
      <div className="card card_small_with_image grid-item" key={key}>
        <img className="card-img-top" src={post.image} alt=""/>
        <div className="card-body">
          <div className="card-title card-title-small">
            <Link to={`post/${post.id}`}>
              {post.title}
            </Link>
          </div>
          <small className="post_meta">
            <Link to={`post/${post.id}`}>
              Jonathan Jara Morales
            </Link>
            <span>{date.toLocaleDateString()}</span>
          </small>
        </div>
      </div>
    );
  }


  render() {

    if (this.state.isLoading) {
      return (
        <div>Loading</div>
      );
    }
    
    let special = false;

    if (this.state.isLoading) {
      return (
        <div>Loading</div>
      );
    }

    return (
      <Masonry options={masonryOptions}>
        {
          this.props.posts.map((post, i) => {
            if (post.image === null || post.image === '') {
              return this.renderNoImage(post, i);
            }
            if (!special) {
              special = true;
              return this.renderSpecial(post, i);
            }
            return this.renderNoSpecial(post, i);
          })
        }
    </Masonry>
    );
  }
}

export default PostsLatestSection;
