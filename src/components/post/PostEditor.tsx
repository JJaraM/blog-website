/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';
import * as Markdown from 'react-markdown';
import { Redirect } from 'react-router'
import { Link } from "react-router-dom";
import ReactTags from 'react-tag-autocomplete';

import Prism from 'prismjs';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import api from '../../api/post';
import apiTag from '../../api/tag';

import Post from '../../dto/Post';
import Tag from '../../dto/Tag';

import { Loading } from '../common/Loading';


import '../../react-tags.css';
import 'react-notifications/lib/notifications.css';
import '../common/custom-notifications.css';
import './postEdit.css';

interface State {
  id: string;
  isLoading: boolean;
  post: Post;
  tags: any;
  redirect: boolean;
  suggestions: any;
  postMount: boolean;
  tagMount: boolean;
}

class PostEditor extends React.Component<any, State> {

  constructor(props:any) {
    super(props);
    this.state = {
      id : this.props.match.params.id,
      isLoading: false,
      post: {} as Post,
      redirect: false,
      tags: [],
      suggestions: [],
      postMount: false,
      tagMount: false
    }
  }

  componentDidUpdate() {
    Prism.highlightAll();
    this.cleanBullets();
  }

  componentDidMount() {
    this.setState({isLoading: true, redirect: false, postMount: false, tagMount: false});
    this.fetchPost();
    this.fetchTags();
  }

  /*
   *
   */
  cleanBullets = () => {
    const a = document.getElementsByClassName('bullet');
    [].forEach.call(a, function(el) {
      console.log(el);
      el.innerHTML = el.innerHTML.replace(/&lt;&lt;/g, '');
      el.innerHTML = el.innerHTML.replace(/&gt;&gt;/g, '');
    });
  }

  fetchPost = () => {
    fetch(api.findById + this.props.match.params.id)
      .then(response => response.json())
      .catch(error => this.setState({redirect: true}))
      .then(data => this.setState({post: data, isLoading: false, postMount: true}));
  }

  fetchTags = () => {
    fetch(apiTag.findAll)
        .then(response => response.json())
        .catch(error => this.setState({redirect: true}))
        .then(data => this.setState({isLoading: false,  suggestions: data, tagMount: true}));
  }

  loadCurrentTags = () => {
    if (this.state.tagMount && this.state.postMount) {
      const result = this.state.suggestions.reduce(function(map, obj) {
          map[obj.id] = obj;
          return map;
      }, {});
      const tagsResult = new Array();
      if (this.state.post.tags !== null && this.state.post.tags !== undefined) {
        this.state.post.tags.map((post) => {
          tagsResult.push(result[post]);
        });
      }

      this.setState({tags: tagsResult});
      this.setState({tagMount: false, postMount: false});
    }
  }

  draft = () => {
    if (this.state.post.draftTitle === null) {
      NotificationManager.error("Title Required", "Error");
    } else {
      NotificationManager.success('Draft', 'Saving');
      this.httpPut('Draft');
    }

  }

  publish = () => {
    if (this.state.post.draftTitle === null) {
      NotificationManager.error("Title Required", "Error");
    } else {
      this.state.post.title = this.state.post.draftTitle;
      this.state.post.image = this.state.post.draftImage;
      this.state.post.content = this.state.post.draftContent;
    }
    this.httpPut('Publish');
  }

  handleDelete = (i:any) => {
    const tags = this.state.tags.slice(0);
    tags.splice(i, 1);
    this.setState({ tags });
    this.updatePostTags(tags);
  }

  updatePostTags = (tags:any) => {
    const array = new Array();
    tags.map((tag) => {
      const instance: Tag | null = tag;
      if (instance !== null) {
        array.push(instance!.id);
      }
    });
    this.state.post.tags = array;
  }

  handleAddition = (tagValue:any) => {
      const tags = [].concat(this.state.tags, tagValue)
      this.setState({ tags });
      this.updatePostTags(tags);
  }



  httpPut = (message:string) => {
    fetch(api.put  + this.state.post.id, {
        method: 'PUT',
        body: JSON.stringify(this.state.post),
        headers: {
            'Content-Type': 'application/json'
        }
      })
      .then(response => {
          if (response.status === 200) {
            NotificationManager.success(message, 'Saved');
          } else {
            NotificationManager.error(message, "Error");
          }
      })
      .catch(error => {
        NotificationManager.error(message, "Error");
      })
      .then(data => console.log(data));
  }

  updateContent = (event) => {
    this.state.post.draftContent = event.target.value;
    this.setState(this.state);
  }

  updateTitle = (event) => {
    this.state.post.draftTitle = event.target.value;
    this.setState(this.state);
  }

  updateImage = (event) => {
    this.state.post.draftImage = event.target.value;
    this.setState(this.state);
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
      );
    }

    this.loadCurrentTags();

    return (
      <div className="super_container">

        <div>
          <div className="home">
            <div className="home_background home_background_mask parallax-window" data-parallax="scroll" style={{backgroundImage: `url(${this.state.post.draftImage})`}} data-speed="0.8"/>
            <div className="home_content">
              <div className="post_title">
                <input className="title-draft" placeholder="Image" value={this.state.post.draftImage} onChange={this.updateImage} />
              </div>
              <div className="post_title">
                <input className="title-draft" placeholder="Title" value={this.state.post.draftTitle} onChange={this.updateTitle} />
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
                        <Link to={`/post/view/${this.state.post.id}`}>
                          <span>See Original</span>
                        </Link>
                        <span className="link-button" onClick={this.draft}>Save Draft</span>
                        <span className="link-button" onClick={this.publish}>Publish</span>
                        <Link to={`/post/view/${this.state.post.id}`}>
                          <span>Delete</span>
                        </Link>
                      </div>
                    </div>
                    <div className="post_body">
                      <div className="row">
                        <ReactTags
                         tags={this.state.tags}
                         suggestions={this.state.suggestions}
                         handleDelete={this.handleDelete}
                         handleAddition={this.handleAddition} />
                      </div>
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
                        <textarea className="comment-area" value={this.state.post.draftContent}
                          onChange={this.updateContent}></textarea>
                      </div>
                      <div className="col-lg-6">
                        <Markdown source={this.state.post.draftContent} escapeHtml={false}/>
                      </div>
                    </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>



          </div>
          {/*<div className="loader-popup-master">
            <div className="loader-popup">
              <div className="loader"></div>
              <span className="loader-span-save">Saved</span>
            </div>
          </div>
  */}
           <NotificationContainer/>
        </div>

      </div>

    );
  }
}

export default PostEditor;
