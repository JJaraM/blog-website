import * as React from 'react';

import { Link } from "react-router-dom";
import Post from './dto/Post';
import { Loading } from './components/common/Loading';
import { CircleAnimation } from './components/common/CircleAnimation';

interface ProfileListProps {
  data: Array<Post>;
}

interface ProfileListState {
  hide: 'false';
}

interface PostSlinder {
  current: Post;
  next: Post;
  id: string;
}

class SlinderItems extends React.Component<ProfileListProps, ProfileListState> {

  constructor(props:ProfileListProps) {
    super(props);
  }

  handleChange(event: any) : void {



    const div = document.getElementById(event.target.id);

    if (div !== null) {

      const toHide = div.getAttribute('to-hide');
      if (toHide !== null) {
        const divHide = document.getElementById('owl-'+toHide);
        if (divHide !== null) {
          divHide.style.display = 'none';
        }
      }



      const toShow = div.getAttribute('to-show');

      if (toShow !== null) {
        const divShow = document.getElementById('owl-'+toShow);
        if (divShow !== null) {
          divShow.style.display = 'inline';
        }
      }

    }
  }

  getPostSlinder() {
    const array : Array<PostSlinder> = [];
    const size = this.props.data.length - 1;
    let nextItem = 0;

    this.props.data.forEach((item, index) => {
      if (size !== index) {
        nextItem = nextItem + 1;
      } else if (size === index) {
        nextItem = 0;
      }
      const postSlinder : PostSlinder = {
        current : this.props.data[index],
        next : this.props.data[nextItem],
        id: String(index)
      };
      array.push(postSlinder);
    });
    return array;
  }

  render() {

    let height = 366;
    let width = 366;
    let logoHeight = 206;

    if ( window.screen.width <= 414) {
      height = 246;
      width = 246;
      logoHeight = 86;
    }

    const array = this.getPostSlinder();

    if (array.length === 0) {
      return (
        <Loading/>
      );
    }

    return (
      <div>
        <div className="home_slinder">
          {
            array.map((post, postIt) =>

            <div key = {post.current.id}  className="owl-item" id={'owl-' + post.current.id}  style={{display: postIt === 0 ? 'inline': 'none' }}>


              {
                (() => {
                  if (post.current.image === null || post.current.image === '') {
                    return (
                      // 160
                      <CircleAnimation width={width} height={height} logoHeight={logoHeight}/>
                    )
                  }
                  return (
                    <div id={'image-' + post.current.id} className="home_slider_background home_background_mask" style={{backgroundImage: `url(${post.current.image})`}}/>
                  );
                })()
              }

              <div id={'home_slider_content_container'} className="home_slider_content_container">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="home_slider_content">

                        <div className="home_slider_item_category trans_200">
                          <a href="#" className="trans_200">sport</a>
                        </div>

                        <div className="home_slider_item_title">
                          <Link to={`post/${post.current.id}`}>
                            {post.current.title}
                          </Link>
                      </div>
                      <div className="home_slider_item_link">
                        <Link to={`post/${post.current.id}`}>Continue Reading
                        <svg version="1.1" id="link_arrow_1" x="0px" y="0px" width="19px" height="13px" viewBox="0 0 19 13">
                          <polygon fill="#FFFFFF" points="12.475,0 11.061,0 17.081,6.021 0,6.021 0,7.021 17.038,7.021 11.06,13 12.474,13 18.974,6.5 "/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>




        </div>
      )
    }
  </div>






  {
    array.map((post, postIt) => {
      return (
        <div key={postIt}>
          {
            <div className="similar_posts_container">
              <div className="container">

                <div className="d-flex flex-row align-items-end preview-items responsive-container">
                  {
                    array.map((answer, i) => {
                      return (
                        <div className="col-lg-3 col-md-6 similar_post_col post-quick-view" key ={i}>
                          <div className="box1 post-quick-shared">
                            <div className="similar_post trans_200">
                              <a href="#">
                                {answer.current.title}
                              </a>
                            </div>
                          </div>

                          <div className="box2 post-quick-shared">
                            <div className="col-lg-6 post-quick-similar-post trans_200 post-quick-view-a">
                              <a id={'post-quick-'+ answer.current.id}
                                to-show={answer.current.id}
                                to-hide={post.current.id}
                                onClick={this.handleChange} href="#">
                                Quick View
                              </a>
                            </div>

                            <div className="col-lg-6 post-quick-similar-post trans_200 post-quick-view-b">
                              <Link to={`post/${answer.current.id}`}>
                              Read
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        }
      </div>
    )
  })
}







</div>
);
}
}

export default SlinderItems;
