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

export type SearchResponse = {
  id: {
    videoId: string;
  };
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
};

const isSearchResponse = (arg: unknown): arg is SearchResponse => {
  const s = arg as SearchResponse;

  return (
    typeof s?.id?.videoId === "string" &&
    typeof s?.snippet?.publishedAt === "string" &&
    typeof s?.snippet?.title === "string" &&
    typeof s?.snippet?.thumbnails?.medium?.url === "string" &&
    typeof s?.snippet?.channelTitle === "string"
  );
};

export type SearchListResponse = {
  items: SearchResponse[];
};

export const isSearchListResponse = (
  arg: unknown
): arg is SearchListResponse => {
  const s = arg as SearchListResponse;

  return Array.isArray(s?.items) && s?.items.every(isSearchResponse);
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

const newVideoFromSearch = (searchResp: SearchResponse): Video => {
  return {
    id: searchResp.id.videoId,
    title: searchResp.snippet.title,
    thumbnailURL: searchResp.snippet.thumbnails.medium.url,
    channelTitle: searchResp.snippet.channelTitle,
    viewCount: 0,
    publishedAt: new Date(searchResp.snippet.publishedAt),
  };
};

export const newVideosFromSearch = (
  searchList: SearchListResponse
): Video[] => {
  return searchList.items.map((item) => newVideoFromSearch(item));
};

export const videosState = atom<Video[]>({
  key: "videosState",
  default: [],
});

export const watchNowVideosState = atom<Video[]>({
  key: "watchNowVideosState",
  default: [],
});
