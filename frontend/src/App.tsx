import { useReducer } from "react";
import { gameReducer } from "./reducers/gameReducer";
import { GameContext } from "./contexts/GameContext";
import Layout from "./layout/Layout";

const initialState = {
  games: [],
};

function App() {

  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
      <GameContext.Provider value={{ state, dispatch }}>
        <Layout>
          <div></div>
        </Layout>
      </GameContext.Provider>
  );
}

export default App
