import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import { Link } from 'react-router-dom';

const GamesList: React.FC = () => {

  const { state } = useContext(GameContext);

  return (
    <div>
      {state.games.length > 0 ? (
        <ul>
          {state.games.map((game) => {
            return <li key={game.id}><Link to={`jeu/${game.id}`}>{game.name}</Link></li>;
          })}
        </ul>
      ) : (
        <div>No games</div>
      )}
    </div>
  );
}

export default GamesList;
