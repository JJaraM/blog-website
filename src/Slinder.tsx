import * as React from 'react';

import './bootstrap4/bootstrap.min.css'
import './plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import './plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import './plugins/OwlCarousel2-2.2.1/animate.css';
import './main_styles.css';
import './responsive.css';

import SlinderItems from './SlinderItems';
import SlinderNextItem from './SlinderNextItem';
import Post from './Post';


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
    const response = await fetch('https://blog-microservice-post.herokuapp.com/profiles', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    this.setState({posts: data, isLoading: false});
  }

  render() {
    return (

      <div className="home_slider_container">
        <div className="owl-carousel owl-theme home_slider">
          <SlinderItems data={this.state.posts}/>
        </div>
        <div className="custom_nav_container home_slider_nav_container">
          <div className="custom_prev custom_prev_home_slider">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               width="7px" height="12px" viewBox="0 0 7 12" enable-background="new 0 0 7 12" >
              <polyline fill="#FFFFFF" points="0,5.61 5.609,0 7,0 7,1.438 2.438,6 7,10.563 7,12 5.609,12 -0.002,6.39 "/>
            </svg>
          </div>
          <ul id="custom_dots" className="custom_dots custom_dots_home_slider">
            <SlinderNextItem data={this.state.posts}/>
          </ul>
          <div className="custom_next custom_next_home_slider">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               width="7px" height="12px" viewBox="0 0 7 12" enable-background="new 0 0 7 12" >
              <polyline fill="#FFFFFF" points="6.998,6.39 1.389,12 -0.002,12 -0.002,10.562 4.561,6 -0.002,1.438 -0.002,0 1.389,0 7,5.61 "/>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default Slinder;
