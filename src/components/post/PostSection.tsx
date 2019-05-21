/*
 * Copyright (c) Jonathan Jara Morales 2018
 * @since 1.0
 */
// Node imports
import * as React from 'react';
import * as Markdown from 'react-markdown';
import { Redirect } from 'react-router'
import { Link } from "react-router-dom";

// import OwlCarousel from 'react-owl-carousel2';

// Application Configurations
import apiPost from '../../api/post';
import apiTag from '../../api/tag';
import application from '../../application';

// Application DTO Objects
import Post from '../../dto/Post';
import Tag from '../../dto/Tag';

import PostComment from './PostComment';
// Custom Components
import { Loading } from '../common/Loading';
import { CircleAnimation } from '../common/CircleAnimation';

import Prism from 'prismjs';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-bash';

import '../../customPrism.js';
import '../../customPrism.css';
import '../prismjs/prism-comment.js';
import $ from 'jquery';

/*
 * Props interface, which consists of:
 * id: Corresponds with the post id
 * editable?: As optional argument which identifies if the post can be edit it
 */
interface Props {
  id: string;
  editable?: string;
}

/*
 * State of the component, which needs to be used to a proper use of the page, the arguemnts are:
 * isLoading: a boolean flag that is used to know if the page can be render now, or if the page
 *            needs to wait more time to display the information
 * post: a post object that contains the result from the call to the microservice.
 * tag: a object that contains the result from the call of the microservice when we need to popuplate
 *      all tags to associate with the post information
 * redirect: a boolean flag that indicates if the page needs to be redirected, this needs to be use
 * only when there is an error in the page or the post does not exists.
 */
interface State {
  isLoading: boolean;
  post: Post;
  extraPosts: Array<Post>;
  tags: Array<Tag>;
  redirect: boolean;
  render: boolean;
  isFromSearch: boolean;
}

/*
 * Page that will render the post when the user select which post want to see.
 */
class PostSection extends React.Component<Props, State> {

  constructor(props:Props) {
    super(props);
    /*this.state = {
      extraPosts: [],
      isLoading: false,
      post: {} as Post,
      tags: [],
      redirect: false,
      render: false,
      isFromSearch: false,
    }*/
    this.openComments = this.openComments.bind(this);
    this.changePost = this.changePost.bind(this);
  }

  openComments(event: any) : void {
    const div = document.getElementById("comments-section");
    const title = document.getElementById("comments-section-title");
    const commentContainer = document.getElementById("comment-container");

    if (div !== null) {
      const currentClassName = div.classList[1];
      if (currentClassName === 'comments_hide' || currentClassName === 'auto_hide_comments_absolute') {
        div.classList.remove('comments_hide');
        div.classList.remove('auto_hide_comments_absolute');
        div.classList.add('comments_show');
      } else {
        div.classList.remove('comments_show');
        div.classList.add('comments_hide');
      }
    }

    if (title !== null) {
      const currentClassName = title.classList[1];
      if (currentClassName === 'auto_hide_comments_close') {
        title.classList.remove('auto_hide_comments_close');
        title.classList.add('auto_hide_comments_open');
      } else {
        title.classList.remove('auto_hide_comments_open');
        title.classList.add('auto_hide_comments_close');
      }
    }

    if (commentContainer !== null) {
        const currentClassName = commentContainer.classList[1];
        if (currentClassName === null || currentClassName === undefined) {
          commentContainer.classList.add('auto_hide_comments_container_open');
        } else {
          commentContainer.classList.remove('auto_hide_comments_container_open');
        }
    }
  }

  /*
   * Mount the elements into the page when this is complete, the components
   * that will be mounted are the post information, and the tag information
   * and then will use the Prism library to highlight the code sections.
   */
  componentDidMount() {
    this.setState({isLoading: true, redirect: false, render: false, isFromSearch: false});
    this.fetchData();
    this.storeIp();
  }

  componentWillReceiveProps() {
    Prism.highlightAll();
    this.cleanBullets();
  }

