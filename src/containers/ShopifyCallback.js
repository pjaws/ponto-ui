import { connect } from 'react-redux';
import ShopifyCallback from '../components/ShopifyCallback';

const mapStateToProps = state => ({
  search: state.router.location.search,
  accessToken: state.auth.accessToken,
});

export default connect(mapStateToProps)(ShopifyCallback);
