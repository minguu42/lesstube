import YouTube, { YouTubeProps } from "react-youtube";

import styles from "./styles.module.scss";
import { Video } from "models/video";

type Props = YouTubeProps & {
  video: Video;
};

const YouTubePlayer = ({ video, opts }: Props): JSX.Element => (
  <div>
    <YouTube videoId={video.id} opts={opts} />
    <div className={styles.info}>
      <h1 className={styles.title}>{video.title}</h1>
      <p className={styles.channelTitle}>{video.channelTitle}</p>
      <p className={styles.statistics}>{video.viewCount} views・2021/06/10</p>
    </div>
  </div>
);

const video: Video = {
  id: "2g811Eo7K8U",
  title: "何らかのビデオ",
  thumbnailURL: "",
  channelTitle: "ほにゃららチャンネル",
  viewCount: 123456,
  publishedAt: new Date(),
};

const YouTubePlayerContainer = (): JSX.Element => {
  const opts = {
    height: "480",
    width: "856",
  };

  return <YouTubePlayer video={video} opts={opts} />;
};

export default YouTubePlayerContainer;
