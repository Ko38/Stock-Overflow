import React from "react";
import SideBar from "./sideBar";

export default class QuestionPost extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      body: "",
      editButtonText: "Edit",
      selectedPage: 0,
      errorMessage: ""
    };
    this.answerTextareas = [];
  } 

  componentDidMount(){
    let id = this.props.match.params.questionId;
    this.props.fetchQuestion(id);
    this.props.fetchAllUsers();
  }

  onInputChange(type) {
    return (e) => {
      this.setState({
        [type]: e.target.value
      });
    };
  }

  onSubmit(e) {

    e.preventDefault();
    this.props.answerQuestion(Object.assign({}, this.state)).then((answer) => {
      this.props.history.push(`/questions/${this.props.question.id}`)
    }, (error) => {
        this.setState({ errorMessage: error.responseJSON[0] });
    });
  }

  updateAnswer(answerId, newAnswerBody){
    this.props.updateAnswer(answerId, newAnswerBody);
  }

  editAnswerOnClick(answerId) {
    if(this.state.editButtonText === "Save"){
      this.updateAnswer(answerId, this.answerTextareas[answerId].value);
    }
    this.answerTextareas[answerId].disabled = !this.answerTextareas[answerId].disabled;
    let newState = Object.assign({}, this.state);
    if (this.answerTextareas[answerId].disabled){
      newState.editButtonText = "Edit";
    } else {
      newState.editButtonText = "Save";
    }
    this.setState(newState);
  }

  deleteAnswerOnClick(answerId){
    this.props.deleteAnswer(answerId);
  }

  upvoteQuestion() {
    this.props.upvoteQuestion(this.props.question.id);
  }

  downvoteQuestion() {
    this.props.downvoteQuestion(this.props.question.id);
  }

  upvoteAnswer(answer) {
    this.props.upvoteAnswer(answer.id);
  }

  downvoteAnswer(answer) {
    this.props.downvoteAnswer(answer.id);
  }

  questionVoteCount() {
    if (!this.props.question) {
      return 0;
    }
    return this.props.question.upvotes.length - this.props.question.downvotes.length;
  }

  answerVoteCount(answer) {

    if (!answer) {
      return 0;
    }
    return answer.upvotes.length - answer.downvotes.length;
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

  changePage(pageNumber) {
    this.setState({
      selectedPage: pageNumber
    });
  }

  render() {
    let title;
    let created_at;
    let body;
    let answers;
    let author_id;
    let users = this.props.users; 
    let view_count;
    let updated_at;
    let username;
    let pagination;
    let totalAnswerCount = 0;
    if (this.props.question){
      updated_at = this.props.question.updated_at;
      view_count = this.props.question.view_count;
      author_id = this.props.question.author_id;
      title = this.props.question.title;
      created_at = this.props.question.created_at;
      body = this.props.question.body;
      if (users[author_id]){
        username = users[author_id].username;
      }
      
      this.state.question_id = this.props.question.id;
      if (this.props.question.answers){
        if (Object.keys(this.props.question.answers).length > 0){
          let maxPageNumber = Math.ceil(Object.keys(this.props.question.answers).length / 5);
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





        let tempAnswers = Object.values(this.props.question.answers).sort((a,b) => {
          return new Date(a.created_at) - new Date(b.created_at);
        });
        totalAnswerCount = tempAnswers.length;
        tempAnswers = tempAnswers.slice(this.state.selectedPage*5, this.state.selectedPage*5+5 );
        answers = tempAnswers.map((answer) => {
          let editButton;
          let deleteButton;
          if (answer.author_id == this.props.session.currentUserId) {
            editButton = (
              <button className="editButton2" onClick={() => { this.editAnswerOnClick.bind(this)(answer.id) }} >{this.state.editButtonText}</button>
            );

            deleteButton = (
              <button className="deleteButton" onClick={() => { this.deleteAnswerOnClick.bind(this)(answer.id) }} >Delete</button>
            );
          }
          return(
            <li key={answer.id} >
              <div className="entireAnswerPost">
                <div className="voteSection">
                  {/* <button onClick={() => {this.upvoteAnswer.bind(this)(answer)}} className="voteBtn"><i className="fa fa-arrow-up voteLogo"></i></button> */}
                  <svg onClick={() => { this.upvoteAnswer.bind(this)(answer) }} className="svg-icon m0 iconArrowUpLg voteBtn" width="36" height="36" viewBox="0 0 36 36">
                    <path d="M2 26h32L18 10 2 26z" className="voteBtnIcon"></path>
                  </svg>
                  <br /> {this.answerVoteCount(answer)} {/*this.answerVoteCount(answer) === 1 ? "vote" : "votes"*/} <br />
                  {/* <button onClick={() => {this.downvoteAnswer.bind(this)(answer)}} className="voteBtn"><i className="fa fa-arrow-down voteLogo"></i></button> */}
                  <svg onClick={() => { this.downvoteAnswer.bind(this)(answer) }} aria-hidden="true" className="svg-icon m0 iconArrowDownLg voteBtn" width="36" height="36" viewBox="0 0 36 36">
                    <path d="M2 10h32L18 26 2 10z" className="voteBtnIcon"></path>
                  </svg>
                </div>
                <div className="answerSection">
                  <textarea ref={(textarea => {this.answerTextareas[answer.id] = textarea;})} 
                    className="answerPost" defaultValue={answer.body}  disabled>
                  </textarea> <br/>
                  <div className="answerInfo">
                  {/* answered by {users[answer.author_id] ? users[answer.author_id].username : undefined} */}
                    answered {this.timeText(new Date(answer.created_at))} <br />
                    <div className="userNameContainer">
                      <img src="/assets/userIcon.png" alt="" className="userIcon" />
                      <div className="userName">
                        &nbsp; {users[answer.author_id] ? users[answer.author_id].username : undefined} <br />
                      </div>
                    </div>
                    {deleteButton} {editButton} 
                  </div>
                </div>
              </div>
              <hr/>
            </li>

          );
        });
      }
      
    }
      
    let answerForm = this.props.session.currentUserId ? (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label className="robotoFont" className="questionWallLabels">Your Answer
              <textarea className="bodyTextArea" onChange={this.onInputChange.bind(this)("body")}></textarea>
        </label>
        <input type="submit" value="Post Your Answer" />
        <label className="error-text">{this.state.errorMessage}</label>
      </form>
    ) : undefined;

    return(
      <div className="questionWall">
        <SideBar />
        <div className="mid">
          
          <div className="questionTitle">
            {title}
          </div>
          <div className="questionBasicInfo">
            {/* Asked {created_at ? new Date(created_at).toString() : undefined}  &nbsp; */}
            Asked {this.timeText(new Date(created_at))} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* By {users[author_id] ? users[author_id].username : undefined} &nbsp; */}
            Viewed {view_count} {view_count === 1 ? "time" : "times"}
          </div> <br/>
          <hr className="separator"/>
          <div className="questionBody">
            <div className="voteSection">
              {/* <button onClick={this.upvoteQuestion.bind(this)} className="voteBtn">
                <i className="fa fa-arrow-up voteLogo"></i>
              </button> */}
                
              <svg onClick={this.upvoteQuestion.bind(this)} className="svg-icon m0 iconArrowUpLg voteBtn" width="36" height="36" viewBox="0 0 36 36">
                  <path d="M2 26h32L18 10 2 26z" className="voteBtnIcon"></path>
                </svg>
              <br /> {this.questionVoteCount()} {/*this.questionVoteCount() === 1 ? "vote" : "votes"*/} <br/>
              {/* <button onClick={this.downvoteQuestion.bind(this)} className="voteBtn">
                <i className="fa fa-arrow-down voteLogo"></i>
              </button> */}
              <svg onClick={this.downvoteQuestion.bind(this)} aria-hidden="true" className="svg-icon m0 iconArrowDownLg voteBtn" width="36" height="36" viewBox="0 0 36 36">
                  <path d="M2 10h32L18 26 2 10z" className="voteBtnIcon"></path>
                </svg>
            </div>
            <div className="questionBodyContent robotoFont">
              <div>
              {body}
              </div>
              <div className="questionInfoContainer">
                <div className="questionInfo">
                  {/* asked: {question.created_at ? question.created_at.toString() : undefined} <br /> */}
                  asked {this.timeText(new Date(created_at))} <br />
                  {/* updated: {question.updated_at ? question.updated_at.toString() : undefined} <br /> */}
                  {/* updated {this.timeText(new Date(updated_at))} <br /> */}
                  <div className="userNameContainer">
                    <img src="/assets/userIcon.png" alt="" className="userIcon" />
                    <div className="userName">
                      &nbsp; {username} <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br/>
          <hr className="separator" />
          <div>
            <div className="answerCount robotoFont">
              {totalAnswerCount} {totalAnswerCount === 1 ? "Answer" : "Answers"}
            </div>
            <ul className="answerListItems">
            {answers}
            </ul>
          </div>
          {pagination}
          {answerForm}
          
        </div>
      </div>
      
    );
  }
}