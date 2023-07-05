import React, { useState, useContext } from 'react';
import { TextField, Button } from '@mui/material';
import { GameContext } from '../contexts/GameContext';
import { Game } from '../types';

const initialNewGame: Game = {
    id: 0,
    name: '',
    originCity: '',
    currentCity: '',
    startDate: '',
    lastMoveDate: '',
    numberOfMoves: 0
};

const NewGameForm: React.FC = () => {
  const [newGame, setNewGame] = useState<Game>(initialNewGame); 
  const { dispatch } = useContext(GameContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: 'ADD_GAME', payload: newGame });
    setNewGame(initialNewGame); 
  };

  return (
    <form onSubmit={handleSubmit}>
        <TextField 
            label="Game Name" 
            variant="outlined"
            value={newGame.name}
            onChange={(e) => setNewGame({...newGame, name: e.target.value})}
        />
        <TextField 
            label="Origin City" 
            variant="outlined"
            value={newGame.originCity}
            onChange={(e) => setNewGame({...newGame, originCity: e.target.value})}
        />
        <TextField 
            label="Current City" 
            variant="outlined"
            value={newGame.currentCity}
            onChange={(e) => setNewGame({...newGame, currentCity: e.target.value})}
        />
        <TextField  
            label="Start Date"
            variant="outlined"
            value={newGame.startDate}
            onChange={(e) => setNewGame({...newGame, startDate: e.target.value})}
        />
        <TextField
            label="Last Move Date"
            variant="outlined"
            value={newGame.lastMoveDate}
            onChange={(e) => setNewGame({...newGame, lastMoveDate: e.target.value})}
        />
        <TextField
            label="Number of Moves"
            variant="outlined"
            value={newGame.numberOfMoves}
            onChange={(e) => setNewGame({...newGame, numberOfMoves: parseInt(e.target.value)})}
        />
      <Button type="submit" variant="contained" sx={{ ml: 1 }}>Add New Game</Button>
    </form>
  );
}

export default NewGameForm;
