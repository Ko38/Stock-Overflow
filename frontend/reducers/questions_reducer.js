import { RECEIVE_QUESTIONS, RECEIVE_ANSWER, RECEIVE_QUESTION, REMOVE_ANSWER, REMOVE_QUESTION } from "../actions/question_actions";
import merge from 'lodash/merge';

const questionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      let questions = action.questions;

      questions.forEach(question => {
        
        question.created_at = new Date(question.created_at);
        question.updated_at = new Date(question.updated_at);
        if (question.answers){
          let answers = question.answers.slice();
          question.answers = {};
          answers.forEach(answer => {
            question.answers[answer.id] = answer;
          });
        }
        
        newState[question.id] = question;
      });
      return newState;
    case RECEIVE_ANSWER:
      let answer = action.answer;
      if (newState[answer.question_id].answers){
        newState[answer.question_id].answers[answer.id] = answer;
      } else {
        newState[answer.question_id].answers = {
          [answer.id]: answer
        };
      }
      return newState;
    case RECEIVE_QUESTION:
      let question = Object.assign({}, action.question);
      
      newState[question.id] = Object.assign({}, question);
      newState[question.id].answers = {};
      question.answers.forEach(answer => {
        newState[question.id].answers[answer.id] = answer;
      });
      return newState;
    case REMOVE_ANSWER:
      let questionId = action.answer.question_id;
      delete newState[questionId].answers[action.answer.id];
      // let newAnswers = newState[questionId].answers.slice();

      // for (let i = 0; i < newAnswers.length; i++) {
      //   if (newAnswers[i].id === action.answer.id){
      //     newAnswers.splice(i,1);
      //   }
      //   newState[questionId].answers = newAnswers;
      // }
      // newState[questionId].answers = newState[questionId].answers.filter(answer => {
      //   return answer.id !== action.answer.id;
      // });
      // newState[questionId].answers[0].body = "Yes";
      return newState;
    case REMOVE_QUESTION:
      let question_id = action.question.id;
      delete newState[question_id];
      return newState;
    default:
      return state;
  }
};

export default questionsReducer;