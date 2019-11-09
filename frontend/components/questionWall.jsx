import React from "react";
import { Link } from "react-router-dom";
import SideBar from "./sideBar";
import TestComponent from "./testComponent";
// import queryString from 'query-string'

export default class QuestionWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPage : 0,
      questions: null
    };
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
      if (question.body.includes(searchText.toLowerCase()) || question.title.includes(searchText)){
        resultQuestions[question.id] = question;
      }
    }
    return resultQuestions;
  }

  timeText(created_at) {
    let diff = new Date() - created_at;
    let diffSeconds = Math.ceil(diff / 1000);
    if (diffSeconds < 60){
      return `${diffSeconds} seconds ago`;
    }
    let diffMinutes = Math.ceil(diffSeconds / 60);
    if (diffMinutes < 60) {
      return `${diffMinutes} minutes ago`;
    }

    let diffHours = Math.ceil(diffMinutes / 60);
    if (diffHours < 24) {
      return `${diffHours} hours ago`;
    }

    let diffDays = Math.ceil(diffHours / 24);
    if (diffDays < 30) {
      return `${diffDays} days ago`;
    }

    let diffMonths = Math.ceil(diffDays / 30)
    // if (diffMonths < 12) {
      return `${diffMonths} months ago`;
    // }

    // let diffYears = Math.ceil(diffMonths / 12);
    // return `${diffYears} years ago`;
  }

  questionItems(selectedPage, questions) {

    // let questions = Object.values(this.filterQuestions(this.props.questions)).sort((a,b) => {
    //   return b.updated_at - a.updated_at;
    // });
    questions = questions.slice(selectedPage * 5, selectedPage * 5 + 5);
    return questions.map(question => {
      let link = `/questions/${question.id}`;
      let username;
      let user = this.props.users[question.author_id];
      if (user) {
        username = user.username;
      }

      let editButton = question.author_id == this.props.session.currentUserId ? 
      (
          <Link className="editButton1" to={`/editQuestion/${question.id}`} > Edit </Link>
      ) : undefined;

      let deleteButton = question.author_id == this.props.session.currentUserId ? 
      (
          <button className="deleteButton" onClick={() => {this.deleteQuestion.bind(this)(question.id);}}>
          Delete
        </button>
      ) : undefined;
      let vote_count = question.upvotes.length - question.downvotes.length;
      let view_count = question.view_count;

      return (
        <li className="questionItem" key={question.id}>

          <div className="questionSummary">
            <span className="statsContainer">
              <div className="stats">
                <div className="votes">
                  <strong>{vote_count}</strong> <br/>{vote_count === 1 ? "vote" : "votes"} &nbsp;
                </div>
                <div className="answers">
                  <strong>{question.answer_count}</strong> <br/>{question.answer_count === 1 ? "answer" : "answers"} &nbsp;
                </div>
              </div>
              <div className="views">
                {view_count} {view_count === 1 ? "view" : "views"} &nbsp;
              </div>
            </span>
            <div className="rightContainer">
              <div>
                <Link to={link} className="titleText">
                  {question.title}
                </Link>
              </div>
              <div className="questionInfoContainer">
                <div className="questionInfo">
                  {/* asked: {question.created_at ? question.created_at.toString() : undefined} <br /> */}
                  asked {this.timeText(question.created_at)} <br/>
                  {/* updated: {question.updated_at ? question.updated_at.toString() : undefined} <br /> */}
                  updated {this.timeText(question.updated_at)} <br />
                  <div className="userNameContainer">
                      <img src="/assets/userIcon.png" alt="" className="userIcon" />
                    <div className="userName">
                      &nbsp; {username} <br/>
                    </div>
                  </div>
                  {deleteButton}
                  {editButton}
                </div>
              </div>
            </div>
          </div>

        </li>
      );
    });
  }

  changePage(pageNumber) {
    this.setState({
      selectedPage: pageNumber
    }); 
  }

  render() {
    let questions = Object.values(this.filterQuestions(this.props.questions)).sort((a,b) => {
      return b.updated_at - a.updated_at;
    });
    let pagination = <div></div>;
    if (Object.keys(questions).length > 0){
      let maxPageNumber = Math.ceil(Object.keys(questions).length / 5);
      let pageNumbers = new Array(maxPageNumber);
      for(let i = 0; i < pageNumbers.length; i++){
        pageNumbers[i] = i;
      }
      pagination = (
        <div className="paginationContainer">
          <div className="pagination">
          {(pageNumbers).map((x) => {
            return (<button key={x} onClick={() => {this.changePage.bind(this)(x) }}>{x}</button>);
          })}
          </div>
        </div>
      );
      if (pageNumbers.length === 1){
        pagination = undefined;
      }
    }
    let questionItems = this.questionItems(this.state.selectedPage, questions);
    return (
      <div className="questionWall robotoFont">
        <SideBar />
      
        <div className="mid">
          <div className="questionHeader">
            All Questions
            <Link to="/askquestion" className="askQuestionButton">
              Ask Question
            </Link>
          </div>
          
          <ul className="questionList">
            {questionItems}
          </ul>
          {pagination}

        </div>
        <div>he</div>
      </div>
    );
  }
}