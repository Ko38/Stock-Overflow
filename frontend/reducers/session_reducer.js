import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'

const sessionReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.payload.id };
    case LOGOUT_CURRENT_USER:
      return { id: null };
    default:
      return state;
  }
};

export default sessionReducer;