import React, { FC } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

const StyledLayout = styled(Layout)`
  height: 100%;
`

const RootLayout: FC = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>
}

export default RootLayout;
