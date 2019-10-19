import React from 'react';
import AppPageHeader from '../components/AppPageHeader';
import AppPageSection from '../components/AppPageSection';
import ShopifyConnect from '../components/ShopifyConnect';

const ImportProducts = () => {
  return (
    <>
      <AppPageHeader title="Import Products" />
      <AppPageSection>
        <ShopifyConnect />
      </AppPageSection>
    </>
  );
};

export default ImportProducts;
