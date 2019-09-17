
export const answerQuestion = (answer) => {
  return $.ajax({
    method: "POST",
    url: "/api/answers",
    data: { answer }
  });
};

export const updateAnswer = (answerId, body) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/answers/${answerId}`,
    data: {
      answer: {
        body: body
      }
    }
  });
};

export const deleteAnswer = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/answers/${id}`
  });
};

export const upvoteAnswer = (id) => {
  return $.ajax({
    method: "POST",
    url: `/api/answers/${id}/upvote`
  });
};

export const downvoteAnswer = (id) => {
  return $.ajax({
    method: "POST",
    url: `/api/answers/${id}/downvote`
  });
};