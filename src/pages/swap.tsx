import Head from "next/head";
import { Layout, Breadcrumb } from "antd";

import MainLayout from "../app/components/Layout";
import Swap from "../features/swap/Swap";

import styles from "../styles/Home.module.css";

const { Content } = Layout;
const SwapPage = () => (
  <>
    <Head>
      <title>Abc App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainLayout>
      <Content>
        <Swap />
      </Content>
    </MainLayout>
  </>
);

export default SwapPage;
