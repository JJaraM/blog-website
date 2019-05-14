import * as React from 'react';

import PostSection from '../post/PostSection';



import '../../bootstrap4/bootstrap.min.css'
import '../../plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../../plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import '../../plugins/OwlCarousel2-2.2.1/animate.css';
import '../../post.css';
import '../../post_responsive.css';
import '../../plugins/font-awesome-4.7.0/css/font-awesome.min.css';
import '../../prism-okaida.css';

export class PostMain extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <>
        <PostSection id={this.props.match.params.id} editable={this.props.match.params.editable}/>
      </>
    );
  }
}
