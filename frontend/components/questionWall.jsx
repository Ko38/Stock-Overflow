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

  parseSearchText(rawQueryString) {
    if(!rawQueryString) {
      return undefined;
    }
    let queryStrings = rawQueryString.substring(1).split("&");
    let entireSearchStrings = queryStrings.filter(str => {
      return str.includes("search=");
    });
    if (entireSearchStrings.length === 0){
      return undefined;
    }
    let entireSearchString = entireSearchStrings[0];
    let searchString = entireSearchString.substring("search=".length);
    return searchString;
  }

  filterQuestions(questions){
    // const queryStringValues = queryString.parse(this.props.location.search);
    // let searchText = queryStringValues["search"] || "";
    let searchText = this.parseSearchText(this.props.location.search) || "";
    let resultQuestions = {};

    for( let question of Object.values(questions)) {
      if (question.body.includes(searchText) || question.title.includes(searchText)){
        resultQuestions[question.id] = question;
      }
    }
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
      let vote_count = question.upvotes.length - question.downvotes.length;
      let view_count = question.view_count;
      console.log(view_count);
      return (
        <li className="questionItem" key={question.id}>

          <div className="questionSummary">
            {question.answer_count} {question.answer_count === 1 ? "answer" : "answers"} &nbsp;
            {vote_count} {vote_count === 1 ? "vote" : "votes"} &nbsp;
            {view_count} {view_count === 1 ? "view" : "views"} &nbsp;
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