import React from "react";
import Image from "next/image";
import { useRecoilState } from "recoil";

import TrashIcon from "components/common/icons/TrashIcon";
import styles from "./styles.module.scss";
import { Video, watchVideosState } from "models/video";

type Props = {
  video: Video;
  key: React.Key;
  handleDeleteClick: () => void;
};

type ContainerProps = {
  video: Video;
  key: React.Key;
};

const WatchListItem = ({
  video,
  key,
  handleDeleteClick,
}: Props): JSX.Element => (
  <li key={key} className={styles.container}>
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
        onClick={handleDeleteClick}
        className={styles.trashButton}
      >
        <TrashIcon color="#666666" />
      </button>
    </div>
  </li>
);

const WatchListItemContainer = ({
  video,
  key,
}: ContainerProps): JSX.Element => {
  const [watchVideos, setWatchVideos] = useRecoilState(watchVideosState);

  const handleDeleteClick = (): void => {
    const index = watchVideos.findIndex((item) => video === item);
    setWatchVideos([
      ...watchVideos.slice(0, index),
      ...watchVideos.slice(index + 1),
    ]);
  };

  return (
    <WatchListItem
      video={video}
      key={key}
      handleDeleteClick={handleDeleteClick}
    />
  );
};

export default WatchListItemContainer;
