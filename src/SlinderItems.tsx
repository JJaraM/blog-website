import * as React from 'react';

import './bootstrap4/bootstrap.min.css'
import './plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import './plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import './plugins/OwlCarousel2-2.2.1/animate.css';
import './main_styles.css';
import './responsive.css';

import Post from './Post';

class SlinderItems extends React.Component<{data: Array<Post>}, any> {

  render() {
    return (
      this.props.data.map((post: Post) =>
        <div className="owl-item" key = {post.id}>
          <div className="home_slider_background" style={{backgroundImage: `url(${post.image})`}}/>
          <div className="home_slider_content_container">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="home_slider_content">
                    <div className="home_slider_item_category trans_200"><a href="category.html" className="trans_200">sport</a></div>
                    <div className="home_slider_item_title">
                      <a href="post.html">{post.title}</a>
                    </div>
                    <div className="home_slider_item_link">
                      <a href="post.html" className="trans_200">Continue Reading
                        <svg version="1.1" id="link_arrow_1" x="0px" y="0px"
                           width="19px" height="13px" viewBox="0 0 19 13">
                          <polygon fill="#FFFFFF" points="12.475,0 11.061,0 17.081,6.021 0,6.021 0,7.021 17.038,7.021 11.06,13 12.474,13 18.974,6.5 "/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="similar_posts_container">
            <div className="container">
              <div className="row d-flex flex-row align-items-end">
                <div className="col-lg-3 col-md-6 similar_post_col">
                  <div className="similar_post trans_200">
                    <a href="post.html">How Did van Gogh’s Turbulent Mind Depict One of the Most</a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 similar_post_col">
                  <div className="similar_post trans_200">
                    <a href="post.html">How Did van Gogh’s Turbulent Mind Depict One of the Most</a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 similar_post_col">
                  <div className="similar_post trans_200">
                    <a href="post.html">How Did van Gogh’s Turbulent Mind Depict One of the Most</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="home_slider_next_container">
              <div className="home_slider_next" style={{backgroundImage: `url(${post.image})`}}>
                <div className="home_slider_next_background trans_400"/>
                <div className="home_slider_next_content trans_400">
                  <div className="home_slider_next_title">next</div>
                  <div className="home_slider_next_link">How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</div>
                </div>
              </div>
            </div>


          </div>
        </div>
      )
    );
  }
}

export default SlinderItems;