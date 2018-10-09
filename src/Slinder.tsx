import * as React from 'react';

import SlinderItems from './SlinderItems';
import Post from './Post';
import api from './api/post';

interface ProfileListProps {
}

interface ProfileListState {
  posts: Array<Post>;
  isLoading: boolean;
}

class Slinder extends React.Component<ProfileListProps, ProfileListState> {

  constructor(props: ProfileListProps) {
    super(props);
    this.state = {
      posts: [],
      isLoading: false
    };
  }


  async componentDidMount() {
    this.setState({isLoading: true});
    const response = await fetch(api.findLast);
    const data = await response.json();
    this.setState({posts: data, isLoading: false});
  }

  render() {
    return (
      <div className="home_slider_container">
        <div className="owl-carousel owl-theme owl-loaded">
          <div className="owl-stage-outer">
            <div className="owl-stage">
              <SlinderItems data={this.state.posts}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slinder;
