import * as React from 'react';

import application from '../../../application';

import './style.css';
import './responsive.css';

const PostMetadata: React.StatelessComponent<Props> = (props) => {

  let date = new Date();
  if (props.post !== undefined && Object.keys(props.post).length > 0) {
    date = new Date(props.post.updateDate);
  }

  return (
    <>
      <div className="author_image">
        <div>
          <img src={ application.author_image } alt=""/>
        </div>
      </div>
      <div className="post_meta">
        <span className="author_name">{ application.author_name }</span>
        <span>{ date.toLocaleDateString() }</span>
      </div>
    </>
  );
}

interface Props {
  post: any;
}

export default PostMetadata;
