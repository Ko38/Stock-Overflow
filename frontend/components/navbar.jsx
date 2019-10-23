import React from "react";
import {Link} from "react-router-dom";
import { Redirect } from 'react-router';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: ""
    };
  }

  logOutOnClick() {
    this.props.logOut();
  }

  handleSearchInput(type) {
    return(e) => {
      this.setState({
        [type]: e.target.value
      });
    };
  }

  render() {
    let greetingWithButtons = this.props.currentUser ? 
      (
        [
          <li key="welcome" className="rightLi welcomeText">
            Logged in as <b>{this.props.currentUser.username}</b>
          </li>
          ,
          <li key="logOut" className="rightLi">
            <button className="logOutButton" onClick={this.logOutOnClick.bind(this)}>
              Log Out
            </button>
          </li>
        ]
      ) : (
        [
          <li key="logIn" className="rightLi"> 
            <Link to="/login" className="logInButton aButton navLinkBtn">
              Log In
            </Link> 
          </li>
          ,

          <li key="signUp" className="rightLi" >
            <Link to="/signup" className="signUpButton aButton navLinkBtn">
              Sign Up
            </Link>
          </li>
        ]
      );
    return (
      <div className="navBar">
        <ul>
          <li className="burger">
            <Link to="/questions" className="linkToQuestions">
              <div className="burgerMenuBorder"></div>
              <div className="burgerMenuBorder"></div>
              <div className="burgerMenuBorder"></div>
            </Link>
          </li>
          <li className="logoLi">
            <Link className="navLinkBtn" to="/">
              <img src="/assets/logo.png" alt="" className="logo"/>
            </Link>
            
          </li>
          
          <li className="searchLi">
            <div className="search-container">
              {/* <form onSubmit={this.searchSubmit.bind(this)} className="search-form" action="/action_page.php"> */}
              <Link to={`/questions?search=${this.state.search}`} >
                <svg aria-hidden="true" className="new-search-icon search-icon" width="18" height="18" viewBox="0 0 18 18"><path d="M18 16.5l-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0z"></path></svg>
              </Link>
                
                <input type="text" placeholder="Search.." name="search" 
                  onChange={this.handleSearchInput.bind(this)("search")}
                  onKeyPress={(e) => {
                    if (event.key === 'Enter') {
                      window.location.replace(`/#/questions?search=${this.state.search}`);
                    }
                  }}
                  
                  />
              {/* <Link to={`/questions?search=${this.state.search}`} className="fa fa-search search-icon">

              </Link> */}

                  {/* <button type="submit"><i className="fa fa-search"></i></button> */}
              {/* </form> */}
            </div>
          </li>
          {greetingWithButtons}
        </ul>
      </div>
    );
  }
}

export default NavBar;