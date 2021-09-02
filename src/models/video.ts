import { atom } from "recoil";

export type VideoResponse = {
  id: string;
  snippet: {
    publishedAt: string;
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
    channelTitle: string;
  };
  statistics: {
    viewCount: string;
  };
};

const isVideoResponse = (arg: unknown): arg is VideoResponse => {
  const v = arg as VideoResponse;

  return (
    typeof v?.id === "string" &&
    typeof v?.snippet?.publishedAt === "string" &&
    typeof v?.snippet?.title === "string" &&
    typeof v?.snippet?.thumbnails?.medium?.url === "string" &&
    typeof v?.snippet?.channelTitle === "string" &&
    typeof v?.statistics?.viewCount === "string"
  );
};

export type VideosResponse = {
  items: VideoResponse[];
};

export const isVideosResponse = (arg: unknown): arg is VideosResponse => {
  const vs = arg as VideosResponse;

  return Array.isArray(vs?.items) && vs?.items.every(isVideoResponse);
};

export type Video = {
  id: string;
  title: string;
  thumbnailURL: string;
  channelTitle: string;
  viewCount: number;
  publishedAt: Date;
};

const newVideo = (videoResp: VideoResponse): Video => {
  return {
    id: videoResp.id,
    title: videoResp.snippet.title,
    thumbnailURL: videoResp.snippet.thumbnails.medium.url,
    channelTitle: videoResp.snippet.channelTitle,
    viewCount: parseInt(videoResp.statistics.viewCount, 10),
    publishedAt: new Date(videoResp.snippet.publishedAt),
  };
};

export const newVideos = (videosResp: VideosResponse): Video[] => {
  return videosResp.items.map((item) => newVideo(item));
};

export const videosState = atom<Video[]>({
  key: "videosState",
  default: [],
});

export const watchNowVideosState = atom<Video[]>({
  key: "watchNowVideosState",
  default: [],
});
