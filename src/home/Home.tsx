import "../index.css";
import { Backdrop, Box, CircularProgress } from "@mui/material";
import AddPhrase from "../components/AddPhrase";
import CardContainer from "../components/Card/CardContainer";
import Loading from "../components/Loading/Loading";
import SearchToolbar from "../components/SearchToolbar";
import Title from "../components/Title";
import usePhrases from "../hooks/usePhrases";

function App() {
  const {
    data,
    phrase,
    isLoading,
    posting,
    filteredData,
    searchInput,
    isSearching,
    deletingCard,
    handleChange,
    handleSubmit,
    handleDelete,
    handleChangeSearch,
  } = usePhrases();

  return (
    <Box className="main-container">
      <Box className="ibk">
        <Title />
        <AddPhrase
          onChange={handleChange}
          handleSubmit={handleSubmit}
          phrase={phrase}
        />
        <SearchToolbar
          onChange={handleChangeSearch}
          searchInput={searchInput}
        />
        {posting && <Loading />}
        <CardContainer
          searchInput={searchInput}
          data={filteredData || data}
          isLoading={isLoading}
          isSearching={isSearching}
          handleDelete={handleDelete}
        />
      </Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={deletingCard}
        data-testid="backdrop"
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
}

export default App;
