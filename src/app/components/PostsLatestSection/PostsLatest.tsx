/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';

import api from '../../../api/post';
import Post from '../../../dto/Post';
import PostsLatestSection from './PostsLatestSection';
import ListView from "../ListView";
import PostLatestHeader from '../PostLatestHeader';
import { selectTag } from './actions';
import MoreButton from '../common/MoreButton';

let pageNumber: number = 0;
let array : Array<Post> = [];
const items: string = '/10';
const readMore = 'Read More';

/*
* Component used to render the index page
* @since 1.0
*/
export default class PostsLatest extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      posts: [],
      isLoadingPage: false,
      renderPosts: false,
      tag: 0,
      renderViewMode: this.getView(),
    };
  }

  getView() {
    let homeView = localStorage.getItem('homeView');
    if (homeView === null) {
      homeView = 'grid';
    }
    return homeView;
  }

  readMore = () => {
    const div = document.getElementById("load_more");
    if (div !== null) {
      div.innerHTML = 'Loading...';
    }
    pageNumber++;
    this.setState({isLoadingPage: true});
    this.fetchPost(this.state.tag);
  }

  populate = (data) => {
    if (data) {
      data.forEach((item) => array.push(item));
    }

    const div = document.getElementById("load_more");
    if (div !== null) {
      div.innerHTML = readMore;
    }

    if (array.length > 0) {
      this.setState({posts: array, isLoadingPage: false, renderPosts:true});
    } else {
      this.setState({isLoadingPage: false, renderPosts:true});
      pageNumber--;
    }
  }

  async componentDidMount() {
    this.setState({isLoadingPage: true});
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
    this.setState({ tag: tagId });
    this.fetchPost(tagId);
    selectTag(tagId);
  }

  changeView = (type:string) => (event: any) => {
    localStorage.setItem('homeView', type);
    this.setState({renderViewMode : type})
  }

  render() {
    let ButtonToRender = () => <React.Fragment />;
    if (this.state.posts.length > 0) {
      ButtonToRender = () => (
        <MoreButton
          title={readMore}
          onClick={this.readMore}
        />
      );
    }
    let Header = () => <></>
    if (this.props.header) {
      Header = () => (
        <PostLatestHeader
          changeView={this.changeView}
          tags={this.props.tags}
          changeTag={this.changeTag}
          selectedTag={this.state.tag}
          renderViewMode={this.state.renderViewMode}
        />
      )
    }

    let View = () => <PostsLatestSection
        posts={this.state.posts}
        tags={this.props.tags}
        view={this.state.renderViewMode}
        isLoading={!this.state.renderPosts}
      />;

    if (this.state.renderViewMode === 'list') {
      View = () => <ListView
        repos={this.state.posts}
        tags={this.props.tags}
        itemRedirect='post/view'
      />;
    }

    return (
      <div className="blog_section">
        <Header />
        <div className="section_content">
          <View />
        </div>
        <ButtonToRender />
      </div>
    );
  }
}

interface State {
  posts: Array<Post>;
  isLoadingPage: boolean;
  renderPosts: boolean;
  tag: number;
  renderViewMode: string;
}

interface Props {
  tags: any;
  header?: any;
}
