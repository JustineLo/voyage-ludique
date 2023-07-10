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
        comment: string;
}

export interface GameState {
    games: Game[];
    searchedGame: Game | null;
    displayedMoves: Move[];
}

interface SetSearchedGameAction {
    type: 'SET_SEARCHED_GAME';
    payload: Game | null;
}

interface SetDisplayedMovesAction {
    type: 'SET_DISPLAYED_MOVES';
    payload: Move[];
}

interface AddGameAction {
    type: 'SET_GAMES';
    payload: Game[];
}

interface AddMoveAction {
    type: 'ADD_MOVE';
    payload: Move;
}

export type GameAction = SetSearchedGameAction | SetDisplayedMovesAction | AddGameAction | AddMoveAction;
