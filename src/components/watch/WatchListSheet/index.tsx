import SideSheet from "components/common/SideSheet";
import VideoCard from "components/common/VideoCard";
import styles from "./styles.module.scss";
import { Video, watchVideosState } from "models/video";
import { useRecoilValue } from "recoil";

type Props = {
  watchNowVideos: Video[];
};

export const WatchListSheet = ({ watchNowVideos }: Props): JSX.Element => (
  <SideSheet
    title="動画一覧"
    contents={
      <ul className={styles.videoCardLayout}>
        {watchNowVideos.map((video) => (
          <li key={video.id}>
            <VideoCard video={video} />
          </li>
        ))}
      </ul>
    }
  />
);

const WatchListSheetContainer = (): JSX.Element => {
  const watchNowVideos = useRecoilValue(watchVideosState);

  return <WatchListSheet watchNowVideos={watchNowVideos} />;
};

export default WatchListSheetContainer;
