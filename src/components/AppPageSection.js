import React from 'react';
import styled from 'styled-components';

const StyleAppPageSection = styled.section`
  margin-top: 2rem;
`;

const AppPageSection = ({ children }) => {
  return <StyleAppPageSection>{children}</StyleAppPageSection>;
};

export default AppPageSection;
