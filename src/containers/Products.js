import { connect } from 'react-redux';
import { feathersServices } from '../feathers';
import Products from '../components/Products';

const mapStateToProps = state => ({
  products: state.products.data,
});

const mapDispatchToProps = dispatch => ({
  getAllProducts: () => dispatch(feathersServices.products.find()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
