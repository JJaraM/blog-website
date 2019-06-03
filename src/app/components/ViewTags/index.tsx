import * as React from 'react';
import { Link } from "react-router-dom";

const ViewTags: React.StatelessComponent<Props> = (props) => {
  const tagAsMap = props.tags.reduce(function(map, tag) {
      map[tag.id] = tag;
      return map;
  }, {});

  let tags = () => <></>;

  if (tagAsMap !== undefined && props.itemTags !== undefined && props.itemTags !== null) {
    tags = props.itemTags.map(tag => {
      if (tagAsMap[tag] === undefined) {
        return <></>
      }
      return (
        <li className="post_tag" key={tag}>
          <Link to={`/category/${tag}`}>
            { tagAsMap[tag].name }
          </Link>
        </li>
      )
    });
  }

  return (
    <ul>
      { tags }
    </ul>
  );
}

interface Props {
  tags: any;
  itemTags: any;
}


export default ViewTags;
