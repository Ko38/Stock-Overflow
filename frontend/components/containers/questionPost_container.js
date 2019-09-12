import { connect } from "react-redux";
import QuestionPost from "../questionPost";
import { fetchQuestions } from "../../actions/question_actions";

const mapStateToProps = (state, ownProps) => {
  let questionId = ownProps.match.params.questionId;
  return {
    question: state.entities.questions[questionId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: () => { dispatch(fetchQuestions()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPost);