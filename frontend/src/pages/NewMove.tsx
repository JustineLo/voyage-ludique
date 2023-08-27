import { TextField, Autocomplete } from "@mui/material";
import { GameContext, GameContextProps } from "../contexts/GameContext";
import { useContext, useState } from "react";
import { Game, Move } from "../types";
import NewMoveForm from "../components/NewMoveForm";
import MovesList from "../components/MovesList";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

function NewMove() {
  const { state, dispatch } = useContext<GameContextProps>(GameContext);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const onSelectGame = (value: string | null) => {
    const selectedGame: Game | null =
      state.games.find((game: Game) => game.name === value) || null;
    if (selectedGame) {
      setSelectedGame(selectedGame);
      const displayedMoves: Move[] = state.allmoves.filter((move: Move) => {
        return move.gameId == selectedGame.id;
      });
      dispatch({ type: "SET_DISPLAYED_MOVES", payload: displayedMoves });
    } else {
      setSelectedGame(null);
      dispatch({ type: "SET_DISPLAYED_MOVES", payload: [] });
    }
  };
  return (
    <Container>
      <h3>Sélectionnez un jeu :</h3>
      <Autocomplete
        options={state.games.map((game: Game) => game.name)}
        color="primary"
        sx={{ width: 300 }}
        onChange={(e, value) => onSelectGame(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            color="primary"
            sx={{ borderRadius: 40 }}
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
      {selectedGame && (
        <>
          <NewMoveForm game={selectedGame} />
          <MovesList />
        </>
      )}
    </Container>
  );
}

export default NewMove;
