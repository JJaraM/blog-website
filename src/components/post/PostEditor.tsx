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

interface Props {
  id: string;
}

interface State {
  id: string;
  isLoading: boolean;
  post: Post;
  redirect: boolean;
}


class PostEditor extends React.Component<Props, State> {

  constructor(props:Props) {
    super(props);
    this.state = {
      id : '',
      isLoading: false,
      post: {} as Post,
      redirect: false
    }
  }

  async componentDidMount() {
    Prism.highlightAll()
    this.setState({isLoading: true, redirect: false});

    fetch(api.findById + this.props.id)
    .then(response => response.json())
    .catch(error => this.setState({redirect: true}))
    .then(data => this.setState({post: data, isLoading: false}));
  }

  componentDidUpdate () {
    Prism.highlightAll()
  }

  updateContent = (event) => {
    this.state.post.content = event.target.value;
    this.setState(this.state);
  }

  updateTitle = (event) => {
    this.state.post.title = event.target.value;
    this.setState(this.state);
  }

  updateImage = (event) => {
    this.state.post.image = event.target.value;
    this.setState(this.state);
  }

  render() {

    if (this.state != null && this.state.redirect) {
      return <Redirect to='/notFound'/>;
    }

    if (this.state === null || this.state.isLoading) {
      return <div>Loading</div>;
    }
    return (

      <div>
        <div className="home">
          <div className="home_background parallax-window" data-parallax="scroll" style={{backgroundImage: `url(${this.state.post.image})`}} data-speed="0.8"/>
          <div className="home_content">
            <div className="post_title">
              <input className="title-draft" value={this.state.post.image} onChange={this.updateImage} />
            </div>
            <div className="post_title">
              <input className="title-draft" value={this.state.post.title} onChange={this.updateTitle} />
            </div>
          </div>
        </div>
        <div className="page_content">
          <div className="container">
            <div className="row row-lg-eq-height">
              <div className="col-lg-12">
                <div className="post_content">
                  <div className="post_panel post_panel_top d-flex flex-row align-items-center justify-content-start">
                    <div className="author_image">
                      <div>
                        <img src="https://media.licdn.com/dms/image/C5603AQGg6FHWARek0w/profile-displayphoto-shrink_100_100/0?e=1544659200&v=beta&t=L9GH5HI2eDPaVHDmi1A-pJ_EBQVwUMRDayPCUEUaH9I" alt=""/>
                      </div>
                    </div>
                    <div className="post_meta"><a href="#">Jonathan Jara</a><span>Sep 29, 2017 at 9:48 am</span></div>
                    <div className="post_share ml-sm-auto">
                      <Link to={`/post/${this.state.post.id}`}>
                        <span>See Original</span>
                      </Link>
                      <Link to={`/post/${this.state.post.id}`}>
                        <span>Save Draft</span>
                      </Link>
                      <Link to={`/post/${this.state.post.id}`}>
                        <span>Publish</span>
                      </Link>
                      <Link to={`/post/${this.state.post.id}`}>
                        <span>Delete</span>
                      </Link>
                    </div>
                  </div>
                  <div className="post_body">

                  <div className="row">
                    <div className="col-lg-6">
                      <div className="section_title preview-editor">Editor</div>
                    </div>
                    <div className="col-lg-6">
                      <div className="section_title preview-editor">Preview</div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6">
                      <textarea className="comment-area" value={this.state.post.content}
                        onChange={this.updateContent}></textarea>
                    </div>
                    <div className="col-lg-6">
                      <Markdown source={this.state.post.content}/>
                    </div>
                  </div>

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

export default PostEditor;
