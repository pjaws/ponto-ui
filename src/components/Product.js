import React, { useEffect } from 'react';
import styled from 'styled-components';
import AppPageHeader from './AppPageHeader';
import AppPageSection from './AppPageSection';
import Card from './Card';
import Container from './Container';
import Column from './Column';

const StyledProductImageContainer = styled.div`
  margin-bottom: 1rem;
  & img {
    max-width: 100%;
  }
`;

const Product = ({ product, getProduct }) => {
  useEffect(() => {
    getProduct(product.id);
  }, [getProduct, product.id]);

  return (
    <>
      <AppPageHeader title={product.title} />
      <AppPageSection>
        <Card>
          <Container direction='row'>
            <Column width='66%'></Column>
            <Column width='34%'>
              <StyledProductImageContainer>
                <img src={product.images[0].src} alt={`${product.title} 1`} />
              </StyledProductImageContainer>
            </Column>
          </Container>
        </Card>
      </AppPageSection>
    </>
  );
};

export default Product;
