import * as QuestionsUtils from  "../util/questions_util";
import * as AnswersUtil from "../util/answers_util";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const RECEIVE_POSTED_QUESTION = "RECEIVE_POSTED_QUESTION";
export const RECEIVE_ANSWER = "RECEIVE_ANSWER";
export const REMOVE_ANSWER = "REMOVE_ANSWER";

const removeAnswer = (answer) => {
  return {
    type: REMOVE_ANSWER,
    answer
  };
};

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
    return AnswersUtil.answerQuestion(answer).then((answer) => {
      return dispatch(receiveAnswer(answer));
    });
  };
};

export const updateAnswer = (answerId, body) => {
  return (dispatch) => {
    return AnswersUtil.updateAnswer(answerId, body).then((answer) => {
      return dispatch(receiveAnswer(answer));
    });
  };
};

export const deleteAnswer = (id) => {
  return (dispatch) => {
    return AnswersUtil.deleteAnswer(id).then((answer) => {
      return dispatch(removeAnswer(answer));
    });
  };
};