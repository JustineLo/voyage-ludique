
import { createContext } from 'react';
import { GameAction, GameState } from '../types';
import { getAllGamesAPI } from '../services/gameService';

export interface GameContextProps {
    state: GameState;
    dispatch: React.Dispatch<GameAction>;
}

export const defaultState: GameState = {
    games: await getAllGamesAPI(),
    searchedGame: null,
    displayedMoves: [],
  };

export const GameContext = createContext<GameContextProps>({
    state: defaultState,
    dispatch: () => null,
});

