import type { NextPage } from "next";
import Head from "next/head";

import TopAppBar from "components/common/TopAppBar";
import SearchBar from "components/home/SearchBar";
import styles from "./styles.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home - LessTube</title>
        <meta
          name="description"
          content="LessTube は YouTube を見過ぎないための Web アプリケーションです. 事前に見る動画を選択し, 他の動画への誘惑を断ち切ります."
        />
      </Head>

      <TopAppBar />
      <main className={styles.main}>
        <SearchBar />
      </main>
    </div>
  );
};

export default Home;
