import { useReducer } from "react";
import { gameReducer } from "./reducers/gameReducer";
import { GameContext, defaultState } from "./contexts/GameContext";
import Layout from "./layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewGame from "./pages/NewGame";
import GameDetail from "./pages/GameDetails";


function App() {
  const [state, dispatch] = useReducer(gameReducer, defaultState);

  return (
      <GameContext.Provider value={{ state, dispatch }}>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='ajouter-jeu' element={<NewGame />} />
              <Route path='jeu/:gameId' element={<GameDetail />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </GameContext.Provider>
  );
}

export default App
