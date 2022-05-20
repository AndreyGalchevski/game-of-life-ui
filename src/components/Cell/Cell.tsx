import { Box } from "@mui/material";
import { FC } from "react";

interface Props {
  isAlive: boolean;
  onCellClick: () => void;
}

const Cell: FC<Props> = ({ isAlive, onCellClick }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        width: 20,
        height: 20,
        backgroundColor: isAlive ? "secondary.main" : "white",
        color: "white",
        borderColor: "#d3d3d3",
        borderWidth: 0.5,
        borderStyle: "solid",
      }}
      onClick={onCellClick}
    />
  );
};

export default Cell;
