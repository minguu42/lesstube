import VideoCard from "components/common/VideoCard";
import styles from "./styles.module.scss";
import { Video } from "models/video";

type Props = {
  videos: Video[];
};

export const SideSheet = ({ videos }: Props): JSX.Element => (
  <div className={styles.container}>
    <h2 className={styles.title}>今から見る</h2>
    <ul className={styles.videoCardLayout}>
      {videos.map((video) => (
        <li key={video.id}>
          <VideoCard video={video} />
        </li>
      ))}
    </ul>
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
];

const SideSheetContainer = (): JSX.Element => {
  return <SideSheet videos={videos} />;
};

export default SideSheetContainer;
