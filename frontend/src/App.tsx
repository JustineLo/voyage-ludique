import { useReducer, useEffect } from "react";
import { gameReducer } from "./reducers/gameReducer";
import { GameContext, defaultState } from "./contexts/GameContext";
import Layout from "./layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewGame from "./pages/NewGame";
import GameDetail from "./pages/GameDetails";
import { getAllGamesAPI } from "./services/gameService";
import { getAllMovesAPI } from "./services/moveService";


function App() {
  const [state, dispatch] = useReducer(gameReducer, defaultState);
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const games = await getAllGamesAPI();
        const allMoves = await getAllMovesAPI();
        dispatch({ type: 'SET_GAMES', payload: games });
        dispatch({ type: 'SET_ALL_MOVES', payload: allMoves });
      } catch (error) {
        console.error(error);
      }
    };
    fetchGames();
  }, []);

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
