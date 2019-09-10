import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignUpForm from '../signUp_form';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);