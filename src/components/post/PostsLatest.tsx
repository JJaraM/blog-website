/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';

import api from '../../api/post';
import Post from '../../dto/Post';

import PostsLatestSection from '../../components/post/PostsLatestSection';

import { Loading } from '../../components/common/Loading';

interface State {
  posts: Array<Post>;
  isLoading: boolean;
  pageRender: boolean;
  tag: number;
}

interface Props { tags: any }

let pageNumber: number = 0;
let array : Array<Post> = [];
const items: string = '/5';

/*
* Component used to render the index page
* @since 1.0
*/
export default class PostsLatest extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);
    this.initState();
    this.initRenderInfo();
  }

  initState = () => {
    this.state = {
      posts: [],
      isLoading: false,
      pageRender: false,
      tag: 0
    };
  }

  initRenderInfo = () => {
    array = [];
    pageNumber = 0;
  }

  eventLoad = () => {
    const div = document.getElementById("load_more");
    if (div !== null) {
      div.innerHTML = 'Loading...';
    }
    pageNumber++;
    this.setState({isLoading: true});
    this.fetchPost(this.state.tag);
  }

  populate = (data) => {
    if (data !== null && data !== undefined && data.length > 0 ) {
      data.forEach((item) => array.push(item));
    }

    const div = document.getElementById("load_more");
    if (div !== null) {
      div.innerHTML = 'Read More';
    }

    if (array.length > 0) {
      this.setState({posts: array, isLoading: false, pageRender:true});
    } else {
      this.setState({isLoading: false, pageRender:true});
      pageNumber--;
    }
  }

  async componentDidMount() {
    this.setState({isLoading: true});
    this.fetchPost(this.state.tag);
  }

  fetchPost = (tagId:number) => {
    const endPoint = api.find + pageNumber + items + "/" + tagId;
    fetch(endPoint)
      .then(response => response.json())
      .catch(error => console.log(error))
      .then(data => this.populate(data));
  }

  changeTag = (tagId:number) => (event: any) => {
      pageNumber = 0;
      array = [];
      this.setState({tag: tagId});
      this.fetchPost(tagId);
      this.selectTab(tagId);
  }

  selectTab = (tagId:number) => {
    const tagSection = document.getElementById('tags-section');
    if (tagSection !== null) {
      const li = tagSection.getElementsByTagName("li");
      Array.prototype.forEach.call(li, function (item) {
        const id = Number(item.id.replace('tag-', ''));
        if (id === tagId) {
          item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
      });
    }
  }

  renderTags = () => {
    const firstSetOfTags = this.props.tags.slice(0, 5);
    const secondSetOfTags = this.props.tags.slice(5);

    if (this.props.tags.length === 0) {
      return (
        <div id="tags-section" className="section_tags ml-auto">
          <ul>
            <li>
              <div className="tag-button">
                Loading...
              </div>
            </li>

          </ul>
        </div>
      )
    }

    return (
      <>
        <div id="tags-section" className="section_tags ml-auto">
          <ul>
            <li id="tag-0" key="tag-0" className="active">
              <div className="tag-button"  onClick={this.changeTag(0)} >all</div>
            </li>
            {
              firstSetOfTags.map((tag, tagId) => {
                return (
                  <li id={'tag-'+ tag.id} key={'tag-'+ tag.id}>
                    <div className="tag-button" onClick={this.changeTag(tag.id)}>{tag.name}</div>
                  </li>
                );
              })
            }
          </ul>
        </div>

        <div className="section_panel_more">
          <ul>
            <li>more
              <ul>
              {
                secondSetOfTags.map((tag, tagId) => {
                  return (<li key={tag.id}><div className="tag-button" onClick={this.changeTag(tag.id)}>{tag.name}</div></li>);
                })
              }
              </ul>
            </li>
          </ul>
        </div>
      </>
    );
  }

  render() {
    if (!this.state.pageRender) {
      return <Loading />
    }
    return (
      <>
        <div className="blog_section">
          <div className="section_panel d-flex flex-row align-items-center justify-content-start">
            <div className="section_title_home">Latest Articles</div>
            {this.renderTags()}
          </div>
          <div className="section_content">
            <PostsLatestSection posts={this.state.posts} />
          </div>
        </div>
        <div className="entry-footer clearfix">
           <a className="readmore" onClick={this.eventLoad}>read more</a>
           <div className="entry-footer-social"></div>
        </div>
      </>
    );
  }
}
