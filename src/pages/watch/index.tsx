import type { NextPage } from "next";
import Head from "next/head";

import TopAppBar from "components/common/TopAppBar";
import YouTubePlayer from "components/watch/YouTubePlayer";
import WatchListSheet from "components/watch/WatchListSheet";
import styles from "./styles.module.scss";

const Watch: NextPage = () => (
  <div>
    <Head>
      <title>Watch - LessTube</title>
      <meta
        name="description"
        content="LessTube の Watch ページ. 選択した動画を順番に見れる."
      />
    </Head>

    <TopAppBar />
    <div className={styles.sideSheetLayout}>
      <main className={styles.main}>
        <YouTubePlayer />
      </main>
      <WatchListSheet />
    </div>
  </div>
);

export default Watch;
