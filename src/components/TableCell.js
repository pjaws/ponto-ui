import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

const StyledTableCell = styled.td`
  padding: 0.8rem 0.5rem;
  border-bottom: 1px solid ${colors.gray[4]};
`;

const TableCell = ({ children }) => {
  return <StyledTableCell>{children}</StyledTableCell>;
};

export default TableCell;
