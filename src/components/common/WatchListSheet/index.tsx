import SideSheet from "components/common/SideSheet";
import VideoCard from "components/common/VideoCard";
import styles from "./styles.module.scss";
import { Video } from "models/video";

type Props = {
  watchVideos: Video[];
};

export const WatchListSheet = ({ watchVideos }: Props): JSX.Element => (
  <SideSheet
    title="今から見る"
    contents={
      <ul className={styles.layout}>
        {watchVideos.map((video) => (
          <li key={video.id}>
            <VideoCard video={video} />
          </li>
        ))}
      </ul>
    }
  />
);

export default WatchListSheet;
