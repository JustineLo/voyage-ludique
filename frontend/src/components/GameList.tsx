import React, { useContext } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Game } from '../types';
import { GameContext } from '../contexts/GameContext';

const GameList: React.FC = () => {

  const { state } = useContext(GameContext);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Game ID</TableCell>
            <TableCell>Game Name</TableCell>
            <TableCell>Origin City</TableCell>
            <TableCell>Current City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.games.map((game: Game) => (
            <TableRow key={game.id}>
              <TableCell>{game.id}</TableCell>
              <TableCell>{game.name}</TableCell>
              <TableCell>{game.originCity}</TableCell>
              <TableCell>{game.currentCity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default GameList;
