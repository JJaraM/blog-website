import * as React from 'react';

import PostEditor from './PostEditor';
import './postEdit.css';

export class PostEditorMain extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <div className="super_container">
        <PostEditor id ={this.props.match.params.id}/>
      </div>
    );
  }
}
