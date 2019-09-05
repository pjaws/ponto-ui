import React from 'react';
import styled from 'styled-components';

const StyledTableHeaderCell = styled.th`
  padding: 0.5rem;
`;

const TableHeaderCell = ({ children }) => {
  return <StyledTableHeaderCell>{children}</StyledTableHeaderCell>;
};

export default TableHeaderCell;
