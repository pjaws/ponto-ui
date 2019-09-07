import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

const StyledNoDataMsg = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.gray[9]};
`;

const NoDataMsg = ({ resource }) => {
  return (
    <StyledNoDataMsg>
      Looks like you don't have any {resource} yet. Add one or import to get
      started!
    </StyledNoDataMsg>
  );
};

export default NoDataMsg;
