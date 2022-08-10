import { render, screen, act } from "@testing-library/react";
import { CategoriesList } from "./CategoriesList";

const mockedCategories: string[] = [
  "Hogar, Muebles y Jardín",
  "Electrodomésticos y Aires Ac.",
  "Monitores y Accesorios",
  "Accesorios para Celulares",
  "Laptops y Accesorios",
];

describe("CategoriesList", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <CategoriesList categories={mockedCategories} />
    );
    expect(baseElement).toBeTruthy();
  });

  it("should show n category legends", async () => {
    render(<CategoriesList categories={mockedCategories} />);

    await act(async () => {
      const categoriesListContainer: HTMLElement = screen.getByTestId(
        "categories-list-container"
      );
      await expect(categoriesListContainer.children.length).toEqual(
        mockedCategories.length
      );
    });
  });

  it("should not show any category legends", async () => {
    const mockedEmptyCatgories: string[] = [];
    render(<CategoriesList categories={mockedEmptyCatgories} />);

    await act(async () => {
      const categoriesListContainer: HTMLElement = screen.getByTestId(
        "categories-list-container"
      );
      await expect(categoriesListContainer.children.length).toEqual(
        mockedEmptyCatgories.length
      );
    });
  });
});
