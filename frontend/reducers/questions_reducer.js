import { RECEIVE_QUESTIONS, RECEIVE_ANSWER, RECEIVE_QUESTION } from "../actions/question_actions";

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
    case RECEIVE_ANSWER:
      let answer = action.answer;
      if (newState[answer.question_id].answers){
        newState[answer.question_id].answers.push(answer);
      } else {
        newState[answer.question_id].answers = [answer];
      }
      return newState;
    case RECEIVE_QUESTION:
      let question = action.question;
      newState[question.id] = question;
      return newState;
    default:
      return state;
  }
};

export default questionsReducer;