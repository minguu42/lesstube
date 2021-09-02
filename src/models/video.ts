import { atom } from "recoil";

export type Video = {
  id: string;
  title: string;
  thumbnailURL: string;
  channelTitle: string;
  viewCount: number;
  publishedAt: Date;
};

export const watchNowVideosState = atom<Video[]>({
  key: "watchNowVideosState",
  default: [],
});
