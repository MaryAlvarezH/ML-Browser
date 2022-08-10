import { render, screen, fireEvent, act } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./Navbar";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Navbar", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });

  it("should redirect to / page after click on logo", async () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const expectedPath = "/";

    await act(async () => {
      const homeLink = screen.getByTestId("home-link");
      fireEvent.click(homeLink);
    });

    await expect(mockedUsedNavigate).toHaveBeenCalledWith(expectedPath);
  });
});
