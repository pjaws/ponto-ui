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
  > button:last-child {
    margin-left: 2rem;
  }
`;

const AppPageHeader = ({
  title,
  primaryBtnFunction,
  primaryBtnLabel,
  primaryBtnDisabled,
  secondaryBtnFunction,
  secondaryBtnLabel,
  secondaryBtnDisabled,
}) => {
  return (
    <StyledAppPageHeader>
      <TitleWrap>
        <Title size='3' level='1'>
          {title}
        </Title>
      </TitleWrap>
      <ButtonWrap>
        {secondaryBtnFunction && (
          <Button
            type='button'
            label={secondaryBtnLabel}
            disabled={secondaryBtnDisabled}
            onClick={secondaryBtnFunction}
          />
        )}
        {primaryBtnFunction && (
          <Button
            type='button'
            primary
            label={primaryBtnLabel}
            disabled={primaryBtnDisabled}
            onClick={primaryBtnFunction}
          />
        )}
      </ButtonWrap>
    </StyledAppPageHeader>
  );
};

AppPageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  btnFunction: PropTypes.func,
};

export default AppPageHeader;
