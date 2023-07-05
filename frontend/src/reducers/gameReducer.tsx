import { GameAction, GameState } from '../types';

export const gameReducer = (state: GameState, action: GameAction): GameState => {
    switch (action.type) {
        case 'SET_GAMES':
            return {
                ...state,
                games: action.payload,
            };
        case 'ADD_GAME':
            return {
                ...state,
                games: [...state.games, action.payload],
            };
        default:
            return state;
    }
};
