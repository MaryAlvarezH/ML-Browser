import { render } from "@testing-library/react";
import { ItemDetailsSkeleton } from "./ItemDetailsSkeleton";

describe("ItemDetailsSkeleton", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ItemDetailsSkeleton />);
    expect(baseElement).toBeTruthy();
  });
});
