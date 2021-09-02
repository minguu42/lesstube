import { useEffect } from "react";
import { useRecoilState } from "recoil";

import VideoListItem from "components/home/VideoList/VideoListItem";
import styles from "./styles.module.scss";
import { isVideosResponse, newVideos, Video, videosState } from "models/video";
import { fetchData } from "lib/fetch";

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

const VideoListContainer = (): JSX.Element => {
  const [videos, setVideos] = useRecoilState(videosState);

  useEffect(() => {
    fetchData(
      "/videos",
      "part=snippet,statistics&chart=mostPopular&maxResults=12&regionCode=JP"
    )
      .then((data) => {
        if (isVideosResponse(data)) {
          setVideos(newVideos(data));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setVideos]);

  return <VideoList videos={videos} />;
};

export default VideoListContainer;
