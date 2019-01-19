/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';

import api from '../../api/peopleAboutMe';

/*
* Component used to render the index page
* @since 1.0
*/
export class PeopleAboutMe extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <aside className="what_say_people">
        <span className="sidebar_title">What does the people say about me?</span>
        <div className="sidebar_section_content">
          {
            api.data.map((person, personIt) => {
              return (
                <span className="tooltip story_circle story_hotlink" key={personIt}>
                  <img width="415" height="415" src={person.photo} className="img-responsive wp-post-image"/>
                  <span>
                    <div className="tooltip-desc">
                      <strong>{person.name}</strong>
                      <div className="description">
                        {person.comment}
                      </div>
                    </div>
                  </span>
                </span>
              )
            })
          }
        </div>
      </aside>
    );
  }
}
