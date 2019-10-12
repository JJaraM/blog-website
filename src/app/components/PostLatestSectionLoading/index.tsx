import * as React from 'react';

import './style.css';

const PostLatestSectionLoading: React.StatelessComponent = () => {

  const PostSmall = () => (
    <div className="post small">
      <div className="line" />
    </div>
  );

  const PostBig= () => (
    <div className="post big">
      <div className="line" />
    </div>
  );

  return (
    <div className="row">
      <div className="col-4">
        <PostSmall />
        <PostSmall />
        <PostBig />
      </div>
      <div className="col-4">
        <PostBig />
        <PostSmall />
        <PostSmall />
      </div>
      <div className="col-4">
        <PostSmall />
        <PostBig />
        <PostSmall />
      </div>
    </div>
  );
}
export default PostLatestSectionLoading;
