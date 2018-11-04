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
}

let pageNumber: number = 0;
let array : Array<Post> = [];
const items: string = '/3';

/*
* Component used to render the index page
* @since 1.0
*/
export default class PostsLatest extends React.Component<any, State> {

  constructor(props: any) {
    super(props);
    this.initState();
    this.initRenderInfo();
  }

  initState = () => {
    this.state = {
      posts: [],
      isLoading: false,
      pageRender: false
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
    this.componentDidMount();
  }

  populate = (data) => {
    if (data !== null && data !== undefined) {
      data.forEach((item) => array.push(item));
    }

    const div = document.getElementById("load_more");
    if (div !== null) {
      div.innerHTML = 'Load More';
    }
    this.setState({posts: array, isLoading: false, pageRender:true});
  }

  async componentDidMount() {
    this.setState({isLoading: true});
    fetch(api.find + pageNumber + items)
      .then(response => response.json())
      .catch(error => console.log(error))
      .then(data => this.populate(data));
  }

  render() {
    if (!this.state.pageRender) {
      return <Loading />
    }

    return (
      <div>
        <div className="blog_section">
          <div className="section_panel d-flex flex-row align-items-center justify-content-start">
            <div className="section_title">Latest Articles</div>
          </div>
          <div className="section_content">
            <PostsLatestSection posts={this.state.posts} />
          </div>
        </div>

        <div className="load_more">
          <div id="load_more" className="load_more_button text-center trans_200" onClick={this.eventLoad}>
            Load More
          </div>
        </div>
      </div>
    );
  }
}
