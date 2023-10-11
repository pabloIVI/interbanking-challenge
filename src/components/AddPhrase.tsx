import { Box, Button } from "@mui/material";
import Input from "./Input";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
  handleSubmit: (event: any) => void;
  phrase: string;
};
function AddPhrase({ phrase, onChange, handleSubmit }: Props) {
  return (
    <Box className="section-component-container" data-testid="postInput">
      <Input
        label="Escribe una frase"
        variant="outlined"
        name="text"
        value={phrase}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.value?.length <= 100) onChange(e);
        }}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Publicar
      </Button>
    </Box>
  );
}

export default AddPhrase;
