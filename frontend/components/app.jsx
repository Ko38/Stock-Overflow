import React from 'react';
import SignupFormContainer from './containers/signup_form_container';
import LogInFormContainer from './containers/logIn_form_container';
import NavBarContainer from "./containers/navbar_container";
import {Route,Switch} from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

export default (props) => {
  return (
    [
      <NavBarContainer key="navBar" currentUser={props.currentUser}/>
      ,
      <div key="body" className="body">
        <Switch key="switchForm">
          <AuthRoute path="/signup" component={SignupFormContainer} />
          <AuthRoute path="/login" component={LogInFormContainer} />       
        </Switch>
      </div>
      , 
    ]
  )
};