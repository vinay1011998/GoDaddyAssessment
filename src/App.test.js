import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Hello, Vinay! heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/Hello, Vinay!/i);
  expect(headingElement).toBeInTheDocument();
});
