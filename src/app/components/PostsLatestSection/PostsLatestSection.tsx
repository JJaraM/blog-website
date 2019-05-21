import * as React from 'react';

import Post from '../../../dto/Post';
import { Link } from "react-router-dom";
import Masonry from 'react-masonry-component';
import  PostLatestSectionLoading from '../PostLatestSectionLoading';

class PostsLatestSection extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      page: 0
    };
  }

  load = () => {
    const pageNumber = this.state.page + 1;
    this.setState({page: pageNumber});
  }

  renderNoImage = (post:Post, key:number) => {
    const date = new Date(post.createDate);
    const tags = this.renderTags(post);

    return (
      <div className="card card_default card_small_no_image grid-item" key={key}>
        <div className="card-body">
          <div className="card-title card-title-small">
            <Link to={`/post/view/${post.id}`}>
              {post.title}
            </Link>
          </div>
          <small className="post_meta">
            <Link to={`/post/view/${post.id}`}>
              Jonathan Jara Morales
            </Link>
            <span>{date.toLocaleDateString()}</span>
          </small>
          { tags }
        </div>
      </div>
    );
  }

  renderSpecial = (post:Post, key:number) => {
    const date = new Date(post.createDate);
    const tags = this.renderTags(post);
    return (
      <div className="card card_default card_small_with_background grid-item" key={key}>
        <div className="card_background" style={{backgroundImage: `url(${post.image})`}}></div>
        <div className="card-body card-body-mask">
          <div className="card-title card-title-small">
            <Link to={`/post/view/${post.id}`}>
              {post.title}
            </Link>
          </div>
          <small className="post_meta">
            <Link to={`/post/view/${post.id}`}>
              Jonathan Jara Morales
            </Link>
            <span>{date.toLocaleDateString()}</span>
          </small>
          { tags }
        </div>
      </div>
    );
  }

  renderNoSpecial = (post:Post, key:number) => {
    const date = new Date(post.createDate);
    const tags = this.renderTags(post);

    return (
      <div className="card card_small_with_image grid-item" key={key}>
        <img className="card-img-top" src={post.image} alt=""/>
        <div className="card-body">
          <div className="card-title card-title-small">
            <Link to={`/post/view/${post.id}`}>
              {post.title}
            </Link>
          </div>
          <small className="post_meta">
            <Link to={`/post/view/${post.id}`}>
              Jonathan Jara Morales
            </Link>
            <span>{date.toLocaleDateString()}</span>
          </small>
          { tags }
        </div>
      </div>
    );
  }

  renderTags = (post:Post) => {
    const mapTags = this.tagsAsMap();

    return (
      <div className="post_tags">
        <ul>
          {
            post.tags.map((tag, tagId) => {
              const result = mapTags[tag];
              if (result !== undefined) {
                return (
                  <li key={tagId} className="post_tag">
                    <Link to={`/category/${mapTags[tag].id}`}>
                      {mapTags[tag].name}
                    </Link>
                  </li>
                )
              }
              return null;
            })
          }
        </ul>
      </div>
    );
  }

  renderBig = (post:Post, key:number) => {
    const date = new Date(post.createDate);
    const tags = this.renderTags(post);

    return (
      <div className="card card_largest_with_image grid-item" key={key}>
        <Link to={`/post/view/${post.id}`}>
          <img className="card-img-top" src={post.image} alt=""/>
        </Link>
        <div className="card-body">
          <div className="card-title ">
            <Link to={`/post/view/${post.id}`}>
              {post.title}
            </Link>
          </div>

          <p className="card-text">
            {/* briefDescription */}
          </p>
          <small className="post_meta">
            <Link to={`/post/view/${post.id}`}>
              Jonathan Jara Morales
            </Link>
            <span>{date.toLocaleDateString()}</span>
          </small>
          { tags }
        </div>
      </div>
    );
  }

  tagsAsMap = () => {
    if (this.props.tags !== undefined) {
      return this.props.tags.reduce(function(map, tag) {
          map[tag.id] = tag;
          return map;
      }, {});
    }
    return [];
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div className="skeleton-container">
          <PostLatestSectionLoading />
        </div>
      );
    }

    let special = false;
    const maxRepetitions = 5;
    let repetitions = 0;


    return (
      <Masonry options={masonryOptions}>
        {
          this.props.posts.map((post, i) => {
            if (post.image === null || post.image === '') {
              return this.renderNoImage(post, i);
            }
            if (!special) {
              special = true;
              repetitions += 1;
              return this.renderSpecial(post, i);
            }
            special = false;
            if (maxRepetitions === repetitions) {
              repetitions = 0;
              return this.renderBig(post, i);
            }

            return this.renderNoSpecial(post, i);
          })
        }
    </Masonry>
    );
  }
}

interface Props {
  posts: Array<Post>;
  tags: Array<any>;
  isLoading: boolean;
}

interface State {
  page: number;
}

const masonryOptions = {
  gutter: 20,
  transitionDuration: '0.8s'
};

export default PostsLatestSection;
