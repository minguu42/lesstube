import { screen } from "@testing-library/react";
import { getPage } from "next-page-tester";

describe("/finish page display", () => {
  beforeEach(async () => {
    const { render } = await getPage({ route: "/finish" });
    render();
  });

  test("display message", () => {
    expect(screen.getByText(/Thank you for watching./i)).toBeInTheDocument();
    expect(screen.getByText(/Have a nice day!/i)).toBeInTheDocument();
  });

  test("display image", () => {
    expect(
      screen.getAllByRole("img", { name: "Goodbye Image" })[1]
    ).toBeInTheDocument();
  });
});
