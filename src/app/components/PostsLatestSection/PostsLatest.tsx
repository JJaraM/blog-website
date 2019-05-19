/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';

import api from '../../../api/post';
import Post from '../../../dto/Post';
import PostsLatestSection from './PostsLatestSection';
import PostLatestSectionTagItems from '../PostLatestSectionTagItems';
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
      isLoading: false,
      tag: 0
    };
  }
  
  readMore = () => {
    const div = document.getElementById("load_more");
    if (div !== null) {
      div.innerHTML = 'Loading...';
    }
    this.setState({isLoading: true});
    this.fetchPost(this.state.tag);

    pageNumber++;
  }

  populate = (data) => {
    if (data) {
      data.forEach((item) => array.push(item));
    }

    const div = document.getElementById("load_more");
    if (div !== null) {
      div.innerHTML = readMore;
    }

    if (array) {
      this.setState({posts: array, isLoading: false});
    } else {
      this.setState({isLoading: false});
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
    selectTag(tagId);
  }

  render() {
    return (
      <>
        <div className="blog_section">
          <div className="section_panel d-flex flex-row align-items-center justify-content-start">
            <div className="section_title_home">Latest Articles</div>
            <PostLatestSectionTagItems
              tags={this.props.tags}
              onClick={this.changeTag}
            />
          </div>
          <div className="section_content">
            <PostsLatestSection posts={this.state.posts} isLoading={this.state.isLoading} />
          </div>
        </div>
        <MoreButton
          title={readMore}
          onClick={this.readMore}
        />
      </>
    );
  }
}

interface State {
  posts: Array<Post>;
  isLoading: boolean;
  tag: number;
}

interface Props {
  tags: any
}
