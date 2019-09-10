import React from 'react';
import SignupFormContainer from './containers/signup_form_container';
import LogInFormContainer from './containers/logIn_form_container';
import NavBarContainer from "./containers/navbar_container";
import {Route,Switch} from "react-router-dom";

export default (props) => {
  return (
    [
      <NavBarContainer key="navBar" currentUser={props.currentUser}/>
      ,
      <Switch key="switchForm">
        <Route path="/signup" component={SignupFormContainer} />
        <Route path="/login" component={LogInFormContainer} />       
      </Switch>
    ]
  )
};