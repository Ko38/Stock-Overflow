import React from "react";
import SideBar from "./sideBar";

export default class QuestionPost extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      answer: ""
    };
  } 

  componentDidMount(){
    this.props.fetchQuestions();
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
  }

  render(){
    let title;
    let created_at;
    let body;
    if (this.props.question){
      title = this.props.question.title;
      created_at = this.props.question.created_at;
      body = this.props.question.body;
    }
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
          <form onSubmit={this.onSubmit.bind(this)}>
            <label>Your Answer:
              <textarea className="bodyTextArea" onChange={this.onInputChange.bind(this)("answer")}></textarea>
            </label>
            <input type="submit" value="Post Your Answer" />
            <label>{this.state.errorMessage}</label>
          </form>
        </div>
      </div>
      
    );
  }
}