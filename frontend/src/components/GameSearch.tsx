import React, { useContext, useEffect, useState, } from 'react';
import { TextField, Button, ButtonGroup, Autocomplete } from '@mui/material';
import { GameContext, GameContextProps } from '../contexts/GameContext';
import { Game, Move } from '../types';
import { getLatestMovesAPI, getMovesByGameIdAPI } from '../services/moveService';

const GameSearch: React.FC = () => {
  const { state, dispatch } = useContext<GameContextProps>(GameContext);
  const [searchedGame, setSearchedGame] = useState<Game | null>(state.searchedGame);
  const [searchList, setSearchList] = useState<string[]>([]);
  let latestMoves: Move[] = [];

  useEffect(() => {
    const fetchGameMoves = async () => {
      if(!searchedGame) {
        latestMoves = await getLatestMovesAPI();
        dispatch({ type: 'SET_DISPLAYED_MOVES', payload: latestMoves });
      } else {
        const gameMoves: Move[] = await getMovesByGameIdAPI(searchedGame.id);
        dispatch({ type: 'SET_DISPLAYED_MOVES', payload: gameMoves });
      }
    };
    fetchGameMoves();
}, [searchedGame]);

  const handleSearch = (value: string | null) => {
    if (!value) {
      dispatch({ type: 'SET_SEARCHED_GAME', payload: null });
      setSearchedGame(null);
      return;
    }
    const foundGame: Game | null = state.games.find((game: Game) => game.name === value) || null;
    if(foundGame) {
      dispatch({ type: 'SET_SEARCHED_GAME', payload: state.games.find((game: Game) => game.name === value) || null });
      setSearchedGame(foundGame);
    }
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
