import React from 'react';
import { Game } from '../types';
import { Card, CardContent, Typography } from '@mui/material';

interface GameDetailsProps {
  game: Game;
}

const GameDetails: React.FC<GameDetailsProps> = ({ game }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {game.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ID: {game.id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Origin City: {game.originCity}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Current City: {game.currentCity}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default GameDetails;
