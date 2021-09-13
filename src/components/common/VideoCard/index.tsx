import Image from "next/image";
import { useRecoilState } from "recoil";

import TrashIcon from "components/common/icons/TrashIcon";
import styles from "./styles.module.scss";
import { Video, watchNowVideosState } from "models/video";

type Props = {
  video: Video;
  handleClick: () => void;
};

type ContainerProps = {
  video: Video;
};

const VideoCard = ({ video, handleClick }: Props): JSX.Element => (
  <div className={styles.container}>
    <Image
      src={video.thumbnailURL}
      alt="thumbnail image"
      width={112}
      height={68}
    />
    <div className={styles.body}>
      <div>
        <h6 className={styles.title}>{video.title}</h6>
        <p className={styles.channelTitle}>{video.channelTitle}</p>
      </div>
      <button
        aria-label={`${video.title}の削除`}
        onClick={handleClick}
        className={styles.trashButton}
      >
        <TrashIcon color="#666666" />
      </button>
    </div>
  </div>
);

const VideoCardContainer = ({ video }: ContainerProps): JSX.Element => {
  const [watchNowVideos, setWatchNowVideos] =
    useRecoilState(watchNowVideosState);

  const handleClick = (): void => {
    const index = watchNowVideos.findIndex((item) => video === item);
    setWatchNowVideos([
      ...watchNowVideos.slice(0, index),
      ...watchNowVideos.slice(index + 1),
    ]);
  };

  return <VideoCard video={video} handleClick={handleClick} />;
};

export default VideoCardContainer;
