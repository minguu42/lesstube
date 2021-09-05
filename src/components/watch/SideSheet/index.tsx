import VideoCard from "components/common/VideoCard";
import styles from "./styles.module.scss";
import { Video, watchNowVideosState } from "models/video";
import { useRecoilValue } from "recoil";

type Props = {
  watchNowVideos: Video[];
};

export const SideSheet = ({ watchNowVideos }: Props): JSX.Element => (
  <div className={styles.container}>
    <h2 className={styles.title}>今から見る</h2>
    <ul className={styles.videoCardLayout}>
      {watchNowVideos.map((video) => (
        <li key={video.id}>
          <VideoCard video={video} />
        </li>
      ))}
    </ul>
  </div>
);

const SideSheetContainer = (): JSX.Element => {
  const watchNowVideos = useRecoilValue(watchNowVideosState);

  return <SideSheet watchNowVideos={watchNowVideos} />;
};

export default SideSheetContainer;
