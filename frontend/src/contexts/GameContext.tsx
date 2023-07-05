import { createContext } from 'react';
import { GameAction, GameState } from '../types';

interface GameContextProps {
    state: GameState;
    dispatch: React.Dispatch<GameAction>;
}

export const GameContext = createContext<GameContextProps | undefined>(undefined);

