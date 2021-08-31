import Image from "next/image";

import styles from "./VideoListItem.module.scss";
import { Video } from "models/video";

type Props = {
  video: Video;
};

const VideoListItem = ({ video }: Props): JSX.Element => (
  <div>
    <Image src="/logo.png" alt="thumbnail image" width={320} height={176} />
    <div className={styles.info}>
      <h6 className={styles.title}>{video.title}</h6>
      <div className={styles.detailContainer}>
        <div>
          <p className={styles.channelTitle}>{video.channelTitle}</p>
          <p className={styles.statistics}>
            {video.viewCount} views・2 years ago
          </p>
        </div>
        <button className={styles.watchNowButton}>今から見る</button>
      </div>
    </div>
  </div>
);

export default VideoListItem;
