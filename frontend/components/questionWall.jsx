import React from "react";
import { Link } from "react-router-dom";
import SideBar from "./sideBar";
import TestComponent from "./testComponent";
// import queryString from 'query-string'

export default class QuestionWall extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchQuestions();
    this.props.fetchAllUsers();

  }

  deleteQuestion(id) {
    this.props.deleteQuestion(id);
  }

  filterQuestions(questions){
    
    // const queryStringValues = queryString.parse(this.props.location.search);
    // let searchText = queryStringValues["search"] || "";
    let resultQuestions = {};

    // for( let question of Object.values(questions)) {
    //   if (question.body.includes(searchText) || question.title.includes(searchText)){
    //     resultQuestions[question.id] = question;
    //   }
    // }

    return resultQuestions;
  }

  questionItems() {
    let questions = Object.values(this.filterQuestions(this.props.questions)).sort((a,b) => {
      return b.updated_at - a.updated_at;
    });
    return questions.map(question => {
      let link = `/questions/${question.id}`;
      let username;
      let user = this.props.users[question.author_id];
      if (user) {
        username = user.username;
      }

      let editButton = question.author_id == this.props.session.currentUserId ? 
      (
          <Link to={`/editQuestion/${question.id}`} >Edit</Link>
      ) : undefined;

      let deleteButton = question.author_id == this.props.session.currentUserId ? 
      (
        <button onClick={() => {this.deleteQuestion.bind(this)(question.id);}}>
          Delete
        </button>
      ) : undefined;
      return (
        <li className="questionItem" key={question.id}>

          <div className="questionSummary">
            <Link to={link}>
              {question.title}
            </Link>
            <div className="questionInfo">
              asked: {question.created_at ? question.created_at.toString() : undefined} <br />
              updated: {question.updated_at ? question.updated_at.toString() : undefined} <br />
              author: {username}
              {deleteButton}
              {editButton}
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