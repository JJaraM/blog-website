import * as React from 'react';
import ViewTags from '../ViewTags';
import SelectorLink from '../SelectorLink';
import './style.css';

const ListView: React.StatelessComponent<Props> = (props) => {

  const itemToRender = props.repos.map(repo => (
    <div className="card big-card">
      <div className="row">
        <div className="col-4">
          <div className="side-image">
            <SelectorLink itemRedirect={props.itemRedirect} id={repo.id}>
              <img className="_1xvs1" src={repo.image} />
            </SelectorLink>
          </div>
        </div>
        <div className="col-4">
          <div className="card-body">
            <div className="card-title card-title-small big-card-title">
              <SelectorLink itemRedirect={props.itemRedirect} id={repo.id}>
                {repo.title}
              </SelectorLink>
            </div>
            <p className="card-text big-card-text">
              {repo.description}
            </p>
          </div>
        </div>
        <div className="col-4 side-tags-container">
          <div className="side-tags">
            <ViewTags tags={props.tags} itemTags={repo.tags} />
          </div>
        </div>
      </div>
    </div>
  ));
  return itemToRender ;
}

interface Props {
  repos: any;
  tags: any;
  itemRedirect?: any;
}

export default ListView;
