import { screen, waitFor } from "@testing-library/react";
import { getPage } from "next-page-tester";
import userEvent from "@testing-library/user-event";

beforeEach(async () => {
  const { render } = await getPage({ route: "/" });
  render();

  await waitFor(() => screen.getAllByAltText("テストタイトル1のサムネイル"));
  userEvent.click(
    screen.getByRole("button", { name: "テストタイトル1の追加" })
  );
  userEvent.click(
    screen.getByRole("button", { name: "テストタイトル2の追加" })
  );

  userEvent.click(screen.getByRole("link", { name: "動画を見る" }));

  await waitFor(() => screen.getByTestId("youtube-player"));
});

describe("Watch ページの表示に関するテスト", () => {
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
