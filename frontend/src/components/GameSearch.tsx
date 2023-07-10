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
        const queriedMoves: Move[] = await getLatestMovesAPI();
        latestMoves = queriedMoves;
        dispatch({ type: 'SET_DISPLAYED_MOVES', payload: queriedMoves });
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

  function handleClickFilter(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const filter = e.currentTarget.id;

    switch(filter) {
      case 'name':
        const nameList = state.games.map((game: Game) => game.name);
        setSearchList(nameList);
        break;
      case 'id':
        const idList = state.games.map((game: Game) => game.id.toString());
        setSearchList(idList);
        break;
      case 'person':
        const giverList = state.allmoves.map((move: Move) => move.giver);
        const receiverList = state.allmoves.map((move: Move) => move.receiver);
        setSearchList([...new Set([...giverList, ...receiverList])]);
        break;
      case 'city':
        const originCityList = state.allmoves.map((move: Move) => move.originCity);
        const currentCityList = state.allmoves.map((move: Move) => move.currentCity);
        setSearchList([...new Set([...originCityList, ...currentCityList])]);
    }
  }

  return (
    <>
      <div>
        <ButtonGroup>
          <Button id="name" onClick={(e) => handleClickFilter(e)}>Nom du jeu</Button>
          <Button id="id" onClick={(e) => handleClickFilter(e)}>ID</Button>
          <Button id="person" onClick={(e) => handleClickFilter(e)}>Personne</Button>
          <Button id="city" onClick={(e) => handleClickFilter(e)}>Ville</Button>
          
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
