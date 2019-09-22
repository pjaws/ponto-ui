import { connect } from 'react-redux';
import { feathersServices } from '../feathers';
import Product from '../components/Product';

const mapStateToProps = (state, ownProps) => ({
  product:
    state.products.data.find(
      p => p.id === [ownProps.match.params.productId], // TODO: Normalize state shape and get products by
    ) || {},
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
