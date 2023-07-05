import { useReducer } from "react";
import { gameReducer } from "./reducers/gameReducer";
import { GameContext } from "./contexts/GameContext";

const initialState = {
  games: [],
};

function App() {

  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
      <GameContext.Provider value={{ state, dispatch }}>
        <></>
      </GameContext.Provider>
  );
}

export default App
