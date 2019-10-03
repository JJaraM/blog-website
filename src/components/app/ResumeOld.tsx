/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';

import experience from '../../api/experience';
import './style.css';
/*
* Component used to render the index page
* @since 1.0
*/

/*const education = [
  {
    period: "2014 - Current",
    place: "Universidad Cenfotec",
    title: "Software Development Bachelor",
    description: ""
  },
  {
    period: "2013 - 2014",
    place: "Universidad Cenfotec",
    title: "Database Administrator DB2 Technician",
    description: ""
  },
  {
    period: "2011 - 2013",
    place: "Universidad Cenfotec",
    title: "Software Development Technician",
    description: ""
  }
];*/

const skills = [
  {
    id: "Java",
    percentage: 90
  },
  {
    id: "Java 8",
    percentage: 60
  },
  {
    id: "OOP",
    percentage: 100
  },
  {
    id: "AOP",
    percentage: 70
  },
  {
    id: "JUnit",
    percentage: 80
  },
  {
    id: "Mockito",
    percentage: 60
  },
  {
    id: "JSF",
    percentage: 70
  },
  {
    id: "Primefaces",
    percentage: 80
  },
  {
    id: "Angular 1",
    percentage: 80
  },
  {
    id: "Ionic 1",
    percentage: 50
  },
  {
    id: "React JS",
    percentage: 40
  },
  {
    id: "Swing",
    percentage: 70
  },
  {
    id: "JPA",
    percentage: 80
  },
  {
    id: "JDBC",
    percentage: 90
  },
  {
    id: "Hibernate",
    percentage: 70
  },
  {
    id: "Spring Boot",
    percentage: 60
  },
  {
    id: "Spring QueryDSL",
    percentage: 70
  }
]

const backgroundImage = "http://thesweetsetup.com/wp-content/uploads/2015/06/Ulysses-Pro-Writing-Hero-4.jpg";

export class ResumeOld extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }



  render() {

    return (
      <>
        <div className="home">
          <div className="home_background home_background_mask parallax-window" style={{backgroundImage: `url(${backgroundImage})`}} />
        </div>

        <div className="jjara_page_content">
          <div className="container">
            <div className="row">
              <div className="col-lg-9" id="main-content-container">
                <div className="main_content">
                {/*
                  <div className="blog_section">
                    <div className="section_panel d-flex flex-row align-items-center justify-content-start">
                      <div className="section_title_home">Education</div>
                    </div>
                    <div className="section_content">
                      {
                        education.map((item, i) => {
                          return (
                            <div className="timeline-item clearfix" key={i}>
                              <div className="left-part">
                                <h5 className="item-period">{item.period}</h5>
                                <span className="item-company">{item.place}</span>
                              </div>
                              <div className="divider"></div>
                              <div className="right-part">
                                <h4 className="item-title">{item.title}</h4>
                                <p>{item.description}</p>
                              </div>
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>
*/}
                  <div className="blog_section">
                    <div className="section_panel d-flex flex-row align-items-center justify-content-start">
                      <div className="section_title_home">Experience</div>
                    </div>
                    <div className="section_content">
                      {
                        experience.data.map((item, i) => {
                          return (

                            <div className="timeline-item clearfix" key={i}>

                              <div className="left-part" id={""+i}>
                                <h5 className="item-period">{item.period}</h5>
                                <span className="item-company">
                                  <a href={"#" + i}>
                                    {item.place}
                                  </a>
                                </span>
                                <div className="side_post_image">
                                  <div>
                                    <a target="_blank" href={item.link}>
                                      <img src={item.img} alt=""/>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="divider"></div>
                              <div className="right-part-content">
                                <div className="right-part">
                                  <h4 className="item-title">{item.title}</h4>
                                  <p>{item.description}</p>
                                  <ul>
                                    {
                                      item.tasks.map((task, taskIdx) => {
                                        return (
                                          <li key={taskIdx}>
                                            {task.description}
                                          </li>
                                        );
                                      })
                                    }
                                  </ul>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>


                  <div className="blog_section">

                  </div>
                </div>
              </div>

              <div className="col-lg-3" id="side-container">
                <div className="sidebar" id="sidebar-container">
                  <div className="sidebar_background"></div>
                  <div className="sidebar_section">
                    <div className="sidebar_title_container">
                      <h4 className="jjara_sidebar_title">
                        <span>Languages</span>
                      </h4>
                    </div>

                    <div className="sidebar_section_content">
                      <div className="skill-unit">
                         <h4>English</h4>
                         <div className="bar">
                            <div className="progress-skill" style={{width: `80%`}}><span>80</span></div>
                         </div>
                      </div>

                      <div className="skill-unit">
                         <h4>Spanish (Native)</h4>
                         <div className="bar">
                            <div className="progress-skill" style={{width: `100%`}}><span>100</span></div>
                         </div>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar_section">
                    <div className="sidebar_title_container">
                      <h4 className="jjara_sidebar_title">
                        <span>Skills</span>
                      </h4>
                    </div>

                    <div className="sidebar_section_content">
                      {
                        skills.sort((a, b) => b.percentage - a.percentage).map((skill, skillIdx) => {
                          return (
                            <div className="skill-unit" key={skillIdx}>
                               <h4>{skill.id}</h4>
                               <div className="bar">
                                  <div className="progress-skill" style={{width: `${skill.percentage}%`}}><span>{skill.percentage}</span></div>
                               </div>
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
