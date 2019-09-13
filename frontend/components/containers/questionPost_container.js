import { connect } from "react-redux";
import QuestionPost from "../questionPost";
import { fetchQuestions, answerQuestion, fetchQuestion } from "../../actions/question_actions";

const mapStateToProps = (state, ownProps) => {
  let questionId = ownProps.match.params.questionId;
  return {
    question: state.entities.questions[questionId],
    session: state.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: () => { return dispatch(fetchQuestions()); },
    fetchQuestion: (id) => { return dispatch(fetchQuestion(id)); },
    answerQuestion: (answer) => { return dispatch(answerQuestion(answer)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPost);