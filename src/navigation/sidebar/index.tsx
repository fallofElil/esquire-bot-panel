import React, {FC} from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from "antd";
import { EditOutlined, HomeFilled } from '@ant-design/icons';

import { colors } from "../../constants/styles";
import SideButton from "../side-button";
import { paths } from "../routes";

const StyledSidebar = styled(Layout.Sider)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-top: 2.4rem;
  padding-left: 1.2rem;
  background-color: ${colors.darkPrimary};
  
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
`

const Sidebar: FC = ({ children }) => {
  const location = useLocation()

  const isCurrentLocation = (btnLocation: string): boolean => btnLocation === location.pathname;

  return (
    <StyledSidebar width={105}>
      <SideButton
        icon={<HomeFilled />}
        active={isCurrentLocation(paths.ROOT)}
        path={paths.ROOT}
      />
      <SideButton
        icon={<EditOutlined />}
        active={isCurrentLocation(paths.EMBEDDING)}
        path={paths.EMBEDDING}
      />
      {children}
    </StyledSidebar>
  );
}

export default Sidebar;
