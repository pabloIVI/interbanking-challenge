import { render, screen } from "@testing-library/react";
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
});
