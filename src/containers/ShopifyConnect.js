import { connect } from 'react-redux';
import ShopifyConnect from '../components/ShopifyConnect';

const mapStateToProps = state => ({
  accessToken: state.auth.accessToken,
});

export default connect(mapStateToProps)(ShopifyConnect);
