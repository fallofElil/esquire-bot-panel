import React, { FC } from 'react';
import styled from "styled-components";
import {Button as AntButton, ButtonProps} from "antd";
import {colors} from "../../../constants/styles";

const StyledButton = styled(AntButton)`
  border-color: ${colors.primary};
  border-radius: ${props => props.shape === 'circle' ? '50%' : '8px'};
  background-color: transparent;
  color: ${colors.primary};
  
  &:hover {
    background-color: ${colors.primary};
    border-color: ${colors.primary};
    color: #FFFFFF;
  }

  &:active {
    opacity: 0.7;
  }
  
  &:focus {
    background-color: transparent;
    box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.4);
    border-color: ${colors.primary};
    color: ${colors.primary};
  }
  
  ${props => props.type === 'primary' && `
    background-color: ${colors.primary};
    color: #FFFFFF;
    
    &:hover {
      box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.4);
    }
  `}
`;

const Button: FC<ButtonProps> = (props) =>
  <StyledButton {...props}>{props.children}</StyledButton>

export default Button;
