import * as React from 'react';
import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Move } from '../types';

const MovesList: React.FC = () => {
  const { state } = useContext(GameContext);

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Game ID</TableCell>
            <TableCell align="right">Game Name</TableCell>
            <TableCell align="right">Giver</TableCell>
            <TableCell align="right">Receiver</TableCell>
            <TableCell align="right">Origin City</TableCell>
            <TableCell align="right">Current City</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Comment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.displayedMoves.map((move: Move) => (
            <TableRow
              key={move.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {move.id}
              </TableCell>
              <TableCell align="right">{move.gameId}</TableCell>
              <TableCell align="right">{move.gameName}</TableCell>
              <TableCell align="right">{move.giver}</TableCell>
              <TableCell align="right">{move.receiver}</TableCell>
              <TableCell align="right">{move.originCity}</TableCell>
              <TableCell align="right">{move.currentCity}</TableCell>
              <TableCell align="right">{move.date}</TableCell>
              <TableCell align="right">{move.comment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MovesList;