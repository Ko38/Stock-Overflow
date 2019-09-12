import React from "react";
import { Link } from "react-router-dom";
import SideBar from "./sideBar";
import TestComponent from "./testComponent";

export default class QuestionWall extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestions();
    this.props.fetchAllUsers();
  }

  questionItems() {
    let questions = Object.values(this.props.questions).sort((a,b) => {
      return b.updated_at - a.updated_at;
    });

    return questions.map(question => {
      let link = `/questions/${question.id}`;
      let username;
      let user = this.props.users[question.author_id];
      if (user) {
        username = user.username;
      }
      return (
        <li className="questionItem" key={question.id}>

          <div className="questionSummary">
            <Link to={link}>
              {question.title}
            </Link>
            <div className="questionInfo">
              asked: {question.created_at.toString()} <br />
              updated: {question.updated_at.toString()} <br />
              author: {username}
            </div>
          </div>

        </li>
      );
    });
  }

  render() {

    let questions = this.questionItems();
    return (
      <div className="questionWall">
        <SideBar />
      
        <div className="mid">
          <div className="questionHeader">
            All Questions
            <Link to="/askquestion" className="askQuestionButton">
              Ask Question
            </Link>
          </div>
          
          <ul className="questionList">
            {questions}
          </ul>

        </div>
      </div>
    );
  }
}