/*
 * Copyright (c) Jonathan Jara Morales 2018
 * @since 1.0
 */
import * as React from 'react';

import application from '../../application';

class PostComment extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  render() {

    return (
      <>
      <div className="comments">
        <div className="comments_title">
          <span>Comments</span>
          <span>(12)</span>
        </div>
        <ul>
          <li>
            <div className="comment_header_container">
              <img src={application.author_image} className="avatar_comment"/>
              <span><b>Jonathan Jara</b></span>
              <span>says:</span>
              <span>Sep 29, 2017 at 9:48 am</span>
            </div>
            <div className="comment_content">
              <p>Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky.</p>
            </div>

            <div className="reply">
              <a rel="nofollow" className="comment-reply-link" href="#">
                <span className="comments_reply_icon">
                  <i className="fa fa-reply"></i>
                </span>
                Reply
              </a>
            </div>

            <ol className="children">
              <li>
                <div className="comment_header_container">
                  <img src={application.author_image} className="avatar_comment"/>
                  <span><b>Jonathan Jara</b></span>
                  <span>says:</span>
                  <span>Sep 29, 2017 at 9:48 am</span>
                </div>
                <div className="comment_content">
                  <p>Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky.</p>
                </div>

                <div className="reply">
                  <a rel="nofollow" className="comment-reply-link" href="#">
                    <span className="comments_reply_icon">
                      <i className="fa fa-reply"></i>
                    </span>
                    Reply
                  </a>
                </div>

                <ol className="children">
                  <li>
                    <div className="comment_header_container">
                      <img src={application.author_image} className="avatar_comment"/>
                      <span><b>Jonathan Jara</b></span>
                      <span>says:</span>
                      <span>Sep 29, 2017 at 9:48 am</span>
                    </div>
                    <div className="comment_content">
                      <p>Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky.</p>
                    </div>

                    <div className="reply">
                      <a rel="nofollow" className="comment-reply-link" href="#">
                        <span className="comments_reply_icon">
                          <i className="fa fa-reply"></i>
                        </span>
                        Reply
                      </a>
                    </div>

                  </li>
                </ol>
              </li>
            </ol>
          </li>

          <li>
          <div className="comment_header_container">
            <img src={application.author_image} className="avatar_comment"/>
            <span><b>Jonathan Jara</b></span>
            <span>says:</span>
            <span>Sep 29, 2017 at 9:48 am</span>
          </div>
          <div className="comment_content">
            <p>Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky.</p>
          </div>

          <div className="reply">
            <a rel="nofollow" className="comment-reply-link" href="#">
              <span className="comments_reply_icon">
                <i className="fa fa-reply"></i>
              </span>
              Reply
            </a>
          </div>
          </li>
        </ul>
      </div>
      <div className="entry-footer clearfix">
        <a className="readmore">read more</a>
        <div className="entry-footer-social"></div>
      </div>
      </>
    );
  }
}

export default PostComment;
