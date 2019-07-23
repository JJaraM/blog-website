import * as React from 'react';
import './style.css';

const TagCloudLoading: React.StatelessComponent = (props) => {

  const Small = () => (
    <li className="tag-cloud-li">
      <a href="#" className="tag-cloud-loading shadow tag-cloud small">
        <div className="line" />
      </a>
    </li>
  );

  const Medium = () => (
    <li className="tag-cloud-li">
      <a href="#" className="tag-cloud-loading shadow tag-cloud medium">
        <div className="line" />
      </a>
    </li>
  );

  const Big = () => (
    <li className="tag-cloud-li">
      <a href="#" className="tag-cloud-loading shadow tag-cloud big">
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
      <Medium />
      <Small />
      <Medium />
      <Small />
      <Small />
      <Small />
      <Small />
      <Small />
      <Medium />
      <Small />
      <Big />
      <Small />
      <Medium />
      <Small />
      <Medium />
      <Small />
      <Small />
      <Small />
      <Small />
    </ul>
  );
}


export default TagCloudLoading;
