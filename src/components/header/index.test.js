import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./index";

jest.mock("@innovaccer/design-system", () => ({
  PageHeader: ({ title }) => <h1>{title}</h1>,
}));

describe("Header Component", () => {
  it("renders without crashing", () => {
    render(<Header title="Repositories" />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
