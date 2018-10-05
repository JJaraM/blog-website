import * as React from 'react';

import './bootstrap4/bootstrap.min.css'
import './plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import './plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import './plugins/OwlCarousel2-2.2.1/animate.css';
import './main_styles.css';
import './responsive.css';

import SlinderItems from './SlinderItems';
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
    const response = await fetch('https://blog-microservice-post.herokuapp.com/profiles');
    const data = await response.json();
    console.log(data);
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
        <div className="owl-nav">
          <div className="owl-prev">prev</div>
          <div className="owl-next">next</div>
        </div>
        <div className="owl-dots">
          <div className="owl-dot active">aaaaaaa<span/></div>
          <div className="owl-dot"><span/></div>
          <div className="owl-dot"><span/></div>
        </div>
      </div>
    );
  }
}

export default Slinder;
