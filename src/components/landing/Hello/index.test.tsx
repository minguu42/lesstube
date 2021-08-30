import { render, screen } from "@testing-library/react";

import { Hello } from "./index";

beforeEach(() => {
  render(<Hello />);
});

describe("display", () => {
  it("should display link", (): void => {
    expect(screen.getByText("Next App Template")).toBeInTheDocument();
  });
});
