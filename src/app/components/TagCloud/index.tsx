import * as React from 'react';
import { Link } from "react-router-dom";
import TagCloudLoading from '../TagCloudLoading';

const TagCloud: React.StatelessComponent<Props> = (props) => {

  let Tags = () => <TagCloudLoading />;

  if (!props.tags) {
    Tags = props.tags.map((tag, i)  => (
      <li key={i}>
        <Link className="btn btn-white shadow" to={`category/${tag.id}`}>
          {tag.name}
        </Link>
      </li>
    ));
  }


  return (
    <aside className="jjara_container_what_say_people">
      <div className="mkdf-widget-title-holder">
        <span className="mkdf-widget-title-before"/>
        <h6 className="mkdf-widget-title">Tags</h6>
      </div>
      <div className="sidebar_section_content jjara_story_circle_container">
        <ul className="list-unstyled tag-list">
          <Tags />
        </ul>
      </div>
    </aside>
  );
}

interface Props {
  tags: any;
}

export default TagCloud;
