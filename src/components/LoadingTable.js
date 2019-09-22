import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';
import Card from './Card';

const StyledLoadingTable = styled.div`
  height: 529px;
  background-repeat: no-repeat;
  background-image: linear-gradient(${colors.gray[1]} 24px, transparent 0),
    linear-gradient(${colors.gray[1]} 24px, transparent 0),
    linear-gradient(${colors.gray[1]} 24px, transparent 0),
    linear-gradient(${colors.gray[1]} 24px, transparent 0),
    linear-gradient(${colors.gray[1]} 24px, transparent 0),
    linear-gradient(${colors.gray[1]} 24px, transparent 0),
    linear-gradient(${colors.gray[1]} 24px, transparent 0),
    linear-gradient(${colors.gray[1]} 24px, transparent 0),
    linear-gradient(${colors.gray[1]} 24px, transparent 0),
    linear-gradient(${colors.gray[1]} 24px, transparent 0);
  background-size: 100% 40px, 100% 40px, 100% 40px, 100% 40px, 100% 40px,
    100% 40px, 100% 40px, 100% 40px, 100% 40px, 100% 40px;
  background-position: 0 48px, 0 96px, 0 144px, 0 192px, 0 240px, 0 288px,
    0 336px, 0 384px, 0 432px, 0 480px;
`;

const LoadingTable = () => {
  return (
    <Card>
      <StyledLoadingTable />
    </Card>
  );
};

export default LoadingTable;
