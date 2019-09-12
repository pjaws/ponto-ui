import React from 'react';
import styled from 'styled-components';

const StyledColumn = styled.div`
  margin-left: 2rem;
  max-width: ${props => props.width};
  flex-basis: ${props => props.width};

  &:first-child {
    margin-left: 0;
  }
`;

const Column = ({ children, ...rest }) => {
  return <StyledColumn {...rest}>{children}</StyledColumn>;
};

export default Column;
