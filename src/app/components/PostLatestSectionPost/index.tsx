import * as React from 'react';

class PostsLatestSectionPost extends React.Component {

  render() {
    return (
      <div className="section_panel d-flex flex-row align-items-center justify-content-start">
        <div className="section_title_home">Latest Articles</div>
        {/*<PostLatestSectionTagItems
          tags={this.props.tags}
          onClick={this.changeTag}
        />*/}
      </div>
    )
  }
}

export default PostsLatestSectionPost;
