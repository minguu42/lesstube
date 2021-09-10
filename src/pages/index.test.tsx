import { screen } from "@testing-library/react";
import { getPage } from "next-page-tester";

describe("Home ページの表示に関するテスト", () => {
  beforeEach(async () => {
    const { render } = await getPage({ route: "/" });
    render();
  });

  test("TopAppBar に LessTube のロゴ画像を表示する", () => {
    expect(
      screen.getAllByAltText("LessTube のロゴ画像")[0]
    ).toBeInTheDocument();
  });

  test.todo("display input filed in searchBar");
  test.todo("display button in searchBar");
  test.todo("display thumbnail in videoCard");
  test.todo("display title in videoCard");
  test.todo("display channelTitle in videoCard");
  test.todo("display statistics in videoCard");
  test.todo("display watchNowButton in videoCard");
});

test.todo("検索バーにキーワードを入力して, 動画を検索し, 一覧表示する");
test.todo("「今から見る」ボタンを押して, watchNowVideos に video を追加する");
test.todo("Trash アイコンを押して, watchNowVideos から video を削除する");
test.todo("動画を見るボタンをおし, /watch ページに移動する");
