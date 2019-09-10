import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from './store';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    store = configureStore({
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUserId: window.currentUser.id }
    });
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  let root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});