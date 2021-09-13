import SideSheet from "components/common/SideSheet";
import WatchListItem from "components/common/WatchListSheet/WatchListItem";
import { OutlinedLinkButton } from "../Button";
import styles from "./styles.module.scss";
import { Video } from "models/video";

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
            <WatchListItem key={video.id} video={video} />
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
