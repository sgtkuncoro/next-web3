import React from "react";
import { Layout } from "antd";

import HeaderMenu from "../Header";
import Footer from "../Footer";

const MainLayout = (props: any) => {
  return (
    <Layout className="h-screen overflow-x-auto">
      {/* <Sidebar /> */}
      <Layout className="flex flex-col h-screen">
        <HeaderMenu />
        <div className="px-6 pb-6 mb-auto h-auto">{props?.children}</div>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
