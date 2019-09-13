import { connect } from "react-redux";
import QuestionWall from "../questionWall";
import { fetchQuestions, deleteQuestion} from "../../actions/question_actions";
import {fetchAllUsers} from "../../actions/user_actions";

const mapStateToProps = (state) => {
  return {
    questions: state.entities.questions,
    users: state.entities.users,
    session: state.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: () => { return dispatch(fetchQuestions());},
    fetchAllUsers: () => { return dispatch(fetchAllUsers());},
    deleteQuestion: (id) => { return dispatch(deleteQuestion(id)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionWall);