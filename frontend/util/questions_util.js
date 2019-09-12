export const fetchQuestions = () => {
  console.log("Fetching");
  return $.ajax({
    method: "GET",
    url: "/api/questions"
  });
};

// export const fetchQuestion = () => {
//   return $.ajax({
//     method: "GET",
//     url: "/api/questions"
//   });
// };