import { render, screen, fireEvent, act } from "@testing-library/react";
import { ItemPreview as ItemPreviewType } from "../../utils/types";
import { ItemPreview } from "./ItemPreview";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

const mockedItem: ItemPreviewType = {
  id: "MLA873236498",
  title: "Monitor Gamer LG 27ul500 Led 27   Blanco 100v/240v",
  price: {
    amount: 113900,
    currency: "ARS",
    decimals: 0,
  },
  picture: "http://http2.mlstatic.com/D_676111-MLA41418872467_042020-I.jpg",
  condition: "new",
  free_shipping: true,
};

describe("ItemPreview", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ItemPreview item={mockedItem} />);
    expect(baseElement).toBeTruthy();
  });

  it("should redirect to item details page after click on content", async () => {
    render(<ItemPreview item={mockedItem} />);

    const expectedPath = { pathname: `/items/${mockedItem.id}` };

    await act(async () => {
      const itemPreviewcontainer = screen.getByTestId("item-preview-container");
      fireEvent.click(itemPreviewcontainer);
    });

    await expect(mockedUsedNavigate).toHaveBeenCalledWith(expectedPath);
  });
});
