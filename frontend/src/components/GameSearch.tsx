import React, { useContext, useEffect, useState } from "react";
import { TextField, Autocomplete } from "@mui/material";
import { GameContext, GameContextProps } from "../contexts/GameContext";
import { Game, Move } from "../types";
import { getLatestMovesAPI } from "../services/moveService";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border: 1px solid #98e9cd;
  border-radius: 20px;
  padding: 1.5rem;
  align-items: center;

  h3 {
    margin: 0;
  }
`;

const Buttons = styled.div`
  button {
    background-color: transparent;
    color: var(--primary);
    outline: none;
    border: 1px solid var(--primary);
    padding: 0.5rem 1rem;
  }

  button:nth-child(1) {
    border-radius: 5px 0 0 5px;
  }

  button:nth-child(4) {
    border-radius: 0 5px 5px 0;
  }

  .active {
    background-color: var(--primary);
    color: white;
  }
`;

const GameSearch: React.FC = () => {
  const { state, dispatch } = useContext<GameContextProps>(GameContext);
  const [searchList, setSearchList] = useState<string[]>(
    state.games.map((game: Game) => game.name)
  );
  const [selectedFilter, setSelectedFilter] = useState<string>("name");
  const [latestMoves, setLatestMoves] = useState<Move[]>([]);

  useEffect(() => {
    async function fetchLatestMoves() {
      const fetchedMoves: Move[] = await getLatestMovesAPI();
      setLatestMoves(fetchedMoves);
      dispatch({ type: "SET_DISPLAYED_MOVES", payload: fetchedMoves });
    }
    fetchLatestMoves();
  }, []);

  const handleSearch = (value: string | null) => {
    if (!value) {
      dispatch({ type: "SET_DISPLAYED_MOVES", payload: latestMoves });
      return;
    }

    switch (selectedFilter) {
      case "name":
        const searchedGame: Game | null =
          state.games.find((game: Game) => game.name === value) || null;
        if (searchedGame) {
          const displayedMoves: Move[] = state.allmoves.filter(
            (move: Move) => move.gameId === searchedGame.id
          );
          dispatch({ type: "SET_DISPLAYED_MOVES", payload: displayedMoves });
        } else {
          dispatch({ type: "SET_DISPLAYED_MOVES", payload: latestMoves });
        }
        break;
      case "id":
        const idList = state.games.map((game: Game) => game.id.toString());
        setSearchList(idList);
        break;
      case "person":
        const giverList = state.allmoves.map((move: Move) => move.giver);
        const receiverList = state.allmoves.map((move: Move) => move.receiver);
        setSearchList([...new Set([...giverList, ...receiverList])]);
        break;
      case "city":
        const originCityList = state.allmoves.map(
          (move: Move) => move.originCity
        );
        const currentCityList = state.allmoves.map(
          (move: Move) => move.currentCity
        );
        setSearchList([...new Set([...originCityList, ...currentCityList])]);
        break;
    }
  };

  function handleClickFilter(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    const filter = e.currentTarget.id;
    setSelectedFilter(filter);
    switch (filter) {
      case "name":
        const nameList = state.games.map((game: Game) => game.name);
        setSearchList(nameList);
        break;
      case "id":
        const idList = state.games.map((game: Game) => game.id.toString());
        console.log(idList);
        setSearchList(idList);
        break;
      case "person":
        const giverList = state.allmoves.map((move: Move) => move.giver);
        const receiverList = state.allmoves.map((move: Move) => move.receiver);
        setSearchList([...new Set([...giverList, ...receiverList])]);
        break;
      case "city":
        const originCityList = state.allmoves.map(
          (move: Move) => move.originCity
        );
        const currentCityList = state.allmoves.map(
          (move: Move) => move.currentCity
        );
        setSearchList([...new Set([...originCityList, ...currentCityList])]);
        break;
    }
  }

  return (
    <Container>
      <h3>Rechercher</h3>
      <Buttons>
        <button
          className={selectedFilter === "name" ? "active" : ""}
          id="name"
          onClick={(e) => handleClickFilter(e)}
        >
          Nom du jeu
        </button>
        <button
          className={selectedFilter === "id" ? "active" : ""}
          id="id"
          onClick={(e) => handleClickFilter(e)}
        >
          ID
        </button>
        <button
          className={selectedFilter === "person" ? "active" : ""}
          id="person"
          onClick={(e) => handleClickFilter(e)}
        >
          Personne
        </button>
        <button
          className={selectedFilter === "city" ? "active" : ""}
          id="city"
          onClick={(e) => handleClickFilter(e)}
        >
          Ville
        </button>
      </Buttons>
      <Autocomplete
        options={searchList}
        color="primary"
        sx={{ width: 300 }}
        onChange={(e, value) => handleSearch(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            color="primary"
            sx={{ borderRadius: 40 }}
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Container>
  );
};

export default GameSearch;
