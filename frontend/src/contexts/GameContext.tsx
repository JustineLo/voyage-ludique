import { createContext } from 'react';
import { GameAction, GameState } from '../types';
import { getAllAPI } from '../services/gameService';

interface GameContextProps {
    state: GameState;
    dispatch: React.Dispatch<GameAction>;
}

export const defaultState: GameState = {
    games: await getAllAPI(),
    searchedGame: null,
    displayedMoves: [],
  };

export const GameContext = createContext<GameContextProps>({
    state: defaultState,
    dispatch: () => null,
});

