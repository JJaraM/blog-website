/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';

import { Link } from "react-router-dom";
import Tag from '../../dto/Tag';
import apiTag from '../../api/tag';

import './peopleAboutMe.css';
import './peopleAboutMeV2.css';
import '../../styles/sidebar.css';

interface State {
  tags: Array<Tag>;
}

/*
* Component used to render the index page
* @since 1.0
*/
export class Tags extends React.Component<any, State> {

  constructor(props:any) {
    super(props);
  }

  componentDidMount() {
    this.fetchTags();
  }

  /*
   * Fetch the tag information from the microservice
   */
  fetchTags = () => {
    fetch(apiTag.findAll).then(response => response.json()).then(data => this.setState({tags: data}));
  }

  render() {
    if (this.state === null || this.state.tags === null) {
      return <></>;
    }
    return (
      <aside className="jjara_container_what_say_people">
        <div className="mkdf-widget-title-holder">
          <span className="mkdf-widget-title-before"/>
          <h6 className="mkdf-widget-title">Tags</h6>
        </div>
        <div className="sidebar_section_content jjara_story_circle_container">
          <ul className="list-unstyled tag-list">
          {
            this.state.tags.map((tag, i) => {
              return (
                <li key={i}>
                  <Link className="btn btn-white shadow" to={`category/${tag.id}`}>
                    {tag.name}
                  </Link>

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
