import { FC } from "react";
import { Box } from "@mui/material";

import { useGameActions, useGameState } from "../../context/GameContext";
import useQueryNextStep from "../../hooks/useQueryNextStep";
import Cell from "../Cell";
import { countLiveCells } from "../../utils/grid";

const Grid: FC = () => {
  const { grid, status, liveCellsCount } = useGameState();
  const { setGrid, setStatus } = useGameActions();

  useQueryNextStep(grid, {
    enabled: status === "on" && liveCellsCount > 0,
    shouldPoll: true,
    onSuccess: (data) => {
      const liveCellsCount = countLiveCells(data);
      if (liveCellsCount === 0) {
        setStatus("off");
      }

      if (JSON.stringify(data) === JSON.stringify(grid)) {
        setStatus("off");
      }

      setGrid(data);
    },
  });

  const handleCellClick = (i: number, j: number) => {
    const updatedGrid = JSON.parse(JSON.stringify(grid));
    updatedGrid[i][j] = grid[i][j] === 1 ? 0 : 1;
    setGrid(updatedGrid);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {grid.map((row, i) => (
        <Box key={`row-${i}`}>
          {row.map((col, j) => (
            <Cell
              key={`col-${j}`}
              isAlive={!!col}
              onCellClick={() => handleCellClick(i, j)}
            />
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default Grid;
