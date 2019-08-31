import { connect } from 'react-redux';
import { signup } from '../actions';
import SignupForm from '../components/SignupForm';

const mapDispatchToProps = dispatch => ({
  signup: creds => dispatch(signup(creds)),
});

export default connect(
  null,
  mapDispatchToProps,
)(SignupForm);
