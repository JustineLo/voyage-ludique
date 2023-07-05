export interface Game {
    id: number;
    name: string;
    originCity: string;
    currentCity: string;
    startDate: string;
    lastMoveDate: string;
    numberOfMoves: number;
}

export interface GameState {
    games: Game[];
}

interface SetGamesAction {
    type: 'SET_GAMES';
    payload: Game[];
}

export type GameAction = SetGamesAction;
