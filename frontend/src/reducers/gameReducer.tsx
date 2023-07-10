import { GameAction, GameState } from '../types';

export const gameReducer = (state: GameState, action: GameAction): GameState => {
    switch (action.type) {
        case 'SET_GAMES':
            return {
                ...state,
                games: action.payload,
            };
        case 'SET_SEARCHED_GAME':
            return {
                ...state,
                searchedGame: action.payload,
            };
        case 'SET_ALL_MOVES': 
            return {
                ...state,
                allmoves: action.payload,
            };
        case 'SET_DISPLAYED_MOVES':
            return {
                ...state,
                displayedMoves: action.payload,
            };
        default:
            return state;
    }
};
