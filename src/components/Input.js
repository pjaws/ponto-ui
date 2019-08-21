import React, { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  font-size: 1rem;
  line-height: 1.5;
  /* height: calc(1.5em + 0.75rem + 2px); */
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.375rem 0.75rem;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ceceed;
  border-radius: 0.25rem;
`;

const Input = ({ initialValue = '', ...rest }) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = evt => {
    setValue(evt.target.value);
  };
  return <StyledInput {...rest} value={value} onChange={handleChange} />;
};

export default Input;
