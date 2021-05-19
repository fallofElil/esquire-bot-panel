import React, { FC } from 'react';
import {Input as AntInput} from "antd";
import {InputProps} from "antd";
import styled from 'styled-components';
import {colors} from "../../../constants/styles";

const StyledInput = styled(AntInput)`
  background-color: #2D303E;
  border: 1px solid #393C49;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.4em;
  color: #E0E6E9;
  
  &:hover, &:focus {
    border-color: ${colors.primary};
    box-shadow: none;
  }
  
  &::placeholder {
    color: #889898;
  }
`;

const Input: FC<InputProps> = (props) => <StyledInput {...props} />

export default Input;
