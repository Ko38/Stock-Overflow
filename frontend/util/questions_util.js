export const fetchQuestions = () => {
  return $.ajax({
    method: "GET",
    url: "/api/questions"
  });
};

export const postQuestion = (question) => {
  return $.ajax({
    method: "POST",
    url: "/api/questions",
    data: {question}
  });
};
// export const fetchQuestion = () => {
//   return $.ajax({
//     method: "GET",
//     url: "/api/questions"
//   });
// };