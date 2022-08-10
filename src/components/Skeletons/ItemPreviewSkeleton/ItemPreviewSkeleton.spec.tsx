import { render } from "@testing-library/react";
import { ItemPreviewSkeleton } from "./ItemPreviewSkeleton";

describe("ItemPreviewSkeleton", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ItemPreviewSkeleton />);
    expect(baseElement).toBeTruthy();
  });
});
