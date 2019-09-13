import React from "react";
import SideBar from "./sideBar";

export default class QuestionPost extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: ""
    };
  } 

  componentDidMount(){
    let id = this.props.match.params.questionId;
    this.props.fetchQuestion(id).then(question => {});
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

  render(){
    let title;
    let created_at;
    let body;
    let answers;
    if (this.props.question){
      title = this.props.question.title;
      created_at = this.props.question.created_at;
      body = this.props.question.body;
      this.state.question_id = this.props.question.id;
      if (this.props.question.answers){
        answers = this.props.question.answers.map((answer) => {
          return(
            <li key={answer.id}>
              {answer.body} <br/>
              answered by {answer.author_id}
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
            Asked {created_at ? created_at.toString() : undefined}
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