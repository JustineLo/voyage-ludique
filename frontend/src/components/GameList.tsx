import React, { useState, useEffect } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Game } from '../types';
import { getAllAPI } from '../services/gameService';

const GameList: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      const fetchedGames = await getAllAPI();
      setGames(fetchedGames);
    };
    
    fetchGames();
  }, []);

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
          {games.map((game: Game) => (
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
