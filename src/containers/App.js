import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(App);
