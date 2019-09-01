import { connect } from 'react-redux';
import { login } from '../actions';
import LoginForm from '../components/LoginForm';

const mapDispatchToProps = dispatch => ({
  login: creds => dispatch(login(creds)),
});

export default connect(
  null,
  mapDispatchToProps,
)(LoginForm);
