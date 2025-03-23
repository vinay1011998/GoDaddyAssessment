import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import RepositoryCard from "./index";
import useFetchData from "../../hooks/useFetchData";

jest.mock("../../hooks/useFetchData", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("@innovaccer/design-system", () => ({
  PageHeader: ({ title }) => <div data-testid="PageHeader">{title}</div>,
  Spinner: () => <div data-testid="Spinner">Loading...</div>,
  Card: ({ children }) => <div data-testid="Card">{children}</div>,
  CardHeader: ({ children }) => <div data-testid="CardHeader">{children}</div>,
  CardBody: ({ children }) => <div data-testid="CardBody">{children}</div>,
  CardFooter: ({ children }) => <div data-testid="CardFooter">{children}</div>,
  Row: ({ children }) => <div data-testid="Row">{children}</div>,
  Column: ({ children }) => <div data-testid="Column">{children}</div>,
  Text: ({ children }) => <div data-testid="Text">{children}</div>,
  Badge: ({ children }) => <div data-testid="Badge">{children}</div>,
  LinkButton: ({ children, onClick }) => (
    <button data-testid="LinkButton" onClick={onClick}>
      {children}
    </button>
  ),
  Heading: ({ size, children }) => (
    <div data-testid="Heading" data-size={size}>
      {children}
    </div>
  ),
}));

describe("RepositoryCard Component", () => {
  const mockRepoData = {
    name: "test-repo",
    private: false,
    description: "Test description",
    language: "JavaScript",
    html_url: "https://github.com/test-repo",
    forks: 10,
    watchers_count: 5,
    open_issues_count: 2,
  };

  it("displays an error message when API call fails", async () => {
    useFetchData.mockReturnValue({
      data: null,
      loading: false,
      error: { message: "API Error" },
    });

    render(
      <MemoryRouter initialEntries={["/repos/test-repo"]}>
        <Route path="/repos/:id" component={RepositoryCard} />
      </MemoryRouter>
    );

    expect(screen.getByText(/error loading repository/i)).toBeInTheDocument();
    expect(screen.getByText(/api error/i)).toBeInTheDocument();
  });

  it("shows 'No repository data found' when API returns null", () => {
    useFetchData.mockReturnValue({ data: null, loading: false, error: null });

    render(
      <MemoryRouter initialEntries={["/repos/test-repo"]}>
        <Route path="/repos/:id" component={RepositoryCard} />
      </MemoryRouter>
    );

    expect(screen.getByText(/No repository data found/i)).toBeInTheDocument();
  });

  it("displays repository details correctly when API call succeeds", async () => {
    useFetchData.mockReturnValue({
      data: mockRepoData,
      loading: false,
      error: null,
    });

    render(
      <MemoryRouter initialEntries={["/repos/test-repo"]}>
        <Route path="/repos/:id" component={RepositoryCard} />
      </MemoryRouter>
    );

    expect(screen.getByText("test-repo")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
    expect(screen.getByText("Forks:")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("Watchers:")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("Open Issues:")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("opens repository link when the button is clicked", async () => {
    useFetchData.mockReturnValue({
      data: mockRepoData,
      loading: false,
      error: null,
    });
    global.open = jest.fn();

    render(
      <MemoryRouter initialEntries={["/repos/test-repo"]}>
        <Route path="/repos/:id" component={RepositoryCard} />
      </MemoryRouter>
    );

    const linkButton = screen.getByRole("button", {
      name: /link to repository/i,
    });
    userEvent.click(linkButton);

    await waitFor(() =>
      expect(global.open).toHaveBeenCalledWith(
        "https://github.com/test-repo",
        "_blank"
      )
    );
  });
});
