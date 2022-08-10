import { render, screen, fireEvent, act } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { SearchBox } from "./SearchBox";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("SearchBox", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Router>
        <SearchBox />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });

  it("should redirect to /items page after search submit", async () => {
    render(
      <Router>
        <SearchBox />
      </Router>
    );

    const mockedSearch = "iphone";
    const expectedNavigation = {
      pathname: "/items",
      search: `?search=${mockedSearch}`,
    };

    await act(async () => {
      const searchInput = screen.getByTestId("search-input");
      const searchButton = screen.getByTestId("search-button");

      fireEvent.change(searchInput, {
        target: { value: mockedSearch },
      });
      fireEvent.click(searchButton);
    });

    await expect(mockedUsedNavigate).toHaveBeenCalledWith(expectedNavigation);
  });
});
