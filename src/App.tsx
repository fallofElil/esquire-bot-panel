import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from "antd";
import styled from "styled-components";

import {AppRoutes} from "./navigation/routes";
import RootLayout from "./layout/root-layout";
import Sidebar from "./navigation/sidebar";
import Header from "./navigation/header";
import Footer from "./components/footer";
import {colors} from "./constants/styles";

const StyledContentWrapper = styled(Layout.Content)`
  background-color: ${colors.darkBackground};
  padding-left: 2.4rem;
`

function App(): JSX.Element {
  return (
      <RootLayout>
        <Sidebar />
        <Layout>
          <Header />
          <StyledContentWrapper>
            <Routes>
              { AppRoutes.map(route =>
                <Route
                  key={ route.path } 
                  path={ route.path }
                  element={ route.element }
                />
              ) }
            </Routes>
          </StyledContentWrapper>
          <Footer>Подвал</Footer>
        </Layout>
      </RootLayout>
  );
}

export default App;
