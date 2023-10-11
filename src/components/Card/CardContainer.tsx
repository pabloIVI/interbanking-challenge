import { Box, Grid } from "@mui/material";
import { DataProps } from "../../hooks/usePhrases";
import CardIbk from "./CardIbk";
import Loading from "../Loading/Loading";
import style from "./styles.module.css";

interface Props {
  data: DataProps[];
  isLoading: boolean;
  handleDelete: (id: number) => void;
  isSearching: boolean;
  searchInput?: string;
}
function CardContainer({ data, isLoading, isSearching, handleDelete }: Props) {
  if (!data?.length && !isLoading && !isSearching)
    return (
      <p className="flex-center section-container" style={{ padding: "20px" }}>
        No se encontraron resultados.
      </p>
    );

  return (
    <>
      <Box
        p={1}
        className={style["card-container"]}
        sx={{ height: "auto", overflow: "hidden", overflowY: "auto" }}
        data-testid="cardContainer"
      >
        {isLoading || isSearching ? (
          <Loading />
        ) : (
          <Grid container spacing={2} columnSpacing={4}>
            {data?.map((item: DataProps) => (
              <Grid item xs={12} sm={6} md={4} key={item?.id}>
                <CardIbk item={item} handleDelete={handleDelete} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
}

export default CardContainer;
