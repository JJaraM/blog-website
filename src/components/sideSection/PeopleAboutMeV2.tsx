/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';

import api from '../../api/peopleAboutMe';
import './peopleAboutMe.css';
import '../../styles/sidebar.css';

/*
* Component used to render the index page
* @since 1.0
*/
export class PeopleAboutMeV2 extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <aside className="jjara_container_what_say_people">
        <h4 className="jjara_sidebar_title">
          <span>Testimonials</span>
        </h4>
        <div className="sidebar_section_content jjara_story_circle_container">
          {
            api.data.map((person, i) => {
              return (
                <span className="tooltip jjara_story_circle" key={i}>
                  <img width="415" height="415" src={person.photo}/>
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
