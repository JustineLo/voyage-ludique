import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Game } from "../types";
import { GameContext } from "../contexts/GameContext";

function GameDetail() {
    const { gameId } = useParams();
    const { state } = useContext(GameContext);

    if (!gameId) {
        return <div>Game not found</div>
    }

    const game: Game | undefined = state.games.find((game: Game) => game.id === parseInt(gameId));

    if (!game) {
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
            
        </div>
    )
}

export default GameDetail;