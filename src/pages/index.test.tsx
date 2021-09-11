import { screen, waitFor } from "@testing-library/react";
import { getPage } from "next-page-tester";

describe("Home ページの表示に関するテスト", () => {
  beforeEach(async () => {
    const { render } = await getPage({ route: "/" });
    render();
    await waitFor(() =>
      screen.getAllByAltText("モック動画タイトル2のサムネイル")
    );
  });

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
      screen.getAllByAltText("モック動画タイトル1のサムネイル")[0]
    ).toBeInTheDocument();
  });

  test("1つ目の VideoListItem のタイトルを表示する", () => {
    expect(screen.getByText("モック動画タイトル1")).toBeInTheDocument();
  });

  test("1つ目の VideoListItem のチャンネルタイトルを表示する", () => {
    expect(screen.getByText("モックチャンネル1")).toBeInTheDocument();
  });

  test("1つ目の VideoListItem の視聴回数と日付を表示する", () => {
    expect(screen.getByText("1,000,000 views・2021/09/01")).toBeInTheDocument();
  });

  test("1つ目の VideoListItem の今から見るボタンを表示する", () => {
    expect(
      screen.getAllByRole("button", { name: "今から見る" })[0]
    ).toBeInTheDocument();
  });
});

test.todo("検索バーにキーワードを入力して, 動画を検索し, 一覧表示する");
test.todo("「今から見る」ボタンを押して, watchNowVideos に video を追加する");
test.todo("Trash アイコンを押して, watchNowVideos から video を削除する");
test.todo("動画を見るボタンをおし, /watch ページに移動する");
