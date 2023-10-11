import { Box } from "@mui/material";
import Input from "./Input";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
  searchInput: string;
};
function SearchToolbar({ onChange, searchInput }: Props) {
  return (
    <Box className="section-component-container" data-testid="searchInput">
      <Input
        label="Buscar"
        variant="outlined"
        name="frasesIBK"
        value={searchInput}
        onChange={onChange}
        type="search"
      />
    </Box>
  );
}

export default SearchToolbar;
