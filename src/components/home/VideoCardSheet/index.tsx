import { useState } from "react";

import styles from "./styles.module.scss";

export const VideoCardSheet = (): JSX.Element => (
  <div className={styles.container}>
    <h3 className={styles.title}>今から見る</h3>
    <button className={styles.watchButton}>動画を見る</button>
  </div>
);

const VideoCardSheetContainer = (): JSX.Element => {
  const [isOpen] = useState(true);

  return <>{isOpen && <VideoCardSheet />}</>;
};

export default VideoCardSheetContainer;
