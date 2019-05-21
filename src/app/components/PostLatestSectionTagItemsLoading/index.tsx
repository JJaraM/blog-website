import * as React from 'react';
import './style.css';

const PostLatestSectionTagItemsLoading: React.StatelessComponent = () => {

  const HomeTagLastestItem = (props) => (
    <li className={`post-selection-tags-loading tag-header ${props.className}`}>
      <div className="line-tag" />
    </li>
  )

  return (
    <div id="tags-section" className="section_tags ml-auto tag-header-loading">
      <ul>
        <HomeTagLastestItem className={"small"}/>
        <HomeTagLastestItem className={"medium"}/>
        <HomeTagLastestItem className={"small"}/>
        <HomeTagLastestItem className={"small"}/>
        <HomeTagLastestItem className={"small"}/>
      </ul>
    </div>
  );
}
export default PostLatestSectionTagItemsLoading;
