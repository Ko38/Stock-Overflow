import React from "react";
import {Link} from "react-router-dom";

class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  logOutOnClick() {
    this.props.logOut();
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
            <Link to="/login" className="logInButton aButton">
              Log In
            </Link> 
          </li>
          ,

          <li key="signUp" className="rightLi" >
            <Link to="/signup" className=" signUpButton aButton">
              Sign Up
            </Link>
          </li>
        ]
      );
    return (
      <div className="navBar">
        <ul>
          <li className="burger">
          </li>
          <li className="logoLi">
            <Link to="/">
              <img src="/assets/logo.png" alt="" className="logo"/>
            </Link>
            
          </li>
          
          <li className="searchLi"></li>
          {greetingWithButtons}
        </ul>
      </div>
    );
  }
}

export default NavBar;