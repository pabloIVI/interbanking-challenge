import { useEffect, useState } from "react";
import useFetch from "./useFetch";

export interface DataProps {
  id: number;
  text: string;
  createdAt: Date;
}
function usePhrases() {
  let timeout: any = null;
  const [phrase, setPhrase] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");
  const [data, setData] = useState<DataProps[]>([]);
  const [filteredData, setFilteredData] = useState<DataProps[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [deletingCard, setDeletingCard] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [posting, setPosting] = useState<boolean>(false);
  const { getPhrases, postPhrase, deletePhrase } = useFetch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhrase(e.target.value);
  };

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    try {
      setPosting(true);

      const body = {
        createdAt: new Date(),
        text: phrase!,
      };

      await postPhrase(body);
    } catch (e: any) {
      console.error(e);
    } finally {
      setPosting(false);
      setPhrase("");
      loadData();
    }
  };

  const handleDelete = async (id: number) => {
    try {
      setDeletingCard(true);
      await deletePhrase(id);
    } catch (e: any) {
      console.error(e);
    } finally {
      setDeletingCard(false);
      loadData();
    }
  };

  const loadData = async () => {
    try {
      setIsLoading(true);
      const response: void | DataProps[] = await getPhrases();
      if (response) setData(response);
    } catch (e: any) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    if (searchInput?.length > 2) {
      setIsSearching(true);
      timeout = setTimeout(() => {
        setFilteredData(
          data?.filter((i: DataProps) =>
            i.text?.toLowerCase()?.includes(searchInput.toLowerCase())
          )
        );
        setIsSearching(false);
      }, 1000);
    }
  };

  useEffect(() => {
    if (!data?.length) loadData();
    // eslint-disable-next-line
  }, [data]);

  useEffect(() => {
    if (searchInput) handleSearch();
    else {
      setFilteredData(null);
      setIsSearching(false);
    }
    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [searchInput]);

  return {
    phrase,
    filteredData,
    deletingCard,
    data,
    posting,
    isLoading,
    searchInput,
    isSearching,
    handleSearch,
    handleChange,
    handleSubmit,
    handleDelete,
    handleChangeSearch,
  };
}

export default usePhrases;
