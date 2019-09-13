import React from "react";
import SideBar from "./sideBar";

export default class QuestionPost extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      body: "",
      editButtonText: "Edit"
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
      console.log(error);
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

  render() {
    let title;
    let created_at;
    let body;
    let answers;
    let author_id;
    let users = this.props.users; 
    
    if (this.props.question){
      author_id = this.props.question.author_id;
      title = this.props.question.title;
      created_at = this.props.question.created_at;
      body = this.props.question.body;
      this.state.question_id = this.props.question.id;
      if (this.props.question.answers){
        answers = Object.values(this.props.question.answers).map((answer) => {
          let editButton;
          let deleteButton;
          if (answer.author_id == this.props.session.currentUserId) {
            editButton = (
              <button onClick={() => { this.editAnswerOnClick.bind(this)(answer.id) }} >{this.state.editButtonText}</button>
            );

            deleteButton = (
              <button onClick={() => { this.deleteAnswerOnClick.bind(this)(answer.id) }} >Delete</button>
            );
          }
          return(
            <li key={answer.id}>
              <textarea ref={(textarea => {this.answerTextareas[answer.id] = textarea;})} 
              className="answerPost" defaultValue={answer.body}  disabled>
                </textarea> <br/>
              answered by {users[answer.author_id] ? users[answer.author_id].username : undefined}
              {editButton} {deleteButton}
            </li>
          );
        });
      }
      
    }
      
    let answerForm = this.props.session.currentUserId ? (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Your Answer:
              <textarea className="bodyTextArea" onChange={this.onInputChange.bind(this)("body")}></textarea>
        </label>
        <input type="submit" value="Post Your Answer" />
        <label>{this.state.errorMessage}</label>
      </form>
    ) : undefined;

    return(
      <div className="questionWall">
        <SideBar />
        <div className="mid">

          <div className="questionHeader">
            {title}
          </div>
          <div>
            Asked {created_at ? new Date(created_at).toString() : undefined} 
            By {users[author_id] ? users[author_id].username : undefined}
          </div> <br/>
          <div>
            {body}
          </div>
          <div>
            <ul>
            {answers}
            </ul>
          </div>
          {answerForm}
          
        </div>
      </div>
      
    );
  }
}