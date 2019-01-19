/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';

import YouTube from 'react-youtube';
import data from '../../api/postVideo';

// Import Components
import $ from 'jquery';




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

    if (typeof window !== 'undefined') {
        console.log('Cargué');
        $(function() {
          console.log($("#P1"));
        });
    }
  }

  handleChange = (val: any) => (event: any) => {
    this.setState({id: val.id, autoplay: 1});
  };

  renderPlaylist = () => {
    return (
      <div className="jjara-playlist">
        <div className="video-search-section">
          <input type="search" className="video-search" placeholder="Type to Search..."/>
          <img className="header_search_icon" src="images/search.png" alt=""/>
        </div>

        <div className="playlist">


        {
          data.data.map((video, videoId) => {
            return (
              <div className="video_container video_command" key={videoId} onClick={this.handleChange(video)}>
                <div className="video d-flex flex-row align-items-center justify-content-start">
                  <div className="side_post_image">
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
      </div>
    );
  }

  _onReady(event) {
     // access to player in all event handlers via event.target
     event.target.pauseVideo();

     {/*const iframe = document.getElementById("widget2") as HTMLIFrameElement;
     if (iframe !== null) {
       const contentWindow = iframe.contentWindow;
       if (contentWindow !== null) {
         const doc = contentWindow.document;
         if (doc !== null) {
            console.log(doc.getElementsByClassName("ytp-title"));
         }

       }

     }
*/}

  console.log(document.getElementsByClassName("jjara-video")[0])


   }

  render() {
    const opts = {
      height: '395', // 390
      width: '583',// 575
      playerVars: {
        autoplay: this.state.autoplay,
        rel: 0,
        modestbranding: 1,
        autohide: 1,
        info: 0,
        controls: 0,
        frameborder: 0,
        fs: 0,
        showInfo: 0
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

              <div className="player_container">
									<YouTube className="jjara-video" videoId={ this.state.id } opts={opts} onReady={this._onReady} />
								</div>



                { this.renderPlaylist() }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
