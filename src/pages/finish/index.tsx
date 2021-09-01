import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

import TopAppBar from "components/common/TopAppBar";
import styles from "./styles.module.scss";

const Finish: NextPage = () => (
  <div>
    <Head>
      <title>Finish - LessTube</title>
      <meta
        name="description"
        content="LessTube の Finish ページ. 動画を見終わった後に表示される."
      />
    </Head>

    <TopAppBar />
    <main className={styles.main}>
      <h1 className={styles.message}>
        Thank you for watching.
        <br />
        Have a nice day!
      </h1>
      <Image
        src="/goodbye.svg"
        alt="Goodbye Image"
        width={920}
        height={690}
        className={styles.goodbyeImage}
      />
    </main>
  </div>
);

export default Finish;
