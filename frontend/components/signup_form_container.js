import { connect } from 'react-redux';
import { signup } from '../actions/session_actions';
import SessionForm from './session_form';

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user))
  };
};

const mapStateToProps = (state) => {
  return {
    buttonText: "Sign Up"
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);