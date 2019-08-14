/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';

import api from '../../api/peopleAboutMe';
import './peopleAboutMe.css';
import './peopleAboutMeV2.css';
import '../../styles/sidebar.css';

/*
* Component used to render the index page
* @since 1.0
*/
export class PeopleAboutMe extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
    this.onError = this.onError.bind(this);
  }

  onError(e: any) : void {
    (e.target as HTMLInputElement).src = '/images/avatar.jpg';
  }


  render() {
    return (
      <aside className="jjara_container_what_say_people">
        <div className="mkdf-widget-title-holder">
          <span className="mkdf-widget-title-before"/>
          <h6 className="mkdf-widget-title">Testimonials</h6>
        </div>
        <div className="sidebar_section_content jjara_story_circle_container">
          {
            api.data.map((person, i) => {
              return (
                <span className="tooltip jjara_story_circle" key={i}>
                  <img width="415" height="415" src={person.photo} onError={this.onError}
                    />
                  <span>
                    <div className="tooltip-desc">
                      <strong>{person.name}</strong>
                      <div className="description">{person.comment}</div>
                    </div>
                  </span>
                </span>
              )
            })
          }
          <span className="add_about_me tooltip jjara_story_circle">
            <a href="#">
              <i className="fa fa-plus"/>
            </a>
          </span>
        </div>
      </aside>
    );
  }
}
