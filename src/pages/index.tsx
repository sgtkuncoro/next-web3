import type { NextPage } from "next";
import Head from "next/head";

// import Counter from "../features/counter/Counter";
import Swap from "../features/swap/Swap";
import styles from "../styles/Home.module.css";

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {/* <Counter /> */}
        <Swap />
      </header>
    </div>
  );
};

export default IndexPage;
