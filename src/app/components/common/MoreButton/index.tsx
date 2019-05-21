import * as React from 'react';

import './style.css'

const MoreButton: React.StatelessComponent<Props> = (props) => (
  <div className="entry-footer clearfix">
    <a className="readmore" onClick={props.onClick}>{props.title}</a>
    <div className="entry-footer-social"></div>
  </div>
)

interface Props {
  title: string;
  onClick: () => any,
}

export default MoreButton;