  storeIp = () => {
    $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
      function(json) {
        console.log(json.ip);
      }
    );
  }

  fetchData = () => {
    this.fetchPost();
    this.fetchTags();
  }

  /*
   * Updates the highlight when the page is updated
   */
  componentDidUpdate() {


    if (this.state.post !== undefined && !this.state.render) {
      this.setState({render: true});
    }

    if (this.state !== undefined && this.state.post !== undefined) {
      const propsId = Number.parseInt(this.props.id, 0);
      const postId = Number.parseInt(this.state.post.id, 0);
      if (postId !== propsId && !this.state.isFromSearch) {
        this.setState({isFromSearch: true});
        this.fetchData();
      }
    }
  }

  cleanBullets = () => {
    const a = document.getElementsByClassName('bullet');
    [].forEach.call(a, function(el) {
      el.innerHTML = el.innerHTML.replace(/&lt;&lt;/g, '');
      el.innerHTML = el.innerHTML.replace(/&gt;&gt;/g, '');
      el.innerHTML = el.innerHTML.replace(/[/]/g, ''  );
    });
  }

  /*
   * Fetch the post information from the microservice
   */
  fetchPost = () => {
    fetch(apiPost.findById  + this.props.id)
      .then(response => response.json())
      .catch(error => this.setState({redirect: true}))
      .then(data => {
        this.setState({post: data, isLoading: false});
        Prism.highlightAll();
        this.cleanBullets();
        if (this.state.post.tags.length > 0) {
          this.fetchMorePosts(this.state.post.tags[0]);
        }
      });
  }

  fetchMorePosts = (tagId) => {
    fetch(apiPost.findLast  + "0/10/"+ tagId)
      .then(response => response.json())
      .catch(error => this.setState({redirect: true}))
      .then(data => {
        this.setState({extraPosts: data});
      });
  }

  /*
   * Fetch the tag information from the microservice
   */
  fetchTags = () => {
    fetch(apiTag.findAll).then(response => response.json()).then(data => this.setState({tags: data}));
  }

  /*
   * Takes the tags result from the asyn call and then creates a new mapTag
   * which will be used to extract the correct information according with the
   * result of the tags that we get from the microservice
   */
  tagsAsMap = () => {
    if (this.state.tags !== undefined) {
      return this.state.tags.reduce(function(map, tag) {
          map[tag.id] = tag;
          return map;
      }, {});
    }
    return [];
  }

  /*
   * Component that will makes a call to fetch the previous post
   */
  renderPrevPost = () => {
    return (
      <svg className="slinder-arrow-svg slinder-left-arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 7 12" enable-background="new 0 0 7 12">
        <polyline className ="slinder-arrow" fill="#bebebe" points="0,5.61 5.609,0 7,0 7,1.438 2.438,6 7,10.563 7,12 5.609,12 -0.002,6.39 "/>
      </svg>
    )
  }

  /*
   * Component that will makes a call to fetch next post
   */
  renderNextPost = () => {
    return (
      <svg className="slinder-arrow-svg slinder-right-arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 7 12" enable-background="new 0 0 7 12" >
        <polyline className ="slinder-arrow" fill="#bebebe" points="6.998,6.39 1.389,12 -0.002,12 -0.002,10.562 4.561,6 -0.002,1.438 -0.002,0 1.389,0 7,5.61 "></polyline>
      </svg>
    )
  }

  /*
   * Will render the background section in the post page, if there is not any
   * image in the post then we will display a css3 animation
   */
  renderPostBackground = (post:Post) => {
    if (post.image === null || post.image === '') {
      return (
        <CircleAnimation width={200} height={200} />
      )
    }
    return (
      <div className="home_background home_background_mask parallax-window" style={{backgroundImage: `url(${this.state.post.image})`}} />
    );
  }

  /*
   * Render the header section that contains the next post, prev post and background components
   */
  renderHeader = (post:Post) => {
    return (
      <div className="home">
        {this.renderPrevPost()}
        {this.renderNextPost()}
        {this.renderPostBackground(post)}
        <div className="home_content">
          <div className="post_title">{post.title}</div>
        </div>
      </div>
    )
  }

  /*
   * Render the post's tags
   */
  renderTags = (post:Post) => {
    const mapTags = this.tagsAsMap();

    if (post.tags === null || post.tags === undefined) {
      return (<div></div>)
    }

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
    )
  }

  /*
   * Render the editable link in case that the user has permissions to update
   * the current post
   */
  renderEditableLink = (post:Post) => {
    if (this.props.editable === "true") {
      return (
        <Link to={`/post/edit/${post.id}`}>
          <span>edit</span>
        </Link>
      )
    }
    return (
      <div/>
    );
  }

  /*
   * Render the items that we can be used to shared the post information
   */
  renderShareSection = () => {
    return (
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
    )
  }

  changePost = (value: Post) => (event: any) => {
    this.setState({post: value});
  }

  /*
   * Render the page when the result is complete, in case that the state indicates that is necessary to
   * redirect the page will redirect to the page not found, this could happens if there is any issue
   * getting the value from the webservices, in the other hand while this page is waiting to get the
   * post information, a loading component will be displayed to know that the page is loading the
   * specific section.
   */
  render() {


    if (this.state != null && this.state.redirect) {
      return <Redirect to='/notFound'/>;
    }

    if (this.state === null || this.state.isLoading) {
      return (
        <div className="home_slinder">
          <div className="home_slider_container">
            <div className="owl-carousel owl-theme owl-loaded">
              <div className="owl-stage-outer">
                <div className="owl-stage">
                  <div className="owl-item black-container">
                    <div className="owl-slinder-center">
                      <Loading/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }


    const date = new Date(this.state.post.createDate);

    /*const options = {
        items: 4,
        nav: false,
        rewind: true,
        autoplay: true,
        dots:false,
        navContainer: "custom"
    };

    const test = [
      {
        img: "https://cdn-images-1.medium.com/max/1600/1*OF0xEMkWBv-69zvmNs6RDQ.gif"
      },
      {
        img: "https://i.gifer.com/A8gJ.gif"
      },
      {
        img: "https://cdn-images-1.medium.com/max/2000/1*i0qclSPNcjj8cWOPr3wLxg.png"
      },
      {
        img: "http://static1.squarespace.com/static/593ad95da5790a81949b5613/596e36861b631b26f3e85655/5a4e791df9619a322dbdb99e/1545148198326/web+design.jpg?format=1500w"
      },
      {
        img: "https://cdn-images-1.medium.com/max/1600/1*OF0xEMkWBv-69zvmNs6RDQ.gif"
      },
      {
        img: "https://cdn-images-1.medium.com/max/2000/1*i0qclSPNcjj8cWOPr3wLxg.png"
      },
      {
        img: "http://static1.squarespace.com/static/593ad95da5790a81949b5613/596e36861b631b26f3e85655/5a4e791df9619a322dbdb99e/1545148198326/web+design.jpg?format=1500w"
      },
      {
        img: "https://cdn-images-1.medium.com/max/1600/1*OF0xEMkWBv-69zvmNs6RDQ.gif"
      }
    ]*/

    const style1 = {
      width: '1628px'
    }

    const style2 = {
      width: '232.5px'
    }

    let extraPostToRender = Array<Post>();
    if (this.state.extraPosts !== undefined && this.state.extraPosts.length > 0) {
      extraPostToRender = this.state.extraPosts;

    }

    return (
      <>
        {this.renderHeader(this.state.post)}



        <div className="page_content">

        <div className="auto_hide_comments_container" id="comment-container">
          <div className="auto_hide_comments auto_hide_comments_close" id="comments-section-title" onClick={this.openComments}>
            <i className="fa fa-comments-o" aria-hidden="true"></i>
          </div>
          <div className="content auto_hide_comments_absolute" id="comments-section">
            <PostComment />
          </div>
        </div>


          <div className="container">


            <div className="row row-lg-eq-height">


              <div className="col-lg-9">
                <div className="post_content">


                  <div className="post_panel post_panel_top d-flex flex-row align-items-center justify-content-start">
                    <div className="author_image">
                      <div>
                        <img src={application.author_image} alt=""/>
                      </div>
                    </div>
                    <div className="post_meta">
                      <a href="#">Jonathan Jara Morales</a>
                      <span> {date.toLocaleDateString()} </span>
                    </div>
                    <div className="post_share ml-sm-auto">
                      { this.renderEditableLink(this.state.post) }
                      <span>share</span>
                      { this.renderShareSection() }
                    </div>
                  </div>


                  <div className="post_body">
                    <Markdown source={this.state.post.content} escapeHtml={false}/>
                    {this.renderTags(this.state.post)}
                  </div>

                  <div className="similar_posts">
                    <div className="post_comment">
      								<div className="post_comment_title">Post Comment</div>
      								<div className="row">
      									<div className="col-xl-8">
      										<div className="post_comment_form_container">
    												<input type="text" className="comment_input comment_input_name" placeholder="Your Name"/>
    												<input type="email" className="comment_input comment_input_email" placeholder="Your Email" />
    												<textarea className="comment_text" placeholder="Your Comment"></textarea>
    												<button type="submit" className="comment_button">Post Comment</button>
      										</div>
      									</div>
      								</div>

                      {/*
                      <PostComment />
                      */}



      							</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="sidebar">
                  <div className="sidebar_background"></div>
                  <div className="sidebar_section">
                    <div className="sidebar_title_container">
                      <div className="mkdf-widget-title-holder">
                        <span className="mkdf-widget-title-before"/>
                        <h6 className="mkdf-widget-title">Latest Post</h6>
                      </div>
                    </div>




                    <div className="sidebar_section_content">
                       <div className="sidebar_slider_container">
                          <div className="owl-carousel owl-theme sidebar_slider_top owl-loaded owl-drag">
                             <div className="owl-stage-outer">
                                <div className="owl-stage" style={style1}>
                                   <div className="owl-item cloned" style={style2}>
                                      <div className="owl-item">

                                      {
                                        extraPostToRender.map((item, i) => {
                                          const dateExtraPost = new Date(item.createDate);
                                          return (
                                            <div className="side_post" key={i} onClick={this.changePost(item)}>
                                               <a href="#">
                                                  <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                     <div className="side_post_image">
                                                        <div className="side_post_override">
                                                           <img onClick={this.changePost(item)} src={item.image} alt=""/>
                                                       </div>
                                                     </div>
                                                     <div className="side_post_content">
                                                         <div className="side_post_title" onClick={this.changePost(item)}>
                                                             {item.title}
                                                         </div>
                                                        <small className="post_meta">
                                                          <span>{dateExtraPost.toLocaleDateString()}</span>

                                                        </small>
                                                     </div>
                                                  </div>
                                               </a>
                                            </div>
                                          )
                                        })
                                      }
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


          </div>

          {/*
          <div className="row recommended_post">

              <div className="col-lg-2  recommended_post_section_title_wrap">
                <div className="recommended_post_section_title">
                  <h1>Recommend Posts</h1>
                </div>
              </div>
              <div className="col-lg-10 recommended_post_carrousel">

                <OwlCarousel options={options}>
                {
                  test.map((video, videoId) => {
                    return (
                      <a href="#"  key={videoId}>

                        <div className="recommended_post_section" >
                          <img src={video.img} />
                          <div className="middle">
                            <div className="text">Chapter 1: Java Building Blocks</div>
                          </div>
                        </div>
                      </a>
                    )
                  })
                }
                </OwlCarousel>
              </div>

          </div>
  */}
        </div>


      </>
    );
  }
}

export default PostSection;
