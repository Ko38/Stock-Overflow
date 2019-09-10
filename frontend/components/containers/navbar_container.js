import { connect } from "react-redux";
import NavBar from "../navbar";
import { logOut} from "../../actions/session_actions";

const mapStateToProps = (state) => {
  let currentUser;
  if (state.session.currentUserId){
    currentUser = state.entities.users[state.session.currentUserId];
  }
  return {
    currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => {
      return dispatch(logOut());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);