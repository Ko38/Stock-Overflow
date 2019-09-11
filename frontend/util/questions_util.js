export const fetchQuestions = () => {
  return $.ajax({
    method: "GET",
    url: "/api/questions"
  });
};