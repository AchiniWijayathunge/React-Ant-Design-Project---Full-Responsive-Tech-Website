import "./App.css";
import React from "react";
import "antd/dist/reset.css";
import "./App.css";
import AppHeader from "./components/common/header";
import AppFooter from "./components/common/footer";
import AppHome from "./views/home";
import { Layout, theme } from "antd";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome/>

      </Content>
    <Footer>
      <AppFooter/>
    </Footer>
    </Layout>
  );
}

export default App;
