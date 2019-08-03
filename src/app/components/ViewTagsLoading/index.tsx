import * as React from 'react';

const ViewTagsLoading: React.StatelessComponent = () => {

  const Small = () => (
    <li className="tag-cloud-li">
      <a href="#" className="tag-cloud-loading  tag-cloud small">
        <div className="line" />
      </a>
    </li>
  );

  const Medium = () => (
    <li className="tag-cloud-li">
      <a href="#" className="tag-cloud-loading tag-cloud medium">
        <div className="line" />
      </a>
    </li>
  );

  const Big = () => (
    <li className="tag-cloud-li">
      <a href="#" className="tag-cloud-loading tag-cloud big">
        <div className="line" />
      </a>
    </li>
  );

  return (
    <ul className="list-unstyled tag-list">
      <Small />
      <Medium />
      <Small />
      <Big />
      <Small />
    </ul>
  );
}


export default ViewTagsLoading;
