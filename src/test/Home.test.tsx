import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "../home/Home";

describe("<Home/>", () => {
  test("Deberá renderizar el home con tu título", () => {
    render(<Home />);

    const title = screen.getByText(/portal de frases/i);

    expect(title).toBeInTheDocument();
  });

  test("Deberá postear nueva frase", async () => {
    render(<Home />);

    const inputElement = screen.getByRole("textbox");

    fireEvent.change(inputElement, { target: { value: "Interbanking" } });

    const buttonElement = screen.getByText(/Publicar/i);

    fireEvent.click(buttonElement);

    await waitFor(() => {
      const newCard = screen.getAllByText(/Interbanking/i)[0] as HTMLDivElement;
      expect(newCard).toBeInTheDocument();
    });
  });

  test("Deberá llamar la funcion delete", async () => {
    render(<Home />);
    let cards: HTMLDivElement[] = [];
    let totalCards: number = 0;

    await waitFor(() => {
      cards = screen.getAllByTestId("card");
      totalCards = cards.length;
      expect(cards[cards.length - 1]).toBeInTheDocument();
    });

    const id = cards[cards.length - 1]
      .getElementsByTagName("button")[0]
      .getAttribute("data-testid");

    const removeButton = screen.getByTestId(id!.toString());

    fireEvent.click(removeButton);

    //Se espera un backdrop lanzado por el evento Delete
    const backdrop = screen.getByTestId(/backdrop/i);
    expect(backdrop).toBeInTheDocument();
  });
});
