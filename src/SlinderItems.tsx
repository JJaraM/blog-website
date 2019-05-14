/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';

import { Link } from "react-router-dom";
import { Loading } from './components/common/Loading';
import { CircleAnimation } from './components/common/CircleAnimation';
import Particles from 'react-particles-js';
import Post from './dto/Post';

/*
 * Set of properties that needs the page to work.
 */
interface Props { posts: Array<Post>; tags: any; }

/*
 * State of the component
 */
interface State {selection: number; }

/*
 * Component used to display the slinder items.
 */
class SlinderItems extends React.Component<Props, State> {

  /*
   * Constructor of the component
   */
  constructor(props:Props) {
    super(props);
    this.initState();
    this.quickView = this.quickView.bind(this);
  }

  /*
   * Stablish the initial state of the component
   */
  initState() {
    this.state = {
      selection: 0
    }
  }

  /*
   * Select the item that will be displayed in the slinder
   */
  quickView(event: any) : void {
    const div = document.getElementById(event.target.id);
    if (div !== null) {
      const show = div.getAttribute('to-show');
      if (show !== null) {
        const selectionIndex = Number(show);
        this.setState({ selection: selectionIndex });
      }
    }
  }

  /*
   * Takes an array and transformer it as a map
   */
  tagsAsMap = () => {
    return this.props.tags.reduce(function(map, tag) {
        map[tag.id] = tag;
        return map;
    }, {});
  }

  /*
   * Render the post's tag
   */
  renderTag = (tagId:any) => {
    const result = this.tagsAsMap();
    const tag = result[tagId];

    if (result === null || tag === null || tag === undefined) {
      return <></>
    }

    return (
      <Link className="tag" to={`category/${tag.id}`}>
        {tag.name}
      </Link>
    );
  }

  /*
   * Render the post's tags, if there are not tags for the current post, then
   * nothing will be displayed
   */
  renderTags = () => {
    const tags = this.props.posts[this.state.selection].tags;
    if (tags === null || tags === undefined) {
      return <></>
    }
    return (
      tags.map((tag, tagId) => {
        return this.renderTag(tag);
      })
    )
  }

  renderSocialIcons = () => {
    return (
      <div className="social-icons">
          <a href=""><i className="fa fa-facebook-f"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-google"></i></a>
          <a href="#"><i className="fa fa-skype"></i></a>
          <a href="#"><i className="fa fa-linkedin-in"></i></a>
      </div>
    );
  }


  renderPostContent = () => {
    let letters = new Array();
    const title = this.props.posts[this.state.selection].title;
    if (title !== undefined && title !== null) {
      letters = title.split('');
    }

    return (
      <div className="home_slider_content">
        <div className="jjara-post-slinder-tags">
        { this.renderTags() }
        </div>
        <div className="home_slider_item_title">
          <Link to={`post/${this.props.posts[this.state.selection].id}`}>
            {
              letters.map((letter, index) => {
                let letterClass = "shake_letter";

                if (letter === ' ') {
                  letterClass = "shake_letter_space";
                }

                return (
                  <span className={letterClass} key={index}>{letter}</span>
                )
              })
            }
          </Link>
        </div>
        { this.renderSocialIcons() }
        <div className="home_slider_item_link">
          <Link to={`post/${this.props.posts[this.state.selection].id}`}>
            Continue Reading
            <svg version="1.1" id="link_arrow_1" x="0px" y="0px" width="19px" height="13px" viewBox="0 0 19 13">
              <polygon fill="#FFFFFF" points="12.475,0 11.061,0 17.081,6.021 0,6.021 0,7.021 17.038,7.021 11.06,13 12.474,13 18.974,6.5 "/>
            </svg>
          </Link>
        </div>
      </div>
    )
  }

  renderPostBackground = (post:any) => {
    let height = 366;
    let width = 366;
    let logoHeight = 206;

    if (window.screen.width <= 414) {
      height = 246;
      width = 246;
      logoHeight = 86;
    }

    if (post.image === null || post.image === '') {
      return (
        <CircleAnimation width={width} height={height} logoHeight={logoHeight}/>
      )
    }

    return (
      <>
        <div id={'image-' + post.id} className="home_slider_background home_background_mask" style={{backgroundImage: `url(${post.image})`}}/>

        <Particles
          params={{
            "particles": {
                "number": {
                    "value": 100
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
                    },
                    "resize": true
                }
            }
        }} />
      </>

    );
  }

  renderNextPostsCircle = () => {
    return (
      <div className="home_slider_image_section_container">
      {
        this.props.posts.map((post, index) => {
          return (
            <div className="home_slider_img_container" key={index}>

              <span className="home_slinder_img" style={{backgroundImage: `url(${post.image})`}}></span>
            </div>
          )
        })
      }

      </div>
      )
  }

  renderNextPosts = () => {
    return (
      <div className="d-flex flex-row align-items-end preview-items responsive-container">
        {
          this.props.posts.map((post, index) => {
            return (
              <div className="col-lg-3 col-md-6 similar_post_col post-quick-view" key={index}>
                <div className="box1 post-quick-shared">
                  <div className="similar_post trans_200">
                    <a href="#">
                      {post.title}
                    </a>
                  </div>
                </div>

                <div className="box2 post-quick-shared">
                  <div className="col-lg-6 post-quick-similar-post trans_200 post-quick-view-a">
                    <a id={'post-quick-'+ post.id} onClick={this.quickView} to-show={index} href="#">
                        Quick View
                    </a>
                  </div>

                  <div className="col-lg-6 post-quick-similar-post trans_200 post-quick-view-b">
                    <Link to={`post/${post.id}`}>
                      Read
                    </Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

  render() {

    if (this.props.posts.length === 0) {
      return (
          <div className="owl-item black-container">
              <div className="owl-slinder-center">
                  <Loading/>
              </div>
          </div>
      );
    }

    return (
      <div className="home_slinder">
      {
        <div className="owl-item" style={{display: 'inline' }}>
          {
            (() => {
              return this.renderPostBackground(this.props.posts[this.state.selection]);
            })()
          }
          <div className="overlay-slinder-panel"/>
          <div id='home_slider_content_container' className="home_slider_content_container">
            <div className="container">
              <div className="row">
                <div className="col">
                  { this.renderPostContent() }
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      <div className="similar_posts_container">
        <div className="container">
          { this.renderNextPosts() }
        </div>
      </div>
    </div>
    );
  }
}

export default SlinderItems;
