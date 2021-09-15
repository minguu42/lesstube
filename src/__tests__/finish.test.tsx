import { RecoilRoot } from "recoil";
import { render, screen, waitFor } from "@testing-library/react";

import Finish from "pages/finish/index";

beforeEach(() => {
  render(
    <RecoilRoot>
      <Finish />
    </RecoilRoot>
  );
});

describe("表示に関するテスト", () => {
  test("メッセージを表示する", () => {
    expect(screen.getByText(/Thank you for watching./i)).toBeInTheDocument();
    expect(screen.getByText(/Have a nice day!/i)).toBeInTheDocument();
  });

  test("Goodbye Image を表示する", () => {
    expect(screen.getByAltText("Goodbye Image")).toBeInTheDocument();
  });
});
