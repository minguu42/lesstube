import Image from "next/image";

import TrashIcon from "components/common/icons/TrashIcon";
import styles from "./VideoCard.module.scss";
import { Video } from "models/video";

type Props = {
  video: Video;
};

const VideoCard = ({ video }: Props): JSX.Element => (
  <div className={styles.container}>
    <Image src="/logo.png" alt="thumbnail image" width={112} height={68} />
    <div className={styles.body}>
      <div>
        <h6 className={styles.title}>{video.title}</h6>
        <p className={styles.channelTitle}>{video.channelTitle}</p>
      </div>
      <button className={styles.trashButton}>
        <TrashIcon color="#666666" />
      </button>
    </div>
  </div>
);

export default VideoCard;
