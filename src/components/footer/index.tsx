import React, {FC} from 'react';
import styled from "styled-components";
import {Layout} from "antd";

import {colors} from "../../constants/styles";

const StyledFooter = styled(Layout.Footer)`
  padding: 2.4rem;
  background-color: ${colors.darkBackground};
  color: white;
`

const Footer: FC = ({ children }) => {
  return <StyledFooter>{children}</StyledFooter>
}

export default Footer;
