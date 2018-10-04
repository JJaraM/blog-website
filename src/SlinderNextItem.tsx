import * as React from 'react';

import './bootstrap4/bootstrap.min.css'
import './plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import './plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import './plugins/OwlCarousel2-2.2.1/animate.css';
import './main_styles.css';
import './responsive.css';

import Post from './Post';

class SlinderNextItem extends React.Component<{data: Array<Post>}, any> {

  render() {
    return (
      this.props.data.map((post: Post) =>
        <li className="custom_dot custom_dot_home_slider" key={post.id}><span/></li>
      )
    );
  }
}

export default SlinderNextItem;
