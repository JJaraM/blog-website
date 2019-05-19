import * as React from 'react';
import PostsLatest from '../../../components/post/PostsLatest';
import PostVideo from '../../../components/post/PostVideo';
import config from '../../../config';
interface Props { tags: any }

export class HomeMain extends React.Component<Props, any> {

  constructor(props:any) {
    super(props);
  }

  renderMainContentSelection = (section: any) => {
    let component = <></>;
    if (section.display) {
      switch(section.id) {
        case 'show_home_post_last':
          component = <PostsLatest tags={this.props.tags} />;
          break;
        case 'show_home_post_video':
          component = <PostVideo/>;
          break;
      }
    }
    return component;
  }

  render() {
    return (
      <div className="col-lg-9">
        <div className="main_content">
          {
            config.home_main_content.sort((a, b) => a.order - b.order).map((section, i) => {
              return (
                <div key={i}>
                  { this.renderMainContentSelection(section) }
                </div>
              );
            })
           }
          <div className="blog_section"></div>
        </div>
      </div>
    );
  }
}
