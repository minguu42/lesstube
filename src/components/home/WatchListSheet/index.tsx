import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";

import WatchListSheet from "components/common/WatchListSheet";
import { watchVideosState } from "models/video";

const WatchListSheetContainer = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);
  const watchVideos = useRecoilValue(watchVideosState);

  useEffect(() => {
    if (watchVideos.length === 0) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [watchVideos]);

  return (
    <>
      {isOpen && (
        <WatchListSheet watchVideos={watchVideos} existsWatchButton={true} />
      )}
    </>
  );
};

export default WatchListSheetContainer;
