import React from "react";
import {Link} from "react-router-dom";
import { Redirect } from 'react-router';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: "",
      burgerClicked: false
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
            {/* <Link to="/questions" className="linkToQuestions"> */}
            <div className={`burgerContainer ${this.state.burgerClicked ? "change" : ""}`} onClick={() => {
              this.setState({
                burgerClicked: !this.state.burgerClicked
              });
            }}>
              <div className="burgerMenuBorder bar1 "></div>
              <div className="burgerMenuBorder bar2 "></div>
              <div className="burgerMenuBorder bar3 "></div>
            </div>
            {/* </Link> */}
            <div className={`robotoFont dropdown ${this.state.burgerClicked ? "" : "invisible"}`}>
              <Link className="sideNavLinkText" to="/">Home</Link> <br />
              <div className="publicText">PUBLIC</div>


              <Link className="sideNavLinkText questionsLink" to="/questions">
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18"><path d="M9 1a8 8 0 1 0 0 16A8 8 0 0 0 9 1zM8 15.32a6.4 6.4 0 0 1-5.23-7.75L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.4 6.4 0 0 1 2.32 10.24v.01z"></path></svg>
                &nbsp; Stock Overflow
              </Link>


            </div>
            
          </li>
          <li className="logoLi">
            <Link className="navLinkBtn" to="/">
              <img src="/assets/logo.png" alt="" className="logo"/>
            </Link>
            
          </li>
          
          <li className="searchLi">
            <div className="search-container">
              {/* <form onSubmit={this.searchSubmit.bind(this)} className="search-form" action="/action_page.php"> */}
              {/* <Link to={`/questions?search=${this.state.search}`} >
                <svg aria-hidden="true" className="new-search-icon search-icon" width="18" height="18" viewBox="0 0 18 18"><path d="M18 16.5l-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0z"></path></svg>
              </Link> */}
              <span className="search_icon"><i className="fa fa-search"></i></span>
                <input type="text" placeholder="Search..." name="search" className="searchInput"
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