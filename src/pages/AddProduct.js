import React from 'react';
import AppPageHeader from '../components/AppPageHeader';
import AppPageSection from '../components/AppPageSection';
import ProductForm from '../components/ProductForm';

const AddProduct = ({ product }) => {
  return (
    <>
      <AppPageHeader title="Add Product" btnLabel="Save" />
      <AppPageSection>
        <ProductForm product={product} />
      </AppPageSection>
    </>
  );
};

export default AddProduct;
