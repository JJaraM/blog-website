import * as React from 'react';
import PostLatestSectionTagItems from '../PostLatestSectionTagItems';
import './style.css';

const PostLatestHeader: React.StatelessComponent<Props> = (props) => {
  const gridDisable = props.renderViewMode === 'grid' ? '' : 'disable';
  const listDisable = props.renderViewMode === 'list' ? '' : 'disable';

  return (
    <div className="section_panel d-flex flex-row align-items-center justify-content-start">
      <div className="section_title_home">Latest Articles</div>
      <div className="views">
        <i id='grid-view' className={`fa fa-th ${gridDisable}`} aria-hidden="true" onClick={props.changeView('grid')} />
        <i id='list-view' className={`fa fa-th-list ${listDisable}`} aria-hidden="true" onClick={props.changeView('list')}/>
      </div>
      <PostLatestSectionTagItems
        tags={props.tags}
        onClick={props.changeTag}
        selectedTag={props.selectedTag}
      />
    </div>
  );
}

interface Props {
  tags: Array<any>;
  changeTag: (id: number) => any,
  changeView: (type: string) => any,
  selectedTag: number;
  renderViewMode: string;
}

export default PostLatestHeader;
