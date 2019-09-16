import { connect } from 'react-redux';
import { feathersServices } from '../feathers';
import { push } from 'connected-react-router';
import Products from '../components/Products';

const mapStateToProps = state => {
  if (!state.products.queryResult) {
    return {
      error: state.products.isError,
      products: [],
    };
  }
  return {
    products: state.products.queryResult.data,
  };
};

const mapDispatchToProps = dispatch => ({
  getAllProducts: () => dispatch(feathersServices.products.find()),
  addProduct: () => dispatch(push('/app/products/new')),
  importProducts: () => dispatch(push('/app/products/import')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
