import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import SideNav from '../components/SideNav';
import Products from '../containers/Products';
import Product from '../containers/Product';
import AddProduct from '../pages/AddProduct';

const StyledAppLayout = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  grid-template-areas: 'nav content';
  grid-template-rows: 100%;
  grid-template-columns: 6rem 1fr;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 12rem 1fr;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: content;
  padding: 2rem;
`;

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <SideNav />
      <StyledContainer>
        <Route exact path='/app/products' component={Products} />
        <Route path='/app/products/new' component={AddProduct} />
        <Route path='/app/products/:productId([0-9]+)' component={Product} />
      </StyledContainer>
    </StyledAppLayout>
  );
};

export default AppLayout;
