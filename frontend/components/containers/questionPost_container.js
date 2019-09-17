import { connect } from "react-redux";
import QuestionPost from "../questionPost";
import { fetchQuestions, answerQuestion, fetchQuestion, updateAnswer, deleteAnswer
  , upvoteQuestion, downvoteQuestion, upvoteAnswer, downvoteAnswer } from "../../actions/question_actions";
import { fetchAllUsers } from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => {
  let questionId = ownProps.match.params.questionId;
  return {
    question: state.entities.questions[questionId],
    session: state.session,
    users: state.entities.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: () => { return dispatch(fetchQuestions()); },
    fetchQuestion: (id) => { return dispatch(fetchQuestion(id)); },
    answerQuestion: (answer) => { return dispatch(answerQuestion(answer)); },
    fetchAllUsers: () => { return dispatch(fetchAllUsers()); },
    updateAnswer: (answerId, newAnswerBody) => { return dispatch(updateAnswer(answerId, newAnswerBody));},
    deleteAnswer: (id) => { return dispatch(deleteAnswer(id));},
    upvoteQuestion: (id) => { return dispatch(upvoteQuestion(id));},
    downvoteQuestion: (id) => { return dispatch(downvoteQuestion(id)); },
    upvoteAnswer: (id) => { return dispatch(upvoteAnswer(id)); },
    downvoteAnswer: (id) => { return dispatch(downvoteAnswer(id)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPost);