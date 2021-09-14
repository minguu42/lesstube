import { screen } from "@testing-library/react";
import { getPage } from "next-page-tester";

beforeEach(async () => {
  const { render } = await getPage({ route: "/finish" });
  render();
});

describe("Finish ページの表示に関するテスト", () => {
  test("メッセージの表示", () => {
    expect(screen.getByText(/Thank you for watching./i)).toBeInTheDocument();
    expect(screen.getByText(/Have a nice day!/i)).toBeInTheDocument();
  });

  test("画像の表示", () => {
    expect(
      screen.getAllByRole("img", { name: "Goodbye Image" })[0]
    ).toBeInTheDocument();
  });
});
