/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';

// import YouTube from 'react-youtube';
import data from '../../api/postVideo';
import OwlCarousel from 'react-owl-carousel2';






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




   }

  render() {

    /* const opts = {
          height: '300', // 390
          width: '847',// 575
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
        */

    const options = {
        items: 3,
        nav: true,
        rewind: true,
        autoplay: true,
        dots:false,
        navText: ["Prev", "Next"]
    };

    return (

      <div className="blog_section">
         <div className="section_panel d-flex flex-row align-items-center justify-content-start">
           <div className="section_title_home">Lastest Videos</div>
         </div>
         <div className="section_content">
           <div className="row">
             <div className="col">

      {/*
               <YouTube className="jjara-video" videoId={ this.state.id } opts={opts} onReady={this._onReady} />
*/}
              <div className="video_section">
                <OwlCarousel options={options}>
                {
                  data.data.map((video, videoId) => {
                    return (
                      <div key={videoId}>
                        <div className="video_carrousel_section" >
                          <img src={video.img} onClick={this.handleChange(video)}/>
                          <div className="video_slide_section">
                            <div className="video_title">{video.title}</div>
                            <div className="video_info"><span>{video.createdDate}</span></div>
                          </div>

                        </div>
                      </div>
                    )
                  })
                }
                </OwlCarousel>
              </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
