import { connect } from 'react-redux';
import { connectToShopify } from '../actions';
import ShopifyConnect from '../components/ShopifyConnect';

const mapStateToProps = state => ({
  currPage: state.router.location.pathname,
});

const mapDispatchToProps = dispatch => ({
  connectToShopify: (shop, currPage) =>
    dispatch(connectToShopify(shop, currPage)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShopifyConnect);
