import { FC } from "react";
import Button from "@mui/material/Button";
import { Box, ButtonGroup } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import CloseIcon from "@mui/icons-material/Close";
import RedoIcon from "@mui/icons-material/Redo";

import { useGameActions, useGameState } from "../../context/GameContext";
import useMutationNextStep from "../../hooks/useMutationNextStep";

const Footer: FC = () => {
  const { grid, status, liveCellsCount } = useGameState();
  const { resetGame, setStatus, setGrid } = useGameActions();

  const { mutate: getNextStep } = useMutationNextStep();

  const handleNextClick = () => {
    getNextStep(grid, {
      onSuccess: (data) => {
        setGrid(data);
      },
    });
  };

  const handleStartClick = () => {
    setStatus("on");
  };

  const handleStopClick = () => {
    setStatus("off");
  };

  const handleClearClick = () => {
    resetGame();
  };

  return (
    <Box
      sx={{
        paddingTop: 5,
        paddingBottom: 5,
      }}
    >
      <ButtonGroup size="large" aria-label="large button group">
        {status === "on" && liveCellsCount > 0 ? (
          <Button
            key="stop-btn"
            onClick={handleStopClick}
            endIcon={<StopCircleIcon />}
            variant="contained"
          >
            Stop
          </Button>
        ) : (
          <Button
            key="start-btn"
            onClick={handleStartClick}
            endIcon={<PlayArrowIcon />}
            variant="contained"
            disabled={liveCellsCount === 0}
          >
            Start
          </Button>
        )}

        <Button
          key="next-btn"
          endIcon={<RedoIcon />}
          onClick={handleNextClick}
          variant="contained"
          disabled={liveCellsCount === 0}
        >
          Next
        </Button>
        <Button
          key="clear-btn"
          endIcon={<CloseIcon />}
          onClick={handleClearClick}
          variant="contained"
          disabled={liveCellsCount === 0}
        >
          Reset
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Footer;
