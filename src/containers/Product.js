import { connect } from 'react-redux';
import { feathersServices } from '../feathers';
import Product from '../components/Product';

const mapStateToProps = (state, ownProps) => ({
  product: state.products.data[ownProps.match.params.productId] || {},
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getProduct: dispatch(
    feathersServices.products.get(ownProps.match.params.productId),
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);
