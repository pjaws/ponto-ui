import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { findProducts } from '../actions/products';
import Products from '../components/Products';

const mapStateToProps = state => {
  return {
    isLoading: state.products.isLoading,
    products: state.products.data,
  };
};

const mapDispatchToProps = dispatch => ({
  findProducts: filter => dispatch(findProducts(filter)),
  addProduct: () => dispatch(push('/app/products/new')),
  importProducts: () => dispatch(push('/app/products/import')),
  linkToProduct: productId => dispatch(push(`/app/products/${productId}`)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
