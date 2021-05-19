import React, { FC } from 'react';
import styled from "styled-components";
import {Button as AntButton, ButtonProps} from "antd";
import {colors} from "../../../constants/styles";

const StyledButton = styled(AntButton)`
  ${props => props.type === 'primary' && `
    background-color: ${colors.primary};
  `} : ''
`;

const Button: FC<ButtonProps> = (props) =>
  <StyledButton {...props}>{props.children}</StyledButton>

export default Button;
