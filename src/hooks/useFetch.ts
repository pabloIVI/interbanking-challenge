import { DataProps } from "./usePhrases";

function useFetch() {
  const getPhrases = async () => {
    const response: void | DataProps[] = await fetch(
      "https://65249083ea560a22a4e9eed9.mockapi.io/ibk/phrases",
      { method: "GET", headers: { "Content-Type": "application/json" } }
    ).then((response) => response.json());

    return response;
  };

  const postPhrase = async (data: any) => {
    const response = await fetch(
      "https://65249083ea560a22a4e9eed9.mockapi.io/ibk/phrases",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ).then((response) => response.json());

    return response;
  };

  const deletePhrase = async (id: number) => {
    const response = await fetch(
      `https://65249083ea560a22a4e9eed9.mockapi.io/ibk/phrases/${id}`,
      {
        method: "DELETE",
      }
    ).then((response) => response.json());

    return response;
  };

  return { getPhrases, postPhrase, deletePhrase };
}

export default useFetch;
