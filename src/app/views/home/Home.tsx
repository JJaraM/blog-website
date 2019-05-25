import * as React from 'react';
import apiTag from '../../../api/tag';
import Slinder from '../../../Slinder';
import { HomeMain } from './HomeMain';
import { HomeRightSideBar } from './HomeRightSideBar';
import { HomeSlinderLoading } from './components/HomeSlinderLoading';
import { HomeSlinder } from './components/HomeSlinder';
import { Wrapper } from './components/Wrapper';

export class Home extends React.Component<any, State> {

  constructor(props:any) {
    super(props);
    this.state = {
      isLoading: true,
      tags: [],
    }
  }

  async componentDidMount() {
    this.fetchTags();
  }

  fetchTags = () => {
    fetch(apiTag.findAll)
      .then(response => response.json())
      .then(data => this.setState({ tags: data, isLoading: false }));
  }

  render() {
    let Component = () => <HomeSlinderLoading />;

    if (!this.state.isLoading) {
      Component = () => <Slinder { ...this.state } />;
    }

    return (
      <>
        
        <HomeSlinder>
          <Component />
        </HomeSlinder>
        <Wrapper>
          <HomeMain { ...this.state } />
          <HomeRightSideBar />
        </Wrapper>
      </>
    );
  }
}

interface State {
  tags: any;
  isLoading: boolean
}
