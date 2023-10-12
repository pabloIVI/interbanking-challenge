import { DataProps } from "../../hooks/usePhrases";
import { IconButton, Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import style from "./styles.module.css";

interface ItemProps {
  item: DataProps;
  handleDelete: (id: number) => void;
}

export default function CardIbk({ item, handleDelete }: ItemProps) {
  const getDate = (date: Date) => {
    const d = new Date(date);
    return d.toLocaleDateString() + " a las " + d.toLocaleTimeString();
  };

  return (
    <Card className={style["card-ibk"]}>
      <CardContent>
        <Box className={style["card-header"]}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Publicada el {getDate(item.createdAt)}
          </Typography>
          <Box className={style["delete-icon-button"]}>
            <Tooltip title="Eliminar" placement="right">
              <IconButton onClick={() => handleDelete(item.id)}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        <Typography variant="h5" component="div" className="card-phrase">
          {item?.text}
        </Typography>
      </CardContent>
    </Card>
  );
}
