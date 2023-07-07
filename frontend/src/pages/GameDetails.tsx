import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Game, Move } from "../types";
import { GameContext, GameContextProps } from "../contexts/GameContext";
import NewMoveForm from "../components/NewMoveForm";
import MovesList from "../components/MovesList";
import { getMovesByGameIdAPI } from "../services/moveService";

 function GameDetail() {
    const { gameId } = useParams();
    const { state, dispatch } = useContext<GameContextProps>(GameContext);

    if (!gameId) {
        return <div>Game not found</div>
    }

    const game: Game | undefined = state.games.find((game: Game) => game.id === parseInt(gameId));

    useEffect(() => {
        const fetchGameMoves = async () => {
            if (game) {
                const gameMoves: Move[] = await getMovesByGameIdAPI(game.id);
                dispatch({ type: 'SET_DISPLAYED_MOVES', payload: gameMoves });
            }
        };
        fetchGameMoves();
    }, [game, dispatch]);

    if (!gameId || !game) {
        return <div>Game not found</div>
    }

    return (
        <div>
            <p>
                <span>Game ID: {game.id}</span>
            </p>
            <p>
                <span>Game Name: {game.name}</span>
            </p>
            <p>
                <span>Origin City: {game.originCity}</span>
            </p>
            <p>
                <span>Current City: {game.currentCity}</span>
            </p>
            <p>
                <span>Start Date: {game.startDate}</span>
            </p>
            <p>
                <span>Last Move Date: {game.lastMoveDate}</span>
            </p>
            <p>
                <span>Number of Moves: {game.numberOfMoves}</span>
            </p>
            <NewMoveForm game={game} />
            <MovesList />
        </div>
    )
}

export default GameDetail;