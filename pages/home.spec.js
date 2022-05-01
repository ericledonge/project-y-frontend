import Home from "./index";
import { render } from "@testing-library/react";

describe("Home", () => {
  it("should render the page title", () => {
    const { getByText } = render(<Home />);

    expect(getByText(/Project Y/)).toBeDefined();
  });
});
