import * as QuestionsUtils from  "../util/questions_util";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const RECEIVE_POSTED_QUESTION = "RECEIVE_POSTED_QUESTION";
export const RECEIVE_ANSWER = "RECEIVE_ANSWER";

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

const receiveQuestion = (question) => {
  return {
    type: RECEIVE_QUESTION,
    question
  };
};

const receiveAnswer = (answer) => {
  return {
    type: RECEIVE_ANSWER,
    answer
  }
}

export const fetchQuestion = (id) => {
  return(dispatch) => {
    return QuestionsUtils.fetchQuestion(id).then((question) => {
      return dispatch(receiveQuestion(question));
    });
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

export const answerQuestion = (answer) => {
  return (dispatch) => {
    return QuestionsUtils.answerQuestion(answer).then((answer) => {
      return dispatch(receiveAnswer(answer));
    });
  };
};