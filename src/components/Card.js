import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 0.25rem;
  background-color: #fff;
  box-shadow: 0 0 0 1px rgba(61, 61, 78, 0.05),
    0 1px 3px 0 rgba(61, 61, 78, 0.15);
`;

const Card = ({ children, ...rest }) => {
  return <StyledCard {...rest}>{children}</StyledCard>;
};

export default Card;
