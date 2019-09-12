import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_USERS } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        [action.currentUser.id]: action.currentUser
      };
    case RECEIVE_ALL_USERS:
      let users = action.users;
      users.forEach( (user) => {
        newState[user.id] = user;
      })
      return newState;
    default:
      return state;
  }
};

export default usersReducer;