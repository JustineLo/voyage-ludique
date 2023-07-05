export interface Game {
    id: number;
    name: string;
    giver: string;
    originCity: string;
    currentCity: string;
    startDate: string;
    lastMoveDate: string;
    numberOfMoves: number;
}

export interface GameState {
    games: Game[];
    searchResult: string[],
    selectedGame: Game | null
}

interface SetGamesAction {
    type: 'SET_GAMES';
    payload: Game[];
}

interface AddGameAction {
    type: 'ADD_GAME';
    payload: Game;
}

export type GameAction = SetGamesAction | AddGameAction;
