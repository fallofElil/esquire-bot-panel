import React from 'react';
import { Layout } from "antd";

import RootLayout from "./layout/root-layout";
import Sidebar from "./navigation/sidebar";

function App(): JSX.Element {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <RootLayout>
      <Sidebar>Боковое меню</Sidebar>
      <Layout>
        <Header>Шапка</Header>
        <Content>Основной контент</Content>
        <Footer>Подвал</Footer>
      </Layout>
    </RootLayout>
  );
}

export default App;
