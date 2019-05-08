import * as React from 'react';

import apiTag from '../../../api/tag';
import Slinder from '../../../Slinder';

import { HomeMain } from './HomeMain';
import { HomeRightSideBar } from './HomeRightSideBar';
import { HomeSlinderLoading } from './components/HomeSlinderLoading';
import { HomeSlinder } from './components/HomeSlinder';
import { Wrapper } from './components/Wrapper';

interface State { tags: any; isLoading: boolean }

export class Home extends React.Component<any, State> {

  constructor(props:any) {
    super(props);
  }

  async componentDidMount() {
    this.fetchTags();
    this.setState({ isLoading: true });
  }

  fetchTags = () => {
    fetch(apiTag.findAll).then(response => response.json()).then(data => this.setState({tags: data, isLoading: false}));
  }

  render() {
    let tags = [];
    let Component = () => <HomeSlinderLoading />;

    if (this.state !== null && !this.state.isLoading) {
      tags = this.state.tags;
      Component = () => <Slinder tags={tags} />;
    }

    return (
      <>
        <HomeSlinder>
          <Component />
        </HomeSlinder>
        <Wrapper>
          <HomeMain tags={ tags } />
          <HomeRightSideBar />
        </Wrapper>
      </>
    );
  }
}
