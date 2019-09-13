export const fetchQuestions = () => {
  return $.ajax({
    method: "GET",
    url: "/api/questions"
  });
};

export const fetchQuestion = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/questions/${id}`
  });
};

export const postQuestion = (question) => {
  return $.ajax({
    method: "POST",
    url: "/api/questions",
    data: {question}
  });
};

export const answerQuestion = (answer) => {
  return $.ajax({
    method: "POST",
    url: "/api/answers",
    data: {answer}
  });
};

// export const fetchQuestion = () => {
//   return $.ajax({
//     method: "GET",
//     url: "/api/questions"
//   });
// };