import * as React from 'react';

import './style.css';

const PostLatestSectionTagItemsLoading: React.StatelessComponent = () => {

  return (
    <div id="tags-section" className="section_tags ml-auto tag-header-loading">
      <ul>
        <li className="post-selection-tags-loading tag-header small">
          <div className="line" />
        </li>
        <li className="post-selection-tags-loading tag-header medium">
          <div className="line" />
        </li>
        <li className="post-selection-tags-loading tag-header small">
          <div className="line" />
        </li>
        <li className="post-selection-tags-loading tag-header small">
          <div className="line" />
        </li>
        <li className="post-selection-tags-loading tag-header small">
          <div className="line" />
        </li>
      </ul>
    </div>
  );
}
export default PostLatestSectionTagItemsLoading;
