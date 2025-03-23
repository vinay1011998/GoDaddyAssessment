import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import RepositoryTable from "./index";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { name: "repo-1" },
        { name: "repo-2" },
        { name: "repo-3" },
      ]),
  })
);

jest.mock("@innovaccer/design-system", () => ({
  Card: ({ children }) => <div data-testid="Card">{children}</div>,
  Table: ({ fetchData, onRowClick }) => {
    fetchData({ page: 1 }).then((data) => {
      if (data.data.length === 0) {
        return <div data-testid="NoData">No Repositories found</div>;
      }
    });

    return (
      <table data-testid="Table">
        <tbody>
          <tr
            data-testid="TableRow"
            onClick={() => onRowClick({ name: "repo-1" })}
          >
            <td>repo-1</td>
          </tr>
        </tbody>
      </table>
    );
  },
  Heading: ({ children }) => <h4 data-testid="Heading">{children}</h4>,
  Text: ({ children }) => <p data-testid="Text">{children}</p>,
}));

describe("RepositoryTable Component", () => {
  it("renders the table and fetches data", async () => {
    render(
      <MemoryRouter>
        <RepositoryTable />
      </MemoryRouter>
    );

    expect(screen.getByTestId("Card")).toBeInTheDocument();
    expect(screen.getByTestId("Table")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("repo-1")).toBeInTheDocument();
    });
  });
});
