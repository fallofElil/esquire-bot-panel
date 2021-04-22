import React, { FC, useContext } from 'react';
import styled from "styled-components";
import { Layout } from "antd";

import { AppContext } from "../../context/app-context";
import { colors } from "../../constants/styles";

const StyledHeader = styled(Layout.Header)`
  height: auto;
  padding: 2.4rem;
  background-color: ${colors.darkBackground};
`

const StyledTitle = styled.h2`
  line-height: 1em;
  color: white;
`

const Header: FC = ({ children }) => {
  const { headerTitle } = useContext(AppContext);

  return (
    <StyledHeader>
      <StyledTitle>{headerTitle}</StyledTitle>
      {children}
    </StyledHeader>
  );
};

export default Header;
