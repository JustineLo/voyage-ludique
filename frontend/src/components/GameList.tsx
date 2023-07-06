import React, { useContext } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Move } from '../types';
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
          {state.displayedMoves.map((move: Move) => (
            <TableRow key={move.id}>
              <TableCell>{move.id}</TableCell>
              <TableCell>{move.gameName}</TableCell>
              <TableCell>{move.originCity}</TableCell>
              <TableCell>{move.currentCity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default GameList;
