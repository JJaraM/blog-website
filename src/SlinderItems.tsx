import * as React from 'react';

import { Link } from "react-router-dom";
import { Loading } from './components/common/Loading';
import { CircleAnimation } from './components/common/CircleAnimation';
import Particles from 'react-particles-js';

import Post from './dto/Post';
import Tag from './dto/Tag';
import apiTag from './api/tag';

interface ProfileListProps { data: Array<Post>; }
interface ProfileListState { hide: 'false'; tags: any; }
interface PostSlinder { current: Post; next: Post; id: string; tags: Array<Tag>; }

class SlinderItems extends React.Component<ProfileListProps, ProfileListState> {

  constructor(props:ProfileListProps) {
    super(props);
  }

  async componentDidMount() {
    this.fetchTags();
  }

  fetchTags = () => {
    fetch(apiTag.findAll).then(response => response.json()).then(data => this.setState({tags: data}));
  }

  handleChange(event: any) : void {
    const div = document.getElementById(event.target.id);

    if (div !== null) {
      const hide = div.getAttribute('to-hide');
      if (hide !== null) {
        const divHide = document.getElementById('owl-' + hide);
        if (divHide !== null) {
          divHide.style.display = 'none';
        }
      }

      const show = div.getAttribute('to-show');
      if (show !== null) {
        const divShow = document.getElementById('owl-' + show);
        if (divShow !== null) {
          divShow.style.display = 'inline';
        }
      }
    }
  }

  tagsAsMap = () => {
    return this.state.tags.reduce(function(map, tag) {
        map[tag.id] = tag;
        return map;
    }, {});
  }

  buildPostSlinder = () => {
    const array : Array<PostSlinder> = [];
    const size = this.props.data.length - 1;
    let nextItem = 0;
    const result = this.tagsAsMap();

    this.props.data.forEach((item, index) => {
      if (size !== index) {
        nextItem = nextItem + 1;
      } else if (size === index) {
        nextItem = 0;
      }

      const postSlinder : PostSlinder = {
        current : this.props.data[index],
        next : this.props.data[nextItem],
        id: String(index),
        tags: []
      };

      const tags = new Array<Tag>();

      if (postSlinder.current.tags !== null) {
        postSlinder.current.tags.forEach((tagId) => {
          tags.push(result[tagId]);
        });
        postSlinder.tags = tags;
        array.push(postSlinder);
      }

    });
    return array;
  }

  getPostSlinder() {
    let array : Array<PostSlinder> = [];
    if (this.state !== null && this.state.tags !== null) {
      array = this.buildPostSlinder();
    }
    return array;
  }

  renderTags = (tag:any, tagId:any) => {
    return (
      <div className="home_slider_item_category trans_200" key={tagId}>
        <Link className="trans_200" to={`category/${tag.id}`}>
          {tag.name}
        </Link>
      </div>
    );
  }

  renderCircle = (post:any, postIt:any) => {
    let height = 366;
    let width = 366;
    let logoHeight = 206;

    if ( window.screen.width <= 414) {
      height = 246;
      width = 246;
      logoHeight = 86;
    }

    if (post.current.image === null || post.current.image === '') {
      return (
        <CircleAnimation width={width} height={height} logoHeight={logoHeight}/>
      )
    }
    return (
      <div id={'image-' + post.current.id} className="home_slider_background home_background_mask" style={{backgroundImage: `url(${post.current.image})`}}/>
    );
  }

  render() {
    const slinderItems = this.getPostSlinder();

    if (slinderItems.length === 0) {
      return (
          <div className="owl-item black-container">
              <div className="owl-slinder-center">
                  <Loading/>
              </div>
          </div>
      );
    }

    return (
      <div>
        <div className="home_slinder">
          {
            slinderItems.map((post, postIt) =>
              <div key = {post.current.id}  className="owl-item" id={'owl-' + post.current.id}  style={{display: postIt === 0 ? 'inline': 'none' }}>
                {
                  (() => {
                    return this.renderCircle(post, postIt);
                  })()
                }

                <Particles
                  params={{
              	    "particles": {
              	        "number": {
              	            "value": 50
              	        },
              	        "size": {
              	            "value": 3
              	        }
              	    },
              	    "interactivity": {
              	        "events": {
              	            "onhover": {
              	                "enable": true,
              	                "mode": "repulse"
              	            }
              	        }
              	    }
              	}} />
                
                <div className="overlay-slinder-panel"/>


                <div id={'home_slider_content_container'} className="home_slider_content_container">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="home_slider_content">
    	                    <div className="row">
                            {
                              post.tags.map((tag, tagId) => {
                                return this.renderTags(tag, tagId);
                              })
                            }
                          </div>
                          <div className="home_slider_item_title">
                            <Link to={`post/${post.current.id}`}>
                              {post.current.title}
                            </Link>
                          </div>
                          <div className="home_slider_item_link">
                            <Link to={`post/${post.current.id}`}>Continue Reading
                              <svg version="1.1" id="link_arrow_1" x="0px" y="0px" width="19px" height="13px" viewBox="0 0 19 13">
                                <polygon fill="#FFFFFF" points="12.475,0 11.061,0 17.081,6.021 0,6.021 0,7.021 17.038,7.021 11.06,13 12.474,13 18.974,6.5 "/>
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
      </div>
        {
          slinderItems.map((post, postIt) => {
            return (
              <div key={postIt}>
                {
                  <div className="similar_posts_container">
                    <div className="container">
                        <div className="d-flex flex-row align-items-end preview-items responsive-container">
                          {
                            slinderItems.map((answer, i) => {
                              return (
                                <div className="col-lg-3 col-md-6 similar_post_col post-quick-view" key ={i}>
                                  <div className="box1 post-quick-shared">
                                    <div className="similar_post trans_200">
                                      <a href="#">
                                        {answer.current.title}
                                      </a>
                                    </div>
                                  </div>

                                  <div className="box2 post-quick-shared">
                                    <div className="col-lg-6 post-quick-similar-post trans_200 post-quick-view-a">
                                      <a id={'post-quick-'+ answer.current.id}
                                        to-show={answer.current.id}
                                        to-hide={post.current.id}
                                        onClick={this.handleChange} href="#">
                                        Quick View
                                      </a>
                                    </div>

                                    <div className="col-lg-6 post-quick-similar-post trans_200 post-quick-view-b">
                                      <Link to={`post/${answer.current.id}`}>
                                        Read
                                      </Link>
                                  </div>
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                }
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default SlinderItems;
