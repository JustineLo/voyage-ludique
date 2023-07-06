import React, { useContext, useState, } from 'react';
import { TextField, Button, ButtonGroup, Autocomplete } from '@mui/material';
import { GameContext } from '../contexts/GameContext';
import { Game } from '../types';

const GameSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchList, setSearchList] = useState<string[]>([]);
  const { state, dispatch } = useContext(GameContext);

  const handleSearch = (value: string | null) => {
    if (!value) {
      dispatch({ type: 'SET_DISPLAYED_MOVES', payload: [] });
      dispatch({ type: 'SET_SEARCHED_GAME', payload: null });
      return;
    }
    const searchedGames = state.games.filter((game: Game) => game.name.toLowerCase().includes(value.toLowerCase()));

    //TODO search moves
  };

  function handleClickName() {
    const nameList = state.games.map((game: Game) => game.name);
    setSearchList(nameList);
  }


  return (
    <>
      <div>
        <ButtonGroup>
          <Button onClick={handleClickName}>Nom du jeu</Button>
          <Button>ID</Button>
          <Button>Personne</Button>
          <Button>Ville</Button>
          
        </ButtonGroup>
      </div>
      <Autocomplete
      options={searchList}
      onChange={(e, value) => handleSearch(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search input"
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }}
        />
      )}
    />


    </>
  );
}

export default GameSearch;
