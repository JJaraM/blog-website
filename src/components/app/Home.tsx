/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';

import Slinder from '../../Slinder';
import { HomeMain } from './HomeMain';
import { HomeRightSideBar } from './HomeRightSideBar';
import apiTag from '../../api/tag';
import { Loading } from '../../components/common/Loading';

interface State { tags: any; isLoading: boolean }

/*
* Component used to render the index page
* @since 1.0
*/
export class Home extends React.Component<any, State> {

  constructor(props:any) {
    super(props);
  }

  async componentDidMount() {
    this.fetchTags();
    this.setState({isLoading: true});
  }

  fetchTags = () => {
    fetch(apiTag.findAll).then(response => response.json()).then(data => this.setState({tags: data, isLoading: false}));
  }

  render() {
    if (this.state === null || this.state.isLoading) {
      return (
        <div className="home_slinder">
          <div className="home_slider_container">
            <div className="owl-carousel owl-theme owl-loaded">
              <div className="owl-stage-outer">
                <div className="owl-stage">
                  <div className="owl-item black-container">
                      <div className="owl-slinder-center">
                          <Loading/>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <>
       <div className="home_slinder">
         <Slinder tags={this.state.tags} />
       </div>
       <div className="page_content">
         <div className="container">
           <div className="row row-lg-eq-height">
             <HomeMain tags={this.state.tags} />
             <HomeRightSideBar />
           </div>
         </div>
       </div>
     </>
    );
  }
}
