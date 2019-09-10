export const signup = (user) => {
  return $.ajax({
    method: "Post",
    url: "/api/users",
    data: { user }
  });
};

export const signin = (user) => {
  return $.ajax({
    method: "Post",
    url: "/api/sessions",
    data: { user }
  });
};

export const logout = () => {
  return $.ajax({
    method: "delete",
    url: "/api/sessions"
  });
};