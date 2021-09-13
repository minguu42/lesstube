import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getPage } from "next-page-tester";

beforeEach(async () => {
  const { render } = await getPage({ route: "/" });
  render();
  await waitFor(() => screen.getAllByAltText("テストタイトル2のサムネイル"));
});

describe("Home ページの表示に関するテスト", () => {
  test("TopAppBar に LessTube のロゴ画像を表示する", () => {
    expect(
      screen.getAllByAltText("LessTube のロゴ画像")[0]
    ).toBeInTheDocument();
  });

  test("TopAppBar に LessTube の文字を表示する", () => {
    expect(screen.getByText(/LessTube/)).toBeInTheDocument();
  });

  test("SearchBar に入力フィールドを表示する", () => {
    expect(screen.getByPlaceholderText("検索")).toBeInTheDocument();
  });

  test("SearchBar に検索ボタンを表示する", () => {
    expect(screen.getByRole("button", { name: "検索" })).toBeInTheDocument();
  });

  test("1つ目の VideoListItem のサムネイル画像を表示する", () => {
    expect(
      screen.getAllByAltText("テストタイトル1のサムネイル")[0]
    ).toBeInTheDocument();
  });

  test("1つ目の VideoListItem のタイトルを表示する", () => {
    expect(screen.getByText("テストタイトル1")).toBeInTheDocument();
  });

  test("1つ目の VideoListItem のチャンネルタイトルを表示する", () => {
    expect(screen.getByText("テストチャンネル1")).toBeInTheDocument();
  });

  test("1つ目の VideoListItem の視聴回数と日付を表示する", () => {
    expect(screen.getByText("100 views・2021/09/01")).toBeInTheDocument();
  });

  test("1つ目の VideoListItem の追加ボタンを表示する", () => {
    expect(
      screen.getByRole("button", { name: "テストタイトル1の追加" })
    ).toBeInTheDocument();
  });

  test("2つ目の VideoListItem のサムネイル画像を表示する", () => {
    expect(
      screen.getAllByAltText("テストタイトル2のサムネイル")[0]
    ).toBeInTheDocument();
  });

  test("2つ目の VideoListItem のタイトルを表示する", () => {
    expect(screen.getByText("テストタイトル2")).toBeInTheDocument();
  });

  test("2つ目の VideoListItem のチャンネルタイトルを表示する", () => {
    expect(screen.getByText("テストチャンネル2")).toBeInTheDocument();
  });

  test("2つ目の VideoListItem の視聴回数と日付を表示する", () => {
    expect(
      screen.getByText("123,456,789 views・2021/09/30")
    ).toBeInTheDocument();
  });

  test("2つ目の VideoListItem の追加ボタンを表示する", () => {
    expect(
      screen.getByRole("button", { name: "テストタイトル2の追加" })
    ).toBeInTheDocument();
  });
});

test("検索バーにキーワードを入力し, エンターを押して, 動画を検索し, 一覧表示する", async () => {
  userEvent.type(screen.getByPlaceholderText("検索"), "test{enter}");

  expect(await screen.findByText("テストタイトル3")).toBeInTheDocument();
  expect(screen.getByText("テストタイトル4")).toBeInTheDocument();
});

test("検索バーにキーワードを入力し, 検索ボタンを押して, 動画を検索し, 一覧表示する", async () => {
  userEvent.type(screen.getByPlaceholderText("検索"), "test");
  userEvent.click(screen.getByRole("button", { name: "検索" }));

  expect(await screen.findByText("テストタイトル3")).toBeInTheDocument();
  expect(screen.getByText("テストタイトル4")).toBeInTheDocument();
});

test("追加ボタンを押して, WatchList に動画を追加する", async () => {
  userEvent.click(
    screen.getByRole("button", { name: "テストタイトル1の追加" })
  );

  expect(
    await screen.findByRole("link", { name: "動画を見る" })
  ).toBeInTheDocument();
});

test("Trash アイコンを押して, watchNowVideos から video を削除する", async () => {
  userEvent.click(
    screen.getByRole("button", { name: "テストタイトル1の追加" })
  );
  expect(
    await screen.findByRole("link", { name: "動画を見る" })
  ).toBeInTheDocument();

  userEvent.click(
    screen.getByRole("button", { name: "テストタイトル1の削除" })
  );

  expect(screen.queryByRole("link", { name: "動画を見る" })).toBeNull();
});

test("動画を見るボタンをおし, /watch ページに移動する", async () => {
  userEvent.click(
    screen.getByRole("button", { name: "テストタイトル1の追加" })
  );
  expect(
    await screen.findByRole("link", { name: "動画を見る" })
  ).toBeInTheDocument();
  expect(screen.queryByTestId("youtube-player")).toBeNull();

  userEvent.click(screen.getByRole("link", { name: "動画を見る" }));

  expect(await screen.findByTestId("youtube-player")).toBeInTheDocument();
});
