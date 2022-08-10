import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

describe("App", () => {
  test("should render successfully", () => {
    render(
      <Router>
        <App />
      </Router>
    );
  });
});
