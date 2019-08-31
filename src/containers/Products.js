import { connect } from 'react-redux';
import { getAllProducts } from '../actions';
import Products from '../components/Products';

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = {
  getAllProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
