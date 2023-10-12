import { render, screen } from "@testing-library/react";
import Home from "../home/Home";

beforeEach(() => {
  render(<Home />);
});
describe("<Home/>", () => {
  test("Deberá renderizar el home con un título e input post", () => {
    const title = screen.getByText(/portal de frases/i);
    const inputElement = screen.getByRole("textbox");

    expect(title).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  test("Renderizado de input de busqueda", () => {
    const searchInput = screen.getByPlaceholderText(/Buscar/i);

    expect(searchInput).toBeInTheDocument();
  });
});
