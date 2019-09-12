import React from 'react';
import styled from 'styled-components';

const StyledCardTitle = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  margin: -0.5rem 0 0.5rem 0;
`;

const CardTitle = ({ children }) => {
  return <StyledCardTitle>{children}</StyledCardTitle>;
};

export default CardTitle;
