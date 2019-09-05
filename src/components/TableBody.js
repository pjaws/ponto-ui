import React from 'react';
import styled from 'styled-components';

const StyledTableBody = styled.tbody``;

const TableBody = ({ children }) => {
  return <StyledTableBody>{children}</StyledTableBody>;
};

export default TableBody;
