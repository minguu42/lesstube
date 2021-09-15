import { MutableSnapshot, RecoilRoot } from "recoil";
import { render, screen } from "@testing-library/react";

import Watch from "pages/watch/index";
import { watchVideosState } from "models/video";

beforeEach(() => {
  const initializeState = ({ set }: MutableSnapshot) => {
    set(watchVideosState, [
      {
        id: "xxxxxxxxxxx1",
        title: "テストタイトル1",
        thumbnailURL: "https://example.com",
        channelTitle: "テストチャンネル1",
        viewCount: 123,
        publishedAt: new Date("2006-01-02T00:00:00Z"),
      },
      {
        id: "xxxxxxxxxxx2",
        title: "テストタイトル2",
        thumbnailURL: "https://example.com",
        channelTitle: "テストチャンネル2",
        viewCount: 123456,
        publishedAt: new Date("2007-01-02T00:00:00Z"),
      },
    ]);
  };

  render(
    <RecoilRoot initializeState={initializeState}>
      <Watch />
    </RecoilRoot>
  );
});

describe("表示に関するテスト", () => {
  test("TopAppBar に LessTube のロゴ画像を表示する", () => {
    expect(
      screen.getAllByAltText("LessTube のロゴ画像")[0]
    ).toBeInTheDocument();
  });

  test("TopAppBar に LessTube の文字を表示する", () => {
    expect(screen.getByText(/LessTube/)).toBeInTheDocument();
  });

  test("YouTubePlayer を表示する", () => {
    expect(screen.getByTestId("youtube-player")).toBeInTheDocument();
  });

  test("WatchList を表示する", () => {
    expect(screen.getByText("今から見る")).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "動画を見る" })).toBeNull();
  });

  test("WatchListItem を表示する", () => {
    expect(screen.getByText("テストタイトル2")).toBeInTheDocument();
    expect(
      screen.getAllByAltText("テストタイトル2のサムネイル")[0]
    ).toBeInTheDocument();
    expect(screen.getByText("テストチャンネル2")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "テストタイトル2の削除" })
    ).toBeInTheDocument();
  });
});
