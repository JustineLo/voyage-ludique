
import { createContext } from 'react';
import { GameAction, GameState } from '../types';

export interface GameContextProps {
    state: GameState;
    dispatch: React.Dispatch<GameAction>;
}

export const defaultState: GameState = {
    games: [],
    searchedGame: null,
    displayedMoves: [],
  };

export const GameContext = createContext<GameContextProps>({
    state: defaultState,
    dispatch: () => null,
});

