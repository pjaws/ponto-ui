import React from 'react';
import styled from 'styled-components';
import { Home, Basket, Cart } from 'grommet-icons';
import SideNavButton from './SideNavButton';
import colors from '../utils/colors';

const StyledSideNav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${colors.gray[8]};
  color: #fff;
`;

const SideNav = () => {
  return (
    <StyledSideNav>
      <SideNavButton path='/app/dashboard' Icon={Home} label='Dashboard' />
      <SideNavButton path='/app/products' Icon={Basket} label='Products' />
      <SideNavButton path='/app/orders' Icon={Cart} label='Orders' />
    </StyledSideNav>
  );
};

export default SideNav;
