import React, { useState, useContext } from "react";
import { TextField, Button } from "@mui/material";
import { GameContext } from "../contexts/GameContext";
import { Game, Move } from "../types";
import { createMoveAPI } from "../services/moveService";
import styled from "styled-components";

interface NewMoveFormProps {
  game: Game;
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  button {
    color: white;
  }
`;

const Fields = styled.div`
  display: flex;
  gap: 1rem;
`;

const NewMoveForm = ({ game }: NewMoveFormProps) => {
  const initialNewMove: Move = {
    id: Math.floor(Math.random() * 999 + 100),
    gameId: game.id,
    gameName: game.name,
    giver: "",
    receiver: "",
    originCity: "",
    currentCity: "",
    date: new Date().toISOString().slice(0, 10),
    comment: "",
  };

  const [newMove, setNewMove] = useState<Move>(initialNewMove);
  const { dispatch, state } = useContext(GameContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createMoveAPI(newMove);
      dispatch({
        type: "SET_DISPLAYED_MOVES",
        payload: [...state.displayedMoves, newMove],
      });
      setNewMove(initialNewMove);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Fields>
        <TextField
          label="Donneur"
          variant="outlined"
          value={newMove.giver}
          onChange={(e) => setNewMove({ ...newMove, giver: e.target.value })}
        />
        <TextField
          label="Receveur"
          variant="outlined"
          value={newMove.receiver}
          onChange={(e) => setNewMove({ ...newMove, receiver: e.target.value })}
        />
        <TextField
          label="Ville d'origine"
          variant="outlined"
          value={newMove.originCity}
          onChange={(e) =>
            setNewMove({ ...newMove, originCity: e.target.value })
          }
        />
        <TextField
          label="Ville actuelle"
          variant="outlined"
          value={newMove.currentCity}
          onChange={(e) =>
            setNewMove({ ...newMove, currentCity: e.target.value })
          }
        />
        <TextField
          type="date"
          label="Date du don"
          variant="outlined"
          value={newMove.date}
          onChange={(e) => setNewMove({ ...newMove, date: e.target.value })}
        />
      </Fields>

      <Button type="submit" variant="contained" sx={{ ml: 1 }}>
        AJOUTER
      </Button>
    </Container>
  );
};

export default NewMoveForm;
