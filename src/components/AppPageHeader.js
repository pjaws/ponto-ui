import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'grommet';
import Title from './Title';

const StyledAppPageHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrap = styled.div`
  /* align-self: flex-start; */
`;

const ButtonWrap = styled.div`
  /* align-self: flex-end; */
`;

const AppPageHeader = ({ title, btnFunction, btnLabel, btnDisabled }) => {
  return (
    <StyledAppPageHeader>
      <TitleWrap>
        <Title size='2' level='1'>
          {title}
        </Title>
      </TitleWrap>
      {btnFunction && (
        <ButtonWrap>
          <Button
            type='button'
            primary
            label={btnLabel}
            disabled={btnDisabled}
            onClick={btnFunction}
          />
        </ButtonWrap>
      )}
    </StyledAppPageHeader>
  );
};

AppPageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  btnFunction: PropTypes.func,
};

export default AppPageHeader;
