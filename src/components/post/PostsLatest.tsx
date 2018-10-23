import * as React from 'react';

import api from '../../api/post';
import Post from '../../dto/Post';
import PostsLatestSection from '../../components/post/PostsLatestSection';

interface ProfileListProps {
}

interface ProfileListState {
  posts: Array<Post>;
  isLoading: boolean;
}

let pageNumber = 0;
const array : Array<Post> = [];

class PostsLatest extends React.Component<ProfileListProps, ProfileListState> {

  constructor(props: ProfileListProps) {
    super(props);
    this.state = {
      posts: [],
      isLoading: false
    };
  }

  load = () => {
    const div = document.getElementById("load_more");
    if (div !== null) {
      div.innerHTML = 'Loading...';
    }
    pageNumber++;

    console.log(pageNumber);
    this.componentDidMount();
  }

  async componentDidMount() {

    this.setState({isLoading: true});
    const response = await fetch(api.find + pageNumber + '/3');
    const data = await response.json();

    data.forEach((item) => {
      array.push(item);
    });

    const div = document.getElementById("load_more");
    if (div !== null) {
      div.innerHTML = 'Load More';
    }

    this.setState({posts: array, isLoading: false});
  }

  render() {


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
          <div id="load_more" className="load_more_button text-center trans_200" onClick={this.load}>
            Load More
          </div>
        </div>
      </div>
    );
  }
}

export default PostsLatest;
