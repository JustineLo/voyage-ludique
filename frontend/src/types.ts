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

export interface Move {
    id: number;
    gameId: number;
    gameName: string;
    giver: string;
    receiver: string;
    originCity: string;
    currentCity: string;
    date: string;
}

export interface GameState {
    games: Game[];
    searchedGame: Game | null;
    displayedMoves: Move[];
}

interface SetSearchedGameAction {
    type: 'SET_SEARCHED_GAME';
    payload: Game;
}

interface AddGameAction {
    type: 'ADD_GAME';
    payload: Game;
}

interface SetDisplayedMovesAction {
    type: 'SET_DISPLAYED_MOVES';
    payload: Move[];
}

export type GameAction = SetSearchedGameAction | AddGameAction | SetDisplayedMovesAction;
