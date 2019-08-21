import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

const StyledH1 = styled.h1`
  font-size: ${props => {
    switch (props.size) {
      case '1':
        return '3rem';
      case '2':
        return '2.5rem';
      case '3':
        return '2rem';
      case '4':
        return '1.5rem';
      case '5':
        return '1.25rem';
      case '6':
        return '1rem';
      default:
        return '3rem';
    }
  }};
  font-weight: 400;
  color: ${colors.gray[9]};
  text-align: ${props => props.textAlign};
  line-height: 1.25;
  word-break: break-word;

  :not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;
const StyledH2 = styled.h2`
  font-size: ${props => {
    switch (props.size) {
      case '1':
        return '3rem';
      case '2':
        return '2.5rem';
      case '3':
        return '2rem';
      case '4':
        return '1.5rem';
      case '5':
        return '1.25rem';
      case '6':
        return '1rem';
      default:
        return '2.5rem';
    }
  }};
  font-weight: 400;
  color: ${colors.gray[9]};
  text-align: ${props => props.textAlign};
  line-height: 1.25;
  word-break: break-word;

  :not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;
const StyledH3 = styled.h3`
  font-size: ${props => {
    switch (props.size) {
      case '1':
        return '3rem';
      case '2':
        return '2.5rem';
      case '3':
        return '2rem';
      case '4':
        return '1.5rem';
      case '5':
        return '1.25rem';
      case '6':
        return '1rem';
      default:
        return '2rem';
    }
  }};
  font-weight: 400;
  color: ${colors.gray[9]};
  text-align: ${props => props.textAlign};
  line-height: 1.25;
  word-break: break-word;

  :not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;
const StyledH4 = styled.h4`
  font-size: ${props => {
    switch (props.size) {
      case '1':
        return '3rem';
      case '2':
        return '2.5rem';
      case '3':
        return '2rem';
      case '4':
        return '1.5rem';
      case '5':
        return '1.25rem';
      case '6':
        return '1rem';
      default:
        return '2rem';
    }
  }};
  font-weight: 400;
  color: ${colors.gray[9]};
  text-align: ${props => props.textAlign};
  line-height: 1.25;
  word-break: break-word;

  :not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;
const StyledH5 = styled.h5`
  font-size: ${props => {
    switch (props.size) {
      case '1':
        return '3rem';
      case '2':
        return '2.5rem';
      case '3':
        return '2rem';
      case '4':
        return '1.5rem';
      case '5':
        return '1.25rem';
      case '6':
        return '1rem';
      default:
        return '2rem';
    }
  }};
  font-weight: 400;
  color: ${colors.gray[9]};
  text-align: ${props => props.textAlign};
  line-height: 1.25;
  word-break: break-word;

  :not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;
const StyledH6 = styled.h6`
  font-size: ${props => {
    switch (props.size) {
      case '1':
        return '3rem';
      case '2':
        return '2.5rem';
      case '3':
        return '2rem';
      case '4':
        return '1.5rem';
      case '5':
        return '1.25rem';
      case '6':
        return '1rem';
      default:
        return '2rem';
    }
  }};
  font-weight: 400;
  color: ${colors.gray[9]};
  text-align: ${props => props.textAlign};
  line-height: 1.25;
  word-break: break-word;

  :not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const Subtitle = ({ level, children, ...rest }) => {
  switch (level) {
    case '1':
      return <StyledH1 {...rest}>{children}</StyledH1>;
    case '2':
      return <StyledH2 {...rest}>{children}</StyledH2>;
    case '3':
      return <StyledH3 {...rest}>{children}</StyledH3>;
    case '4':
      return <StyledH4 {...rest}>{children}</StyledH4>;
    case '5':
      return <StyledH5 {...rest}>{children}</StyledH5>;
    case '6':
      return <StyledH6 {...rest}>{children}</StyledH6>;
    default:
      return <StyledH1 {...rest}>{children}</StyledH1>;
  }
};

export default Subtitle;
