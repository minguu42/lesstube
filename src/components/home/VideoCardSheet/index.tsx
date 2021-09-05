import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";

import VideoCard from "components/common/VideoCard";
import { OutlinedLinkButton } from "components/common/Button";
import styles from "./styles.module.scss";
import { Video, watchNowVideosState } from "models/video";

type Props = {
  watchNowVideos: Video[];
};

export const VideoCardSheet = ({ watchNowVideos }: Props): JSX.Element => (
  <div className={styles.container}>
    <h3 className={styles.title}>今から見る</h3>
    <ul className={styles.videoCardLayout}>
      {watchNowVideos.map((video) => (
        <li key={video.id}>
          <VideoCard video={video} />
        </li>
      ))}
    </ul>
    <OutlinedLinkButton label="動画を見る" url="/watch" />
  </div>
);

const VideoCardSheetContainer = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);
  const watchNowVideos = useRecoilValue(watchNowVideosState);

  useEffect(() => {
    if (watchNowVideos.length === 0) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [watchNowVideos]);

  return <>{isOpen && <VideoCardSheet watchNowVideos={watchNowVideos} />}</>;
};

export default VideoCardSheetContainer;
