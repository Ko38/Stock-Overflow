import { RECEIVE_QUESTIONS } from "../actions/question_actions";

const questionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      action.questions.forEach(question => {
        newState[question.id] = question;
      });
      return newState;
    default:
      return state;
  }
};

export default questionsReducer;