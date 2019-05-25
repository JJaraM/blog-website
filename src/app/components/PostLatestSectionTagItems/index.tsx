import * as React from 'react';

import PostLatestSectionTagItemsLoading from '../PostLatestSectionTagItemsLoading';

const PostLatestSectionTagItems: React.StatelessComponent<Props> = (props) => {

  if (props.tags.length === 0) {
    return <PostLatestSectionTagItemsLoading />;
  }

  const Li = (tag) => (
    <li id={'tag-'+ tag.id} key={'tag-'+ tag.id} className={ props.selectedTag === tag.id ? "active" : ""}>
      <div className="tag-button" onClick={props.onClick(tag.id)}>{tag.name}</div>
    </li>
  )

  const firstList = props.tags.slice(0, 5).map(tag => (
    <Li {...tag} />
  ));

  const secondList = props.tags.slice(5).map(tag => (
    <Li {...tag} />
  ));

  return (
    <>
      <div id="tags-section" className="section_tags ml-auto">
        <ul>
          <Li {... { id: 0, name: 'all' }} />
          { firstList }
        </ul>
      </div>

      <div className="section_panel_more">
        <ul>
          <li>more
            <ul>
              { secondList }
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

interface Props {
  tags: Array<any>;
  selectedTag: number;
  onClick: (id: number) => any,
}

export default PostLatestSectionTagItems;
