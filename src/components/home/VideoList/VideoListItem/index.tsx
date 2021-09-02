import Image from "next/image";
import { useRecoilState } from "recoil";

import styles from "./styles.module.scss";
import { Video, watchNowVideosState } from "models/video";

type Props = {
  video: Video;
  handleClick: () => void;
};

type ContainerProps = {
  video: Video;
};

const VideoListItem = ({ video, handleClick }: Props): JSX.Element => (
  <div>
    <Image src="/logo.png" alt="thumbnail image" width={320} height={176} />
    <div className={styles.info}>
      <h6 className={styles.title}>{video.title}</h6>
      <div className={styles.detailContainer}>
        <div className={styles.leftWrapper}>
          <p className={styles.channelTitle}>{video.channelTitle}</p>
          <p className={styles.statistics}>
            {video.viewCount} views・2021/07/01
          </p>
        </div>
        <button onClick={handleClick} className={styles.watchNowButton}>
          今から見る
        </button>
      </div>
    </div>
  </div>
);

const VideoListItemContainer = ({ video }: ContainerProps): JSX.Element => {
  const [watchNowVideos, setWatchNowVideos] =
    useRecoilState(watchNowVideosState);

  const handleClick = () => {
    if (watchNowVideos.findIndex((item) => video === item) === -1) {
      setWatchNowVideos((prev) => [...prev, video]);
    }
  };

  return <VideoListItem video={video} handleClick={handleClick} />;
};

export default VideoListItemContainer;
