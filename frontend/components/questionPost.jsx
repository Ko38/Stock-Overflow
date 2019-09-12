import React from "react";
import SideBar from "./sideBar";

export default class QuestionPost extends React.Component {
  constructor(props){
    super(props);
  } 

  componentDidMount(){
console.log("mounted");
    this.props.fetchQuestions();
  }

  render(){
    let title;
    if (this.props.question){
      title = this.props.question.title;
    }
    return(
      <div className="questionWall">
        <SideBar />
        <h1>Post</h1>
        {title}
      </div>
      
    );
  }
}