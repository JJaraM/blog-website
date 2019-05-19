import * as React from 'react';

export class Wrapper extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <div className="page_content">
         <div className="container">
           <div className="row row-lg-eq-height">
             { this.props.children }
           </div>
         </div>
      </div>
    );
  }
}
