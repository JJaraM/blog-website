/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */
import * as React from 'react';

/*
* Component used to render the not found page
* @since 1.0
*/
class ExperienceSide extends React.Component {
  render() {

    const style1 = {
      width: '1628px'
    }

    const style2 = {
      width: '232.5px'
    }

    return (
      <div className="sidebar_section">
         <div className="sidebar_title_container">
           <h4 className="jjara_sidebar_title">
             <span>Experience</span>
           </h4>
         </div>

         <div className="sidebar_section_content">
            <div className="sidebar_slider_container">
               <div className="owl-carousel owl-theme sidebar_slider_top owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                     <div className="owl-stage" style={style1}>
                        <div className="owl-item cloned" style={style2}>
                           <div className="owl-item">
                              <div className="side_post">
                                 <a href="#">
                                    <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                       <div className="side_post_image">
                                          <div><img src="https://media.licdn.com/dms/image/C4D0BAQH-n-8Yn1Exug/company-logo_400_400/0?e=1555545600&v=beta&t=k6rz5wFiFeO37cPAxBNylpa39oVKgtIE5s61OJy_C1Y" alt=""/></div>
                                       </div>
                                       <div className="side_post_content">
                                          <div className="side_post_title">Java Developer</div>
                                          <small className="post_meta">GFT Group<span>May 2016 - current</span></small>
                                       </div>
                                    </div>
                                 </a>
                              </div>
                              <div className="side_post">
                                 <a href="#">
                                    <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                       <div className="side_post_image">
                                          <div><img src="https://media.licdn.com/dms/image/C4E0BAQFqz6qRJE1Sdg/company-logo_400_400/0?e=1555545600&v=beta&t=FVY__rp8mSy4nMRCoUrixHg30jVibvtsQEqr9-LhUNo" alt=""/></div>
                                       </div>
                                       <div className="side_post_content">
                                          <div className="side_post_title">Java Developer</div>
                                          <small className="post_meta">Snap Techology, SRL<span>Nov 2015 - May 2016</span></small>
                                       </div>
                                    </div>
                                 </a>
                              </div>
                              <div className="side_post">
                                 <a href="#">
                                    <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                       <div className="side_post_image">
                                          <div><img src="https://media.licdn.com/dms/image/C4D0BAQHQqqY4fs-Z-w/company-logo_400_400/0?e=1555545600&v=beta&t=nphEXPPQwdMpyDHTNpCBfefW9i9OIAqswEvQVeq8QRQ" alt=""/></div>
                                       </div>
                                       <div className="side_post_content">
                                          <div className="side_post_title">Jave Developer</div>
                                          <small className="post_meta">Excel SoftSources<span>Oct 2014 - Nov 2015</span></small>
                                       </div>
                                    </div>
                                 </a>
                              </div>
                              <div className="side_post">
                                 <a href="#">
                                    <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                       <div className="side_post_image">
                                          <div><img src="https://media.licdn.com/dms/image/C4D0BAQHUefuYt8j0gA/company-logo_400_400/0?e=1555545600&v=beta&t=duHq7HyE9asm1y72xaGqW2JNFriYH0DIyFT1BV3TruY" alt=""/></div>
                                       </div>
                                       <div className="side_post_content">
                                          <div className="side_post_title">Java Developer</div>
                                          <small className="post_meta">RLM Appareal Software Systems<span>Jun 2012 - Oct 2004</span></small>
                                       </div>
                                    </div>
                                 </a>
                              </div>
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
export default ExperienceSide;
