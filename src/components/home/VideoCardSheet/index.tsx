import { useState } from "react";

import VideoCard from "components/common/VideoCard";
import styles from "./styles.module.scss";
import { Video } from "models/video";

type Props = {
  videos: Video[];
};

export const VideoCardSheet = ({ videos }: Props): JSX.Element => (
  <div className={styles.container}>
    <h3 className={styles.title}>今から見る</h3>
    <ul className={styles.videoCardLayout}>
      {videos.map((video) => (
        <li key={video.id}>
          <VideoCard video={video} />
        </li>
      ))}
    </ul>
    <button className={styles.watchButton}>動画を見る</button>
  </div>
);

const videos: Video[] = [
  {
    id: "1",
    title:
      "はなお 空を飛ぶ! 空は自由の象徴 何にも邪魔されない自由の翼 今羽ばたく",
    thumbnailURL: "None",
    channelTitle: "はなお ぱなお 俺たちはここにいるぜ！チャンネル",
    viewCount: 425,
    publishedAt: new Date(),
  },
  {
    id: "2",
    title: "はなお 空を飛ぶ",
    thumbnailURL: "None",
    channelTitle: "はなお",
    viewCount: 425,
    publishedAt: new Date(),
  },
  {
    id: "3",
    title: "はなお 空を飛ぶ",
    thumbnailURL: "None",
    channelTitle: "はなお",
    viewCount: 425,
    publishedAt: new Date(),
  },
  {
    id: "4",
    title: "はなお 空を飛ぶ",
    thumbnailURL: "None",
    channelTitle: "はなお",
    viewCount: 425,
    publishedAt: new Date(),
  },
  {
    id: "5",
    title: "はなお 空を飛ぶ",
    thumbnailURL: "None",
    channelTitle: "はなお",
    viewCount: 425,
    publishedAt: new Date(),
  },
  {
    id: "6",
    title: "はなお 空を飛ぶ",
    thumbnailURL: "None",
    channelTitle: "はなお",
    viewCount: 425,
    publishedAt: new Date(),
  },
  {
    id: "7",
    title: "はなお 空を飛ぶ",
    thumbnailURL: "None",
    channelTitle: "はなお",
    viewCount: 425,
    publishedAt: new Date(),
  },
  {
    id: "8",
    title: "はなお 空を飛ぶ",
    thumbnailURL: "None",
    channelTitle: "はなお",
    viewCount: 425,
    publishedAt: new Date(),
  },
  {
    id: "9",
    title: "はなお 空を飛ぶ",
    thumbnailURL: "None",
    channelTitle: "はなお",
    viewCount: 425,
    publishedAt: new Date(),
  },
  {
    id: "10",
    title: "はなお 空を飛ぶ",
    thumbnailURL: "None",
    channelTitle: "はなお",
    viewCount: 425,
    publishedAt: new Date(),
  },
  {
    id: "11",
    title: "はなお 空を飛ぶ",
    thumbnailURL: "None",
    channelTitle: "はなお",
    viewCount: 425,
    publishedAt: new Date(),
  },
  {
    id: "12",
    title: "はなお 空を飛ぶ",
    thumbnailURL: "None",
    channelTitle: "はなお",
    viewCount: 425,
    publishedAt: new Date(),
  },
];

const VideoCardSheetContainer = (): JSX.Element => {
  const [isOpen] = useState(true);

  return <>{isOpen && <VideoCardSheet videos={videos} />}</>;
};

export default VideoCardSheetContainer;
