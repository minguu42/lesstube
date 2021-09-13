import WatchListSheet from "components/common/WatchListSheet";
import { watchVideosState } from "models/video";
import { useRecoilValue } from "recoil";

const WatchListSheetContainer = (): JSX.Element => {
  const watchNowVideos = useRecoilValue(watchVideosState);

  return (
    <WatchListSheet watchVideos={watchNowVideos} existsWatchButton={false} />
  );
};

export default WatchListSheetContainer;
