import * as SessionUtils from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    payload: currentUser
  };
}

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
}

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    payload: errors
  };
}

export const signup = (user) => {
  return (dispatch) => {
    return SessionUtils.signup(user).then( (user) => {
        return dispatch(receiveCurrentUser(user));
    });
  }
}


