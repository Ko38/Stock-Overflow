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

export const deleteQuestion = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/questions/${id}`
  });
};

export const updateQuestion = (question) => {

  return $.ajax({
    method: "PATCH",
    url: `/api/questions/${question.id}`,
    data: {
      question: {
        title: question.title,
        body: question.body
      }
    }
  });
};

export const upvoteQuestion = (id) => {
  return $.ajax({
    method: "POST",
    url: `/api/questions/${id}/upvote`
  });
};

export const downvoteQuestion = (id) => {
  return $.ajax({
    method: "POST",
    url: `/api/questions/${id}/downvote`
  });
};

// export const fetchQuestion = () => {
//   return $.ajax({
//     method: "GET",
//     url: "/api/questions"
//   });
// };