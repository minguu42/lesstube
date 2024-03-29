import { RecoilRoot } from "recoil";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "pages/index";

beforeEach(async () => {
  render(
    <RecoilRoot>
      <Home />
    </RecoilRoot>
  );

  await waitFor(() => screen.getByAltText("テストタイトル1のサムネイル"));
});

describe("表示に関するテスト", () => {
  test("TopAppBar に LessTube のロゴ画像を表示する", () => {
    expect(screen.getByAltText("LessTube のロゴ画像")).toBeInTheDocument();
  });

  test("TopAppBar に LessTube を表示する", () => {
    expect(screen.getByText(/LessTube/)).toBeInTheDocument();
  });

  test("SearchBar に入力フィールドを表示する", () => {
    expect(screen.getByPlaceholderText("検索")).toBeInTheDocument();
  });

  test("SearchBar に検索ボタンを表示する", () => {
    expect(screen.getByRole("button", { name: "検索" })).toBeInTheDocument();
  });

  test("1つ目の VideoListItem のタイトルを表示する", () => {
    expect(screen.getByText("テストタイトル1")).toBeInTheDocument();
  });

  test("1つ目の VideoListItem のサムネイル画像を表示する", () => {
    expect(
      screen.getByAltText("テストタイトル1のサムネイル")
    ).toBeInTheDocument();
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

  test("2つ目の VideoListItem のタイトルを表示する", () => {
    expect(screen.getByText("テストタイトル2")).toBeInTheDocument();
  });

  test("2つ目の VideoListItem のサムネイル画像を表示する", () => {
    expect(
      screen.getByAltText("テストタイトル2のサムネイル")
    ).toBeInTheDocument();
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

test("検索バーにキーワードを入力し, エンターキーを押して, 動画を検索し, 一覧表示する", async () => {
  userEvent.type(screen.getByPlaceholderText("検索"), "テスト{enter}");

  expect(await screen.findByText("テストタイトル3")).toBeInTheDocument();
  expect(
    screen.getByAltText("テストタイトル3のサムネイル")
  ).toBeInTheDocument();
  expect(screen.getByText("テストチャンネル3")).toBeInTheDocument();
  expect(screen.getByText("2021/01/01")).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "テストタイトル3の追加" })
  ).toBeInTheDocument();

  expect(screen.getByText("テストタイトル4")).toBeInTheDocument();
  expect(
    screen.getByAltText("テストタイトル4のサムネイル")
  ).toBeInTheDocument();
  expect(screen.getByText("テストチャンネル4")).toBeInTheDocument();
  expect(screen.getByText("2021/12/31")).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "テストタイトル4の追加" })
  ).toBeInTheDocument();
});

test("検索バーにキーワードを入力し, 検索ボタンを押して, 動画を検索し, 一覧表示する", async () => {
  userEvent.type(screen.getByPlaceholderText("検索"), "テスト");
  userEvent.click(screen.getByRole("button", { name: "検索" }));

  expect(await screen.findByText("テストタイトル3")).toBeInTheDocument();
  expect(
    screen.getByAltText("テストタイトル3のサムネイル")
  ).toBeInTheDocument();
  expect(screen.getByText("テストチャンネル3")).toBeInTheDocument();
  expect(screen.getByText("2021/01/01")).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "テストタイトル3の追加" })
  ).toBeInTheDocument();

  expect(screen.getByText("テストタイトル4")).toBeInTheDocument();
  expect(
    screen.getByAltText("テストタイトル4のサムネイル")
  ).toBeInTheDocument();
  expect(screen.getByText("テストチャンネル4")).toBeInTheDocument();
  expect(screen.getByText("2021/12/31")).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "テストタイトル4の追加" })
  ).toBeInTheDocument();
});

test("追加ボタンを押して, WatchList に動画を追加する", () => {
  userEvent.click(
    screen.getByRole("button", { name: "テストタイトル1の追加" })
  );

  expect(screen.getByRole("link", { name: "動画を見る" })).toBeInTheDocument();
});

test("ゴミ箱アイコンを押して, WatchList から動画を削除する", () => {
  userEvent.click(
    screen.getByRole("button", { name: "テストタイトル1の追加" })
  );
  expect(screen.getByRole("link", { name: "動画を見る" })).toBeInTheDocument();

  userEvent.click(
    screen.getByRole("button", { name: "テストタイトル1の削除" })
  );

  expect(screen.queryByRole("link", { name: "動画を見る" })).toBeNull();
});
