/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';


import './style/loader.css';

/*
* Component used to redirect the request to the correspond component.
* @since 1.0
*/
export const Loading: React.StatelessComponent = () => {
  return (
    <div className="owl-item black-container" >
      <div className="box slinder-container"><div className="sk-circle"/></div>
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
          <div className="rect6"></div>
          <p><i>LOADING...</i></p>
        </div>
      </div>
  );
}
