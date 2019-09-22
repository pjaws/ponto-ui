import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AppPageHeader from './AppPageHeader';
import AppPageSection from './AppPageSection';
import ProductsTable from './ProductsTable';
import NoDataMsg from './NoDataMsg';
import LoadingTable from './LoadingTable';

const Products = ({
  findProducts,
  isLoading,
  addProduct,
  importProducts,
  products,
  linkToProduct,
}) => {
  useEffect(() => {
    findProducts();
  }, [findProducts]);

  return (
    <>
      <AppPageHeader
        title='Products'
        primaryBtnLabel='Add Product'
        primaryBtnFunction={addProduct}
        primaryBtnDisabled={true}
        secondaryBtnLabel='Import Products'
        secondaryBtnFunction={importProducts}
      />
      <AppPageSection>
        {isLoading && <LoadingTable />}
        {!!products.length && (
          <ProductsTable products={products} linkToProduct={linkToProduct} />
        )}
        {!products.length && !isLoading && <NoDataMsg resource='products' />}
      </AppPageSection>
    </>
  );
};

Products.propTypes = {
  findProducts: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  addProduct: PropTypes.func.isRequired,
  importProducts: PropTypes.func.isRequired,
  products: PropTypes.array,
  linkToProduct: PropTypes.func,
};

export default Products;
