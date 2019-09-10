import { connect } from "react-redux";
import { logIn } from "../../actions/session_actions";
import LogInForm from "../logIn_form";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: (user) => {
      return dispatch(logIn(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);