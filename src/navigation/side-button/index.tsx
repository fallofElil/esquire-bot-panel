import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

import {colors} from "../../constants/styles";
import Chamfer from "./chamfer";

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100px;
  background-color: ${colors.darkPrimary};
  font-size: 2.4rem;
`;

const BorderWrapper = styled.div<{ active: boolean }>`
  width: 100%;
  height: 100%;
  padding: 1.2rem 0 1.2rem 1.2rem;
  background-color: ${props => props.active ? colors.darkBackground : colors.darkPrimary};;
  border-radius: 12px 0 0 12px;
`

const IconWrapper = styled.div<{ active: boolean }>`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  color: ${props => props.active ? '#FFFFFF' : colors.primary};
  background-color: ${props => props.active ? colors.primary : colors.darkPrimary};
  border-radius: 8px;
`

const StyledChamferWrapper = styled.div`
  width: 12px;
  height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`

type SideButtonProps = {
  icon: React.ReactNode;
  active: boolean;
  path: string;
}

const SideButton: FC<SideButtonProps> = ({ active, icon, path }) => {
  return (
    <StyledLink to={path}>
      <StyledChamferWrapper>
        <Chamfer position={'top'} color={active ? colors.darkBackground : colors.darkPrimary} />
      </StyledChamferWrapper>
      <BorderWrapper active={active}>
        <IconWrapper active={active}>
          {icon}
        </IconWrapper>
      </BorderWrapper>
      <StyledChamferWrapper>
        <Chamfer position={'bottom'} color={active ? colors.darkBackground : colors.darkPrimary} />
      </StyledChamferWrapper>
    </StyledLink>
  )
}

export default SideButton;
