import React from "react";
import { Link } from "react-router-dom";
import SideBar from "./sideBar";
export default class QuestionWall extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {

    let questions = Object.values(this.props.questions).map(question => {
      let link = `/questions/${question.id}`;
      return (
        <li className="questionItem" key={question.id}>
          <Link to={link}>
            {question.title}
          </Link>
        </li>
      );
    });
    return (
      <div className="questionWall">
        <SideBar />
        <div className="mid">
          <div className="questionHeader">Questions</div>
          <ul className="questionList">
            {questions}
          </ul>

        </div>

      </div>
    );
  }
}