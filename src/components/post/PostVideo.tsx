/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';

import YouTube from 'react-youtube';
import data from '../../api/postVideo';

interface State {
  id: string;
  autoplay: number;
}

/*
* Component used to render the index page
* @since 1.0
*/
export default class PostVideo extends React.Component<any, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      id: data.data[0].id,
      autoplay: 0
    }
  }

  handleChange = (val: any) => (event: any) => {
    this.setState({id: val.id, autoplay: 1});
  };

  renderPlaylist = () => {
    return (
      <div className="playlist">
      <div className="playlist_background"></div>
      {
        data.data.map((video, videoId) => {
          return (
            <div className="video_container video_command" key={videoId} onClick={this.handleChange(video)}>
              <div className="video d-flex flex-row align-items-center justify-content-start">
                <div className="video_image">
                  <div>
                    <img src={ video.img } alt=""/>
                  </div>
                  <img className="play_img" src="images/play.png" alt=""/>
                </div>
                <div className="video_content">
                  <div className="video_title">{ video.title }</div>
                  <div className="video_info"><span>{ video.createdDate}</span></div>
                </div>
              </div>
            </div>
          )
        })
      }
      </div>
    );
  }

  _onReady(event) {
     // access to player in all event handlers via event.target
     event.target.pauseVideo();
   }

  render() {
    const opts = {
      height: '390',
      width: '575',
      playerVars: {
        autoplay: this.state.autoplay
      }
    };

    return (
      <div className="blog_section">
        <div className="section_panel d-flex flex-row align-items-center justify-content-start">
          <div className="section_title_home">Most Popular Videos</div>
        </div>
        <div className="section_content">
          <div className="row">
            <div className="col">
              <div className="videos">
                <YouTube videoId={ this.state.id } opts={opts} onReady={this._onReady} />
                { this.renderPlaylist() }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
