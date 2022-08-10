import { render, screen, act } from "@testing-library/react";
import { SearchResqueTypes, SearchTypes } from "../../utils/enums";
import { SearchResqueMessage } from "./SearchResqueMessage";

describe("SearchResqueMessage", () => {
  it("should render successfully when there isn't data for items page", async () => {
    render(
      <SearchResqueMessage
        searchResqueType={SearchResqueTypes.emptyData}
        searchType={SearchTypes.items}
      />
    );

    await act(async () => {
      const contentForEmptyDataInItems: HTMLElement = screen.getByTestId(
        "empty-data-for-items-content"
      );
      expect(contentForEmptyDataInItems).toBeTruthy();
    });
  });

  it("should render successfully when there is an error in items page", async () => {
    render(
      <SearchResqueMessage
        searchResqueType={SearchResqueTypes.error}
        searchType={SearchTypes.items}
      />
    );

    await act(async () => {
      const contentForErrorInItems: HTMLElement = screen.getByTestId(
        "error-for-items-content"
      );
      expect(contentForErrorInItems).toBeTruthy();
    });
  });

  it("should render successfully when there is an error in item details page", async () => {
    render(
      <SearchResqueMessage
        searchResqueType={SearchResqueTypes.error}
        searchType={SearchTypes.itemDetails}
      />
    );

    await act(async () => {
      const contentForErrorInItemDetails: HTMLElement = screen.getByTestId(
        "error-for-item-details-content"
      );
      expect(contentForErrorInItemDetails).toBeTruthy();
    });
  });
});
