export const signup = (user) => {
  return $.ajax({
    method: "Post",
    url: "/api/users",
    data: { user }
  });
};

export const logIn = (user) => {
  return $.ajax({
    method: "Post",
    url: "/api/sessions",
    data: { user }
  });
};

export const logOut = () => {
  console.log("LOGOUT")
  return $.ajax({
    method: "delete",
    url: "/api/sessions"
  });
};