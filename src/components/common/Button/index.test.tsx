import { render, screen } from "@testing-library/react";

import { OutlinedButton, OutlinedLinkButton } from "./index";

test("display OutlinedButton", () => {
  const handleClick = jest.fn();
  render(<OutlinedButton label="TEXT" onClick={handleClick} />);
  expect(screen.getByText("TEXT"));
});

test("display OutlinedLinkButton", () => {
  render(<OutlinedLinkButton label="TEXT" url="" />);
  expect(screen.getByText("TEXT"));
});
