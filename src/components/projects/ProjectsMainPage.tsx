/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';
import apiTag from '../../api/tag';
import ListView from "../../app/components/ListView";

import '../../bootstrap4/bootstrap.min.css'
import '../../plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../../plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import '../../plugins/OwlCarousel2-2.2.1/animate.css';
import '../../main_styles.css';
import '../../bigCard.css';
import '../../responsive.css';
import '../../customTimeLine.css';
import './style.css';

import reposData from './data';

interface State {
  repos: any ;
  tags: any;
}

export class ProjectsMainPage extends React.Component<any, State> {

  constructor(props:any) {
    super(props);
    this.state = {
      repos: [],
      tags: []
    }
  }

  async componentDidMount() {
    this.fetchRepos();
    this.fetchTags();
  }

  fetchTags = () => {
    fetch(apiTag.findAll).then(response => response.json()).then(data => this.setState({tags: data}));
  }


  fetchRepos = () => {
    this.setState({repos: reposData});
  }

  render() {
    const img = 'https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png';

    if (this.state.tags.length === 0) {
      return <></>;
    }

    return (
      <>
        <div className="home">
          <div className="home_background home_background_mask parallax-window"
            style={{backgroundImage: `url(${img})`}}>
          </div>
        </div>
        <div className="jjara_page_content">
          <div className="container">
            <div className="row">
              <div className="col-9">
                <ListView repos={this.state.repos} tags={this.state.tags} />
              </div>
              <div className="col-lg-3">
                <div className="sidebar_background"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
