import Image from "next/image";
import { useRecoilState } from "recoil";

import { OutlinedButton } from "components/common/Button";
import styles from "./styles.module.scss";
import { Video, watchVideosState } from "models/video";
import { formatDate } from "lib/format";

type Props = {
  video: Video;
  handleClick: () => void;
};

type ContainerProps = {
  video: Video;
};

const VideoListItem = ({ video, handleClick }: Props): JSX.Element => (
  <div>
    <Image
      src={video.thumbnailURL}
      alt={`${video.title}のサムネイル`}
      width={320}
      height={176}
    />
    <div className={styles.info}>
      <h6 className={styles.title}>{video.title}</h6>
      <div className={styles.detailContainer}>
        <div className={styles.leftWrapper}>
          <p className={styles.channelTitle}>{video.channelTitle}</p>
          <p className={styles.statistics}>
            {video.viewCount === 0
              ? ""
              : video.viewCount.toLocaleString() + " views・"}
            {formatDate(video.publishedAt)}
          </p>
        </div>
        <OutlinedButton
          label="追加"
          ariaLabel={`${video.title}の追加`}
          onClick={handleClick}
        />
      </div>
    </div>
  </div>
);

const VideoListItemContainer = ({ video }: ContainerProps): JSX.Element => {
  const [watchVideos, setWatchVideos] = useRecoilState(watchVideosState);

  const handleClick = () => {
    if (watchVideos.findIndex((item) => video === item) === -1) {
      setWatchVideos((prev) => [...prev, video]);
    }
  };

  return <VideoListItem video={video} handleClick={handleClick} />;
};

export default VideoListItemContainer;
