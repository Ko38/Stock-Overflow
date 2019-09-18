import React from "react";
import {Link} from "react-router-dom";

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
                <input type="text" placeholder="Search.." name="search" onChange={this.handleSearchInput.bind(this)("search")}/>
                <Link to={`/questions?search=${this.state.search}`} className="fa fa-search search-icon"></Link>

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