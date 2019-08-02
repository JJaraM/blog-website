import * as React from 'react';

import './style.css';

const ListViewLoading: React.StatelessComponent = () => {
  const PostBig= () => (
    <div className="col-12">
      <div className="post list-big">
        <div className="post-view-list-line" />
      </div>
    </div>
  );

  return (
    <div className="row">
      <PostBig />
      <PostBig />
      <PostBig />
      <PostBig />
      <PostBig />
    </div>
  );
}
export default ListViewLoading;
