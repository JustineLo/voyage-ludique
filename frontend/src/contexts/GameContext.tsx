import { createContext } from 'react';
import { GameAction, GameState } from '../types';

interface GameContextProps {
    state: GameState;
    dispatch: React.Dispatch<GameAction>;
}

export const defaultState: GameState = {
    games: [],
    searchResult: [],
    selectedGame: null,
  };

export const GameContext = createContext<GameContextProps>({
    state: defaultState,
    dispatch: () => null,
});

