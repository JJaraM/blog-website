import * as React from 'react';

import api from '../../api/post';
import Post from '../../Post';
import * as Markdown from 'react-markdown';
import Prism from 'prismjs';

interface Props {
  id: string;
}

interface State {
  id: string;
  isLoading: boolean;
  post: Post;
}


class PostSection extends React.Component<Props, State> {

  constructor(props:Props) {
    super(props);

  }

  async componentDidMount() {
    console.log('id' + this.props.id);

    Prism.highlightAll()
    this.setState({isLoading: true});
    const response = await fetch(api.findById + this.props.id);
    const data = await response.json();

    this.setState({post: data, isLoading: false});
  }

  componentDidUpdate () {
    Prism.highlightAll()
  }

  render() {

    if (this.state === null || this.state.isLoading) {
      return <div>Loading</div>;
    }
    return (

      <div>
        <div className="home">
          <div className="home_background parallax-window" data-parallax="scroll" style={{backgroundImage: `url(${this.state.post.image})`}} data-speed="0.8"/>
          <div className="home_content">
            <div className="post_category trans_200"><a href="category.html" className="trans_200">sport</a></div>
            <div className="post_title">{this.state.post.title}</div>
          </div>
        </div>
        <div className="page_content">
          <div className="container">
            <div className="row row-lg-eq-height">
              <div className="col-lg-9">
                <div className="post_content">
                  <div className="post_panel post_panel_top d-flex flex-row align-items-center justify-content-start">
                    <div className="author_image">
                      <div>
                        <img src="https://media.licdn.com/dms/image/C5603AQGg6FHWARek0w/profile-displayphoto-shrink_100_100/0?e=1544659200&v=beta&t=L9GH5HI2eDPaVHDmi1A-pJ_EBQVwUMRDayPCUEUaH9I" alt=""/>
                      </div>
                    </div>
                    <div className="post_meta"><a href="#">Jonathan Jara</a><span>Sep 29, 2017 at 9:48 am</span></div>
                    <div className="post_share ml-sm-auto">
                      <span>share</span>
                      <ul className="post_share_list">
                        <li className="post_share_item">
                          <a href="#">
                            <i className="fa fa-facebook" aria-hidden="true"/>
                          </a>
                        </li>
                        <li className="post_share_item">
                          <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true"/>
                          </a>
                        </li>
                        <li className="post_share_item">
                          <a href="#">
                            <i className="fa fa-google" aria-hidden="true"/>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="post_body">
                    <Markdown source={this.state.post.content}/>

                    <div className="post_tags">
                      <ul>
                        <li className="post_tag"><a href="#">Liberty</a></li>
                        <li className="post_tag"><a href="#">Manual</a></li>
                        <li className="post_tag"><a href="#">Interpretation</a></li>
                        <li className="post_tag"><a href="#">Recommendation</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostSection;
