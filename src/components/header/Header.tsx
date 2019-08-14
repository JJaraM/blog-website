/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */
import * as React from 'react';
import application from '../../application';
import { Link } from "react-router-dom";
import Autosuggest from 'react-autosuggest';
import api from '../../api/post';
import HomeMenu from '../../app/components/HomeMenu';

// Imagine you have a list of languages that you'd like to autosuggest.



// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <Link to={`/post/view/${suggestion.id}`} >
    <div className=" suggestion">
      <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start smart_search">
         <div className="side_post_image">
            <div><img src={suggestion.image} alt=""/></div>
         </div>
         <div className="side_post_content">
            <div className="side_post_title">{suggestion.title}</div>
            <small className="post_meta">
            {suggestion.description}
            </small>
            <div className="post_meta">
              Last Update: {new Date(suggestion.updateDate).toLocaleDateString()}
            </div>
         </div>
      </div>
    </div>
  </Link>
);

/*
* Component used to render the header section of the page when is being rendered by a browser
* @since 1.0
*/
export class Header extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
    this.state = {
      value: '',
      suggestions: [],
      posts: [],
      isLoading: false
    };
    this.openComments = this.openComments.bind(this);
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  // Teach Autosuggest how to calculate suggestions for any given input value.
  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    if (this.state.posts !== undefined) {
      return inputLength === 0 ? [] : this.state.posts.filter(lang =>
        lang.title.toLowerCase().includes(inputValue.toLowerCase())
      );
    }

    return [];

  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  /*
   * When a component will be mount we add a handleScroll event
   */
  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
      this.fetchPost();
  }

  fetchPost = () => {
    this.setState({isLoading: true});
    fetch(api.find + '0' + '/100' + "/0")
      .then(response => response.json())
      .catch(error => console.log(error))
      .then(data =>  this.setState({posts: data, isLoading: false}));
  }

  /*
   * When the component will be unmount we add a handleScroll event
   */
  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  topFunction = (event) => {
    if (document !== null && document.body !== null && document.documentElement !== null) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

  }


  handleScroll(event) {
    const pos = window.scrollY;

    const scrolled = 'scrolled';
    const element = document.getElementById("main-header");
    if (element !== null && element.classList !== null) {
      if (pos > 85) {
        element.classList.add(scrolled);
      } else {
        element.classList.remove(scrolled);
      }
    }

    const topButton = document.getElementById("topButton");
    if (topButton !== null) {
      if (pos > 20 ) {
        topButton.style.display = "block";
      } else {
        topButton.style.display = "none";
      }
    }
  }

  openComments(event: any) : void {
    const div = document.getElementById("sign-container");
    const title = document.getElementById("signIn");
    const commentContainer = document.getElementById("comment-container");
    const superContainer = document.getElementById('super_container');
    const mainContainer = document.getElementById('main-content-container');
    const sideContainer = document.getElementById('side-container');
    const header = document.getElementById('main-header');

    if (div !== null) {
      const currentClassName = div.classList[1];
      if (currentClassName === 'comments_hide' || currentClassName === 'signIn_absolute') {
        div.classList.remove('comments_hide');
        div.classList.remove('signIn_absolute');
        div.classList.add('comments_show');
      } else {
        div.classList.remove('comments_show');
        div.classList.add('comments_hide');
      }
    }

    if (title !== null) {
      const currentClassName = title.classList[1];
      if (currentClassName === 'signIn_comments_close') {
        title.classList.remove('signIn_comments_close');
        title.classList.add('signIn_comments_open');
      } else {
        title.classList.remove('signIn_comments_open');
        title.classList.add('signIn_comments_close');
      }
    }

    if (commentContainer !== null) {
        const currentClassName = commentContainer.classList[1];
        if (currentClassName === null || currentClassName === undefined) {
          commentContainer.classList.add('auto_hide_comments_container_open');
          if (superContainer !== null && mainContainer !== null && sideContainer !== null && header !== null) {
            superContainer.classList.remove('super_container_big');
            mainContainer.classList.remove('col-lg-9');
            sideContainer.classList.remove('col-lg-3');
            header.classList.remove('super_container_big');

            superContainer.classList.add('super_container_small');
            mainContainer.classList.add('col-lg-8');
            sideContainer.classList.add('col-lg-4');
            header.classList.add('super_container_small');
          }
        } else {
          commentContainer.classList.remove('auto_hide_comments_container_open');
          if (superContainer !== null && mainContainer !== null && sideContainer !== null && header !== null) {
            superContainer.classList.remove('super_container_small');
            mainContainer.classList.remove('col-lg-8');
            sideContainer.classList.remove('col-lg-4');
            header.classList.remove('super_container_small');

            superContainer.classList.add('super_container_big');
            mainContainer.classList.add('col-lg-9');
            sideContainer.classList.add('col-lg-3');
            header.classList.add('super_container_big');

          }
        }
    }
  }

  render() {

    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type to Seach...',
      value,
      onChange: this.onChange
    };

    if (inputProps.value === undefined) {
      inputProps.value = " ";
    }



    return (
      <header className="header" id="main-header">
        <button id="topButton" onClick={this.topFunction} title="Go to top">Top</button>
    		<div className="container">
    			<div className="row">
    				<div className="col">
    					<div className="header_content d-flex flex-row align-items-center justify-content-start">
    						<div className="logo">
                  <Link to="/">
                    {application.home_logo}
                  </Link>
                </div>
                <HomeMenu />

    						<div className="search_container ml-auto flex">

                    <Autosuggest
                      suggestions={suggestions}
                      onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                      onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                      getSuggestionValue={getSuggestionValue}
                      renderSuggestion={renderSuggestion}
                      inputProps={inputProps}
                       />
    								<img className="header_search_icon" src="/images/search.png" alt=""/>

    						</div>

                <div className="signIn" id="comment-container">
                  <div className="signIn_comments signIn_comments_close" id="signIn" onClick={this.openComments}>
                    <i className="fa fa-bars trans_200 menu_mm" aria-hidden="true"/>
                  </div>
                  <div className="content signIn_absolute" id="sign-container">
                    <div className="form-content">

                      <div className="form-items">
                        <h3>Sign In</h3 >
                        <p>Welcome to my blog site, if you want to contribute adding comments, please login</p>
                      </div>

                      <div className="signIn-input">
                        <input className="comment_input comment_input_name" type="text" name="username" placeholder="E-mail Address"/>
                      </div>

                      <div className="signIn-input">
                        <input className="comment_input comment_input_name" type="password" name="password" placeholder="Password" />
                      </div>

                      <div className="form-button">
                          <button id="submit" type="submit" className="comment_button">Login</button>
                      </div>
                    </div>
                  </div>
                </div>
    					</div>
    				</div>
    			</div>
    		</div>


    	</header>
    );
  }
}
