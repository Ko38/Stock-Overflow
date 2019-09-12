import * as SessionUtils from '../util/session_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

const receiveAllUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

export const fetchAllUsers = () => {
  return (dispatch) => {
    return SessionUtils.fetchAllUsers().then(users => {
      return dispatch(receiveAllUsers(users));
    });
  };
}