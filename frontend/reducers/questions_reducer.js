import { RECEIVE_QUESTIONS } from "../actions/question_actions";

const questionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      let questions = action.questions;

      questions.forEach(question => {
        question.created_at = new Date(question.created_at);
        question.updated_at = new Date(question.updated_at);
        newState[question.id] = question;
      });
      return newState;
    default:
      return state;
  }
};

export default questionsReducer;