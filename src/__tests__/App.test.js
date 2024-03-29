import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the logo", () => {
    render(<App />);

    const logo = screen.getByAltText(/nasa/i);

    expect(logo).toBeInTheDocument();
  });
});
