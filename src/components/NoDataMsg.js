import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';
import Card from './Card';

const StyledNoDataMsg = styled.div`
  max-width: 660px;
  margin: 0 auto;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.gray[7]};
  text-align: center;
  line-height: 1.2;
`;

const NoDataMsg = ({ resource }) => {
  return (
    <Card>
      <StyledNoDataMsg>
        Looks like you don't have any {resource} yet. Add one or import to get
        started!
      </StyledNoDataMsg>
    </Card>
  );
};

export default NoDataMsg;
