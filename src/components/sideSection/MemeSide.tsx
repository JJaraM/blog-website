/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */
import * as React from 'react';

import api from '../../api/meme';

/*
* Component used to render the not found page
* @since 1.0
*/
class MemeSide extends React.Component {
  render() {
    return (
      <aside className="jjara_container_what_say_people">
        <div className="mkdf-widget-title-holder">
          <span className="mkdf-widget-title-before"/>
          <h6 className="mkdf-widget-title">Fun!</h6>
        </div>
        <div className="sidebar_section_content">
          <ul className="meme_section micro-space">
          {
            api.data.map((meme, i) => {
              return (
                <li key={i}>
                  <a href="#">
                    <img src={meme.img} />
                    <span className="mkdf-instagram-icon">
                      <span className="fa fa-ey"/>
                    </span>
                  </a>
                </li>
              )
            })
          }
          </ul>
        </div>
      </aside>
    );
  }
}
export default MemeSide;
