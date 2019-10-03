import * as React from 'react';
import { Link } from "react-router-dom";
import TagCloudLoading from '../TagCloudLoading';

const TagCloud: React.StatelessComponent<Props> = (props) => {

  const PrincipalContainer = (containerProps) => (
    <aside className="jjara_container_what_say_people">
      <div className="mkdf-widget-title-holder">
        <span className="mkdf-widget-title-before"/>
        <h6 className="mkdf-widget-title">Tags</h6>
      </div>
      <div className="sidebar_section_content jjara_story_circle_container">
        <ul className="list-unstyled tag-list">
          { containerProps.children }
        </ul>
      </div>
    </aside>
  );

  if (props.tags.length === 0) {
    return (
      <PrincipalContainer>
        <TagCloudLoading />
      </PrincipalContainer>
    );
  }


  const tags = props.tags.map((tag, i)  => (
      <li key={i}>
        <Link className="btn btn-white shadow" to={`/category/${tag.id}`}>
          {tag.name}
        </Link>
      </li>
  ));


  return (
    <PrincipalContainer>
      { tags }
    </ PrincipalContainer>
  );
}

interface Props {
  tags: any;
}

export default TagCloud;
