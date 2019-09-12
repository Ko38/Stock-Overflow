import { connect } from "react-redux";
import QuestionWall from "../questionWall";
import { fetchQuestions} from "../../actions/question_actions";
import {fetchAllUsers} from "../../actions/user_actions";

const mapStateToProps = (state) => {
  return {
    questions: state.entities.questions,
    users: state.entities.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: () => { dispatch(fetchQuestions());},
    fetchAllUsers: () => { dispatch(fetchAllUsers());}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionWall);