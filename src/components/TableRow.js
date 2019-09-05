import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

const StyledTableRow = styled.tr`
  cursor: pointer;

  &:hover {
    background: ${props => (props.hover ? colors.gray[1] : 'inherit')};
  }
  &:last-child > td {
    border-bottom: none;
  }
`;

const TableRow = ({ children }) => <StyledTableRow>{children}</StyledTableRow>;

export default TableRow;
