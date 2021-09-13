import SideSheet from "components/common/SideSheet";
import VideoCard from "components/common/VideoCard";
import styles from "./styles.module.scss";
import { Video } from "models/video";
import { OutlinedLinkButton } from "../Button";

type Props = {
  watchVideos: Video[];
  existsWatchButton: boolean;
};

export const WatchListSheet = ({
  watchVideos,
  existsWatchButton,
}: Props): JSX.Element => (
  <SideSheet
    title="今から見る"
    contents={
      <div className={styles.container}>
        <ul className={styles.layout}>
          {watchVideos.map((video) => (
            <li key={video.id}>
              <VideoCard video={video} />
            </li>
          ))}
        </ul>
        {existsWatchButton && (
          <OutlinedLinkButton label="動画を見る" url="/watch" />
        )}
      </div>
    }
  />
);

export default WatchListSheet;
