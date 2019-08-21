import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import colors from '../utils/colors.json';

console.log('colors');
console.log(colors);

const StyledButton = styled.button`
  display: inline-block;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: ${props => {
    switch (props.btnType) {
      case 'primary':
        return colors.base;
      case 'success':
        return colors.teal5;
      case 'error':
        return colors.red5;
      default:
        return 'transparent';
    }
  }};
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 3px;

  :hover {
    cursor: pointer;
    background-color: ${props => {
      switch (props.btnType) {
        case 'primary':
          return darken(0.2, colors.base);
        case 'success':
          return darken(0.2, colors.teal5);
        case 'error':
          return darken(0.2, colors.red5);
        default:
          return 'transparent';
      }
    }};
  }
`;

const Button = props => {
  return <StyledButton {...props} />;
};

export default Button;
