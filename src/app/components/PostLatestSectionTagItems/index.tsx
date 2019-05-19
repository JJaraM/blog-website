import * as React from 'react';

const PostLatestSectionTagItems: React.StatelessComponent<Props> = (props) => {

  const firstList = props.tags.slice(0, 5).map(tag => (
    <li id={'tag-'+ tag.id} key={'tag-'+ tag.id}>
      <div className="tag-button" onClick={props.onClick(tag.id)}>{tag.name}</div>
    </li>
  ));

  const secondList = props.tags.slice(5).map(tag => (
    <li id={'tag-'+ tag.id} key={'tag-'+ tag.id}>
      <div className="tag-button" onClick={props.onClick(tag.id)}>{tag.name}</div>
    </li>
  ));

  return (
    <>
      <div id="tags-section" className="section_tags ml-auto">
        <ul>
          <li id="tag-0" key="tag-0" className="active">
            <div className="tag-button" onClick={props.onClick(0)} >all</div>
          </li>
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
  tags: any;
  onClick: (id: number) => any,
}

export default PostLatestSectionTagItems;
