import React, {FC} from 'react';
import styled from 'styled-components';
import { Layout } from "antd";
import { colors } from "../../constants/styles";

const StyledSidebar = styled(Layout.Sider)`
  background-color: ${colors.darkPrimary};
`

const Sidebar: FC = ({ children }) => {
  return <StyledSidebar width={105}>
    {children}
  </StyledSidebar>
}

export default Sidebar;
