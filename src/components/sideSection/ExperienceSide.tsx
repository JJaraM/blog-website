/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */
import * as React from 'react';
import experience from '../../api/experience';
import { Link } from "react-router-dom";
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

                           {
                             experience.data.map((item, i) => {
                               return (
                                 <div className="side_post" key={i}>
                                    <a href="#">
                                       <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                          <div className="side_post_image">
                                             <div>
                                              <a target="_blank" href={item.link}>
                                                <img src={item.img} alt=""/>
                                              </a>
                                            </div>
                                          </div>
                                          <div className="side_post_content">
                                              <div className="side_post_title">
                                                <Link to={"/resume/#" + i}>
                                                  {item.title}
                                                </Link>
                                              </div>
                                             <small className="post_meta">{item.place}<span>{item.period}</span></small>
                                          </div>
                                       </div>
                                    </a>
                                 </div>
                               )
                             })
                           }
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
