import * as React from 'react';

import { Link } from "react-router-dom";

import Post from './dto/Post';


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
        const divHide = document.getElementById(toHide);
        if (divHide !== null) {
          divHide.style.display = 'none';
        }
      }



      const toShow = div.getAttribute('to-show');
        console.log(toShow);
      if (toShow !== null) {
        const divShow = document.getElementById(toShow);
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
    const array = this.getPostSlinder();

    if (array.length === 0) {
      return (
        <div className="owl-item" >
          <div className="home_slider_background" style={{backgroundImage: `url(${'https://i.pinimg.com/originals/75/ad/bf/75adbf5b5fedb44993c3b9ce3fd9afd0.png'})`}}/>
        </div>
      );
    }

    return (
      array.map((post, postIt) =>
      <div className="owl-item" key = {post.current.id} id ={post.current.id} style={{display: postIt === 0 ? 'inline': 'none' }}>
        <div className="home_slider_background" style={{backgroundImage: `url(${post.current.image})`}}/>
        <div className="home_slider_content_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="home_slider_content">
                  {/*
                  <div className="home_slider_item_category trans_200">
                    <a href="category.html" className="trans_200">sport</a>
                  </div>
                  */}
                  <div className="home_slider_item_title">
                    <Link target="_blank" to={`post/${post.current.id}`}>
                      {post.current.title}
                    </Link>
                  </div>
                  <div className="home_slider_item_link">
                    <Link target="_blank" to={`post/${post.current.id}`}>Continue Reading
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
      <div className="similar_posts_container">
        <div className="container">
          <div className="row d-flex flex-row align-items-end">
            {array.map((answer, i) => {
              return (
                <div className="col-lg-3 col-md-6 similar_post_col" key ={i}>
                  <div  className="similar_post trans_200">
                    <a id={answer.id + post.current.id}
                      to-show={answer.current.id}
                      to-hide={post.current.id}
                      onClick={this.handleChange} href="#">
                      {answer.current.title}
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
          {/*
          <div className="home_slider_next_container">
            <div className="home_slider_next" style={{backgroundImage: `url(${post.next.image})`}}>
              <div className="home_slider_next_background trans_400"/>
              <div className="home_slider_next_content trans_400" id={post.id} to-hide={post.current.id} to-show={post.next.id} onClick={this.handleChange}>
                <div className="home_slider_next_title" id={post.id} to-hide={post.current.id} to-show={post.next.id} onClick={this.handleChange}>next</div>
                <div className="home_slider_next_link" id={post.id} to-hide={post.current.id} to-show={post.next.id} onClick={this.handleChange}>{post.next.title}</div>
              </div>
            </div>
          </div>
          */}
        </div>
      </div>
    </div>)
  );
}
}

export default SlinderItems;
