import * as React from 'react';


import Post from './dto/Post';

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
