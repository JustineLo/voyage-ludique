import axios from 'axios';
import { Game } from '../types';

const baseUrl = `${import.meta.env.VITE_API_BASE_URL}/games`;

export const getAllGamesAPI = async (): Promise<Game[]> => {
  const response = await axios.get<Game[]>(baseUrl);
  return response.data;
};

export const getOneGameAPI = async (id: number) => {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
};
  
export const createGameAPI = async (newGame: Game) => {
    const response = await axios.post(baseUrl, newGame);
    return response.data;
};

export const updateGameAPI = async (id: number, updatedGame: Game) => {
    const response = await axios.put(`${baseUrl}/${id}`, updatedGame);
    return response.data;
};

export const removeGameAPI = async (id: number) => {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
};
  
