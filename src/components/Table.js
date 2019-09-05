import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-color: ${colors.gray[4]};
  font-size: 1rem;
`;

const Table = ({ children }) => {
  return <StyledTable>{children}</StyledTable>;
};

export default Table;
