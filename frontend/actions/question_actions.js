import * as QuestionsUtils from  "../util/questions_util";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_POSTED_QUESTION = "RECEIVE_POSTED_QUESTION";

const receivePostedPostQuestion = (question) => {
  return {
    type: RECEIVE_POSTED_QUESTION,
    question
  };
}

const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
};

export const fetchQuestions = () => {
  return (dispatch) => {
    return QuestionsUtils.fetchQuestions().then((questions) => {
      return dispatch(receiveQuestions(questions));
    });
  };
};

export const askQuestion = (question) => {
  return (dispatch) => {
    return QuestionsUtils.postQuestion(question).then((question) => {
      return dispatch(receivePostedPostQuestion(question));
    });
  };
};