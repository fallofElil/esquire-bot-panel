import React, { useEffect, useContext } from 'react';
import { Layout } from "antd";
import styled from "styled-components";

import RootLayout from "./layout/root-layout";
import Sidebar from "./navigation/sidebar";
import Header from "./navigation/header";
import Footer from "./components/footer";
import {AppContext} from "./context/app-context";
import {colors} from "./constants/styles";

const StyledContentWrapper = styled(Layout.Content)`
  background-color: ${colors.darkBackground};
  padding-left: 2.4rem;
`

function App(): JSX.Element {
  const { changeHeaderTitle } = useContext(AppContext);

  useEffect(() => {
    changeHeaderTitle('Тестовый заголовок')
  }, [])

  return (
    <RootLayout>
      <Sidebar>Боковое меню</Sidebar>
      <Layout>
        <Header />
        <StyledContentWrapper>
          Основной контент
        </StyledContentWrapper>
        <Footer>Подвал</Footer>
      </Layout>
    </RootLayout>
  );
}

export default App;
