import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AppPageHeader from './AppPageHeader';
import AppPageSection from './AppPageSection';
import ProductsTable from './ProductsTable';
import NoDataMsg from './NoDataMsg';

const Products = ({ getAllProducts, addProduct, products }) => {
  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <>
      <AppPageHeader
        title='Products'
        btnLabel='Add Product'
        btnFunction={addProduct}
      />
      <AppPageSection>
        {!!products.length && <ProductsTable products={products} />}
        {!products.length && <NoDataMsg resource='products' />}
      </AppPageSection>
    </>
  );
};

Products.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
  products: PropTypes.array,
};

export default Products;
