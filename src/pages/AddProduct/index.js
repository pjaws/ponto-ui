import { connect } from 'react-redux';
import AddProduct from './AddProduct';

const mapStateToProps = () => ({
  product: {
    title: '',
    description: '',
    options: [],
    type: '',
    vendor: '',
    tags: [],
    variants: [
      {
        title: '',
        sku: '',
        inventoryQuantity: 0,
        position: 1,
        priceLevels: [
          { name: 'Cost', price: 0.0 },
          { name: 'Retail', price: 0.0 },
        ],
      },
    ],
  },
});

export default connect(mapStateToProps)(AddProduct);
