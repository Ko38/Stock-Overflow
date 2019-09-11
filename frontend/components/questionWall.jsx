import React from "react";

export default class QuestionWall extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    console.log(Object.values(this.props.questions));
    let questions = Object.values(this.props.questions).map(question => {
      return (
        <li key={question.id}>{question.title}</li>
      );
    });
    return (
      <div className="questionWall">
        <ul>
          {questions}
        </ul>
      </div>
    );
  }
}