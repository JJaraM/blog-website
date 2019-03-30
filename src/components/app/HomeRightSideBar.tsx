/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';

import ExperienceSide from '../sideSection/ExperienceSide';
import { PeopleAboutMe } from '../sideSection/PeopleAboutMe';
import { Tags } from '../sideSection/Tags';
import AboutMe from '../sideSection/AboutMe';
import MemeSide from '../sideSection/MemeSide';
import config from '../../config';

/*
* Component used to render the index page
* @since 1.0
*/
export class HomeRightSideBar extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  renderSidebarSelection = (section: any) => {
    let component = <></>;
    if (section.display) {
      switch(section.id) {
        case 'home_side_about_me':
          component = <AboutMe />;
          break;

        case 'home_side_people_about_me':
          component = <PeopleAboutMe />;
          break;

        case 'home_side_experience':
          component = <ExperienceSide />;
          break;

        case 'home_side_tags':
          component = <Tags />;
          break;

        case 'home_side_meme':
            component = <MemeSide />;
            break;
      }
    }
    return component;
  }

  render() {
    return (
      <div className="col-lg-3">
        <div className="sidebar">
          <div className="sidebar_background"/>
          <div className="sidebar_section">
            {
              config.home_right_sidebar.sort((a, b) => a.order - b.order).map((section, i) => {
                return this.renderSidebarSelection(section);
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
