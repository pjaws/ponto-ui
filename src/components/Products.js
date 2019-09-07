import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AppPageHeader from './AppPageHeader';
import AppPageSection from './AppPageSection';
import ProductsTable from './ProductsTable';
import NoDataMsg from './NoDataMsg';

const Products = ({ getAllProducts, products }) => {
  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);
  return (
    <>
      <AppPageHeader title='Products' />
      <AppPageSection>
        {products.length && <ProductsTable products={products} />}
        {!products.length && <NoDataMsg resource='products' />}
      </AppPageSection>
    </>
  );
};

Products.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
  products: PropTypes.array,
};

export default Products;
