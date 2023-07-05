import { useReducer } from "react";
import { gameReducer } from "./reducers/gameReducer";
import { GameContext, defaultState } from "./contexts/GameContext";
import Layout from "./layout/Layout";


function App() {
  const [state, dispatch] = useReducer(gameReducer, defaultState);

  return (
      <GameContext.Provider value={{ state, dispatch }}>
        <Layout>
          <div></div>
        </Layout>
      </GameContext.Provider>
  );
}

export default App
