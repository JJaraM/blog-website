import * as React from 'react';
import ViewTags from '../ViewTags';
import SelectorLink from '../SelectorLink';
import './style.css';

class ListView extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      selectedImage: ''
    }
  }

  onView = (img: string) => (event: any) => {
    const modal = document.getElementById("myModal");
    if (modal !== null && modal !== undefined) {
      this.setState({selectedImage : img});
      modal.style.display = "block";
    }
  }

  onClose = (event: any) => {
    const modal = document.getElementById("myModal");
    if (modal !== null && modal !== undefined) {
      this.setState({selectedImage : ''});
      modal.style.display = "none";
    }
  }

  render() {
    const itemToRender = this.props.repos.map(repo => (
      <div className="card big-card">
        <div className="row">
          <div className="col-4">
            <div className="side-image">
              <SelectorLink itemRedirect={this.props.itemRedirect} id={repo.id}>
                <img src={repo.image} onClick={this.onView(repo.image)}/>
              </SelectorLink>
            </div>
          </div>
          <div className="col-4">
            <div className="card-body">
              <div className="card-title card-title-small big-card-title">
                <SelectorLink itemRedirect={this.props.itemRedirect} id={repo.id}>
                  {repo.title}
                </SelectorLink>
              </div>
              <p className="card-text big-card-text">
                {repo.description}
              </p>
            </div>
          </div>
          <div className="col-4 side-tags-container">
            <div className="side-tags">
              <ViewTags tags={this.props.tags} itemTags={repo.tags} />
            </div>
          </div>
        </div>
      </div>
    ));
    return (
      <>
        {itemToRender}
        <div id="myModal" className="modal" onClick={this.onClose}>
         <span className="close" onClick={this.onClose}>&times;</span>
         <img className="modal-content" id="img01" src={this.state.selectedImage} onClick={this.onClose} />
         <div id="caption"></div>
        </div>
      </>
    );
  }
}

interface State {
  selectedImage: string,
}

interface Props {
  repos: any;
  tags: any;
  itemRedirect?: any;
}

export default ListView;
