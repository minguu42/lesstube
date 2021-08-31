import VideoListItem from "components/home/VideoList/VideoListItem";
import styles from "./styles.module.scss";
import { Video } from "models/video";

type Props = {
  videos: Video[];
};

export const VideoList = ({ videos }: Props): JSX.Element => (
  <div className={styles.container}>
    {videos.map((video) => (
      <VideoListItem key={video.id} video={video} />
    ))}
  </div>
);

const videos: Video[] = [
  {
    id: "1",
    title:
      "はなお 空を飛ぶ! 空は自由の象徴 何にも邪魔されない自由の翼 今羽ばたく",
    thumbnailURL: "None",
    channelTitle: "はなお ぱなお 俺たちはここにいるぜ！チャンネル",
    viewCount: 42566666,
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

const VideoListContainer = (): JSX.Element => {
  return <VideoList videos={videos} />;
};

export default VideoListContainer;
