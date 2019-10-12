import * as React from 'react';

import application from '../../../application';

import './style.css';
import './responsive.css';

const PostMetadata: React.StatelessComponent<Props> = (props) => {

  let date = new Date();
  if (props.post !== undefined && Object.keys(props.post).length > 0) {
    date = new Date(props.post.updateDate);
  }

  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? 0 + minutes : minutes;
  const strTime = hours + ':' + minutes + ' ' + ampm;


  return (
    <>
      <div className="author_image">
        <div>
          <img src={ application.author_image } alt=""/>
        </div>
      </div>
      <div className="post_meta">
        <div className="row">
          <span className="author_name"><strong>By: </strong>{ application.author_name }</span>
        </div>
        <div className="row">
          <span><strong>When: </strong>
            { date.toLocaleDateString() } at { strTime }
          </span>
        </div>
        <div className="row">
          <span><strong>Views: </strong> { props.post.views }</span>
        </div>
      </div>
    </>
  );
}

interface Props {
  post: any;
}

export default PostMetadata;
