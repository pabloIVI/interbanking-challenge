import { DataProps } from "../hooks/usePhrases";
import { fireEvent, render, screen } from "@testing-library/react";
import CardContainer from "../components/Card/CardContainer";

describe("<CardContainer/>", () => {
  test("Mostrar texto para carga sin datos", () => {
    render(
      <CardContainer
        isLoading={false}
        isSearching={false}
        data={[]}
        handleDelete={() => null}
      />
    );

    const noResults = screen.getByText(/No se encontraron resultados./i);

    expect(noResults).toBeInTheDocument();
  });

  test("Mostrar loading", () => {
    render(
      <CardContainer
        isLoading={true}
        isSearching={false}
        data={[]}
        handleDelete={() => null}
      />
    );
    const loadingComponent = screen.getByTestId(/loading-component/i);
    expect(loadingComponent).toBeInTheDocument();
  });

  test("Click en button Delete y llamar a funcion handleDelete", () => {
    const data: DataProps[] = [
      {
        createdAt: new Date(),
        text: "Frase uno",
        id: 0,
      },
    ];

    const mockHandleDelete = jest.fn();

    const component = render(
      <CardContainer
        isLoading={false}
        isSearching={false}
        data={data}
        handleDelete={mockHandleDelete}
      />
    );

    const button = component.getByRole("button");

    fireEvent.click(button);

    expect(mockHandleDelete).toHaveBeenCalledTimes(1);
  });
});
