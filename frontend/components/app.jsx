import React from 'react';
import SignupFormContainer from './containers/signup_form_container';
import LogInFormContainer from './containers/logIn_form_container';
import NavBarContainer from "./containers/navbar_container";
import {Route,Switch} from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import QuestionWallContainer from "./containers/questionWall_container";
import QuestionPostContainer from "./containers/questionPost_container";
import HomePage from "./home_page";
import AskQuestionContainer from "./containers/askQuestion_container";
import EditQuestionContainer from "./containers/editQuestion_container";

export default (props) => {
  return (

    [
      <NavBarContainer key="navBar" currentUser={props.currentUser}/>
      ,
      <div className="emtpySeparator" key="foo"></div>
      ,
      <div className="body" key="body">
        <Switch key="switchForm">
          <AuthRoute path="/signup" component={SignupFormContainer} />
          <AuthRoute path="/login" component={LogInFormContainer} /> 
          <ProtectedRoute path="/editQuestion/:questionId" component={EditQuestionContainer} /> 
          <ProtectedRoute path="/askquestion" component={AskQuestionContainer} /> 
          <Route path="/questions/:questionId" component={QuestionPostContainer} />          
          <Route path="/questions" component={QuestionWallContainer} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
      , 
    ]
  )
};