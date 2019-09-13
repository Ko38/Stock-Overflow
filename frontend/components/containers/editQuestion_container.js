import { connect } from "react-redux";
import EditQuestionForm from "../editQuestionForm"
import { updateQuestion, fetchQuestion } from "../../actions/question_actions";

const mapStateToProps = (state, ownProps) => {
  let questionId = ownProps.match.params.questionId;
  return {
    question: state.entities.questions[questionId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateQuestion: (question) => {
      return dispatch(updateQuestion(question));
    },
    fetchQuestion: (id) => {
      return dispatch(fetchQuestion(id));
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(EditQuestionForm);