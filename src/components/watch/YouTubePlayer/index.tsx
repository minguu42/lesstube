import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import YouTube, { YouTubeProps } from "react-youtube";

import styles from "./styles.module.scss";
import { Video, watchNowVideosState } from "models/video";

type Props = YouTubeProps & {
  watchingVideo: Video | null;
};

const YouTubePlayer = ({ watchingVideo, opts, onEnd }: Props): JSX.Element => (
  <>
    {watchingVideo && (
      <div>
        <YouTube videoId={watchingVideo.id} opts={opts} onEnd={onEnd} />
        <div className={styles.info}>
          <h1 className={styles.title}>{watchingVideo.title}</h1>
          <p className={styles.channelTitle}>{watchingVideo.channelTitle}</p>
          <p className={styles.statistics}>
            {watchingVideo.viewCount !== 0
              ? String(watchingVideo.viewCount) + " views・"
              : ""}
            2021/06/10
          </p>
        </div>
      </div>
    )}
  </>
);

const YouTubePlayerContainer = (): JSX.Element => {
  const [watchNowVideos, setWatchNowVideos] =
    useRecoilState(watchNowVideosState);
  const [watchingVideo, setWatchingVideo] = useState<Video | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (watchNowVideos.length === 0) {
      router.push("/finish").catch((error) => console.error(error));
    } else {
      setWatchingVideo(watchNowVideos[0]);
    }
  }, [router, watchNowVideos]);

  const handleEnd = () => {
    setWatchNowVideos(watchNowVideos.slice(1));
  };

  const opts = {
    height: "480",
    width: "856",
  };

  return (
    <YouTubePlayer
      watchingVideo={watchingVideo}
      opts={opts}
      onEnd={handleEnd}
    />
  );
};

export default YouTubePlayerContainer;
