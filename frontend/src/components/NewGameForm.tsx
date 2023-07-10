import React, { useState, useContext } from 'react';
import { TextField, Button } from '@mui/material';
import { GameContext } from '../contexts/GameContext';
import { Game } from '../types';
import { createGameAPI } from '../services/gameService';

const initialNewGame: Game = {
    id: 0,
    name: '',
    giver: '',
    originCity: '',
    currentCity: '',
    startDate: new Date().toISOString().slice(0, 10),
    lastMoveDate: '',
    numberOfMoves: 0
};

const NewGameForm: React.FC = () => {
  const [newGame, setNewGame] = useState<Game>(initialNewGame); 
  const { state, dispatch } = useContext(GameContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createGameAPI(newGame);
      dispatch({ type: 'SET_GAMES', payload: [...state.games, newGame] });
      setNewGame(initialNewGame);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
        <TextField 
            label="Nom du jeu" 
            variant="outlined"
            value={newGame.name}
            onChange={(e) => setNewGame({...newGame, name: e.target.value})}
        />
        <TextField 
            label="Donneur initial" 
            variant="outlined"
            value={newGame.originCity}
            onChange={(e) => setNewGame({...newGame, originCity: e.target.value})}
        />
        <TextField 
            label="Ville d'origine" 
            variant="outlined"
            value={newGame.currentCity}
            onChange={(e) => setNewGame({...newGame, currentCity: e.target.value})}
        />
        <TextField  
            type="date"
            label="Date du don"
            variant="outlined"
            value={newGame.startDate}
            onChange={(e) => setNewGame({...newGame, startDate: e.target.value})}
        />
      <Button type="submit" variant="contained" sx={{ ml: 1 }}>Add New Game</Button>
    </form>
  );
}

export default NewGameForm;
