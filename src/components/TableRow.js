import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

const StyledTableRow = styled.tr`
  cursor: pointer;

  &:hover {
    background: ${props => (props.hover ? colors.gray[0] : 'inherit')};
  }
  &:last-child > td {
    border-bottom: none;
  }
`;

const TableRow = ({ children, ...rest }) => (
  <StyledTableRow {...rest}>{children}</StyledTableRow>
);

export default TableRow;
