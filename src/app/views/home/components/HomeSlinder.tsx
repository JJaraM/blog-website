import * as React from 'react';

export class HomeSlinder extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <div className="home_slinder">
        <div className="home_slider_container">
          <div className="owl-carousel owl-theme owl-loaded">
            <div className="owl-stage-outer">
              <div className="owl-stage">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
