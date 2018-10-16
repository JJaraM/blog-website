import * as React from 'react';

import PostEditor from './components/post/PostEditor';

import './bootstrap4/bootstrap.min.css'
import './plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import './plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import './plugins/OwlCarousel2-2.2.1/animate.css';
import './post.css';
import './post_responsive.css';
import './plugins/font-awesome-4.7.0/css/font-awesome.min.css';
import './postEdit.css';

export class PostEditorMain extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <div className="super_container">
        <PostEditor id ={this.props.match.params.id}/>
      </div>
    );
  }
}
