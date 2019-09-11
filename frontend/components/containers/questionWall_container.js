import { connect } from "react-redux";
import QuestionWall from "../questionWall";
import { fetchQuestions} from "../../actions/question_actions";

const mapStateToProps = (state) => {
  return {
    questions: state.entities.questions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: () => { dispatch(fetchQuestions());}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionWall);