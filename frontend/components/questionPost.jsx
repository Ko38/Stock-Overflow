import React from "react";
import SideBar from "./sideBar";

export default class QuestionPost extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log("Container fetching");
    this.props.fetchQuestions();
  }

  render(){
    return(
      <div className="questionWall">
        <SideBar />
        <h1>Post</h1>
        {this.props.question.title}
      </div>
      
    );
  }
}