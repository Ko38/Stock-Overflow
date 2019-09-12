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
  return $.ajax({
    method: "delete",
    url: "/api/sessions"
  });
};

export const fetchAllUsers = () => {
  return $.ajax({
    method: "GET",
    url: "/api/users"
  });
};