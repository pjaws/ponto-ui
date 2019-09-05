import React from 'react';
import styled from 'styled-components';

const StyledTableHeader = styled.thead`
  font-weight: 800;
  text-align: left;
`;

const TableHeader = ({ children }) => {
  return <StyledTableHeader>{children}</StyledTableHeader>;
};

export default TableHeader;
