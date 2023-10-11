import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
import style from "./styles.module.css";

export default function Loading() {
  return (
    <Box className={style["loading-container"]} data-testid="loading-component">
      <CircularProgress size={30} sx={{ marginLeft: 2, color: "#fff" }} />
    </Box>
  );
}
