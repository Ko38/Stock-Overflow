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
          <li key="welcome" className="floatRightLi welcomeText">
            Logged in as <b>{this.props.currentUser.username}</b>
          </li>
          ,
          <li key="logOut" className="floatRightLi">
            <button className="logOutButton" onClick={this.logOutOnClick.bind(this)}>
              Log Out
            </button>
          </li>
        ]
      ) : (
        [
          <li key="logIn" className="floatRightLi"> 
            <Link to="/login" className="logInButton aButton">
              Log In
            </Link> 
          </li>
          ,

          <li key="signUp" className="floatRightLi">
            <Link to="/signup" className="floatRightLi signUpButton aButton">
              Sign Up
            </Link>
          </li>
        ]
      );
    return (
      <div className="navBar">
        <ul>
          <li>
            
          </li>
          <li>
            
            </li><li></li><li></li><li></li><li></li><li></li>
          {greetingWithButtons}
        </ul>
      </div>
    );
  }
}

export default NavBar;