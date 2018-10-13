/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */
import * as React from 'react';

/*
* Component used to render the not found page
* @since 1.0
*/
class NotFound extends React.Component {
  render() {
    return (
      <div className="super_container">
        <div className="home_slinder">
          <div className="home_slider_container">
            <div className="owl-carousel owl-theme owl-loaded">
              <div className="owl-stage-outer">
                <div className="owl-stage">
                  <div className="owl-item" >
                    <div className="home_slider_background" style={{backgroundImage: `url(${'https://i.pinimg.com/originals/75/ad/bf/75adbf5b5fedb44993c3b9ce3fd9afd0.png'})`}}/>
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
export default NotFound;
