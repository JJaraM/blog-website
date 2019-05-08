import * as React from 'react';

import { Loading } from '../../../../components/common/Loading';

export class HomeSlinderLoading extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <div className="owl-item black-container">
        <div className="owl-slinder-center">
          <Loading/>
        </div>
      </div>
    );
  }
}
