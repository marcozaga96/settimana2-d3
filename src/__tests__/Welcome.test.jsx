import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

describe("se è presente l'alert", () => {
  it("montaggio alert all'avvio", () => {
    render(<Welcome />);
    const mostraAlert = screen.getByRole("alert");
    expect(mostraAlert).toBeInTheDocument();
  });
});
