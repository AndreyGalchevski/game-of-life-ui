import {
  createContext,
  useReducer,
  useContext,
  useCallback,
  FC,
  PropsWithChildren,
  useEffect,
} from "react";
import { countLiveCells } from "../utils/grid";

const emptyGrid = new Array(30).fill(new Array(30).fill(0));

export type GameStatus = "on" | "off";

interface GameState {
  status: GameStatus;
  grid: number[][];
  liveCellsCount: number;
}

export interface GameActions {
  setGrid: (newGrid: number[][]) => void;
  resetGame: () => void;
  setStatus: (newStatus: GameStatus) => void;
}

const GameStateContext = createContext<GameState | undefined>(undefined);
const GameActionsContext = createContext<GameActions | undefined>(undefined);

const boardingReducer = (
  currentState: GameState,
  action: { payload: Partial<GameState> }
): GameState => ({ ...currentState, ...action.payload });

const initialState: GameState = {
  status: "off",
  grid: emptyGrid,
  liveCellsCount: 0,
};

export const GameProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(boardingReducer, initialState);

  useEffect(() => {
    const liveCellsCount = countLiveCells(state.grid);
    dispatch({
      payload: { liveCellsCount },
    });
  }, [state.grid]);

  const setGrid = (newGrid: number[][]) => {
    dispatch({ payload: { grid: newGrid } });
  };

  const resetGame = () => {
    dispatch({ payload: initialState });
  };

  const setStatus = (newStatus: GameStatus) => {
    dispatch({ payload: { status: newStatus } });
  };

  const actions: GameActions = {
    setGrid: useCallback(setGrid, []),
    resetGame: useCallback(resetGame, []),
    setStatus: useCallback(setStatus, []),
  };

  return (
    <GameStateContext.Provider value={state}>
      <GameActionsContext.Provider value={actions}>
        {children}
      </GameActionsContext.Provider>
    </GameStateContext.Provider>
  );
};

export const useGameState = () => {
  const context = useContext(GameStateContext);
  if (context === undefined) {
    throw new Error("useGameState must be used within a GameProvider");
  }
  return context;
};

export const useGameActions = () => {
  const context = useContext(GameActionsContext);
  if (context === undefined) {
    throw new Error("useGameActions must be used within a GameProvider");
  }
  return context;
};
