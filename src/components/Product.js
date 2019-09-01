import React, { useEffect } from 'react';

const Product = ({ product, getProduct }) => {
  useEffect(() => {
    getProduct(product.id);
  }, [getProduct, product.id]);

  return (
    <>
      <title level={1} size={1}>
        {product.title}
      </title>
    </>
  );
};

export default Product;
