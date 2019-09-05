import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import ProductsTable from './ProductsTable';

const Products = ({ getAllProducts, products }) => {
  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);
  return (
    <>
      <Title size='2' level='1'>
        Products
      </Title>
      {products && <ProductsTable products={products} />}
    </>
  );
};

Products.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
  products: PropTypes.array,
};

export default Products;
