import axios from 'axios';
import { Game } from '../types';

const baseUrl = 'http://localhost:5001/api/games';

export const getAllAPI = async (): Promise<Game[]> => {
  const response = await axios.get<Game[]>(baseUrl);
  return response.data;
};

export const getOneAPI = async (id: number) => {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
};
  
export const createAPI = async (newGame: Game) => {
    const response = await axios.post(baseUrl, newGame);
    return response.data;
};

export const updateAPI = async (id: number, updatedGame: Game) => {
    const response = await axios.put(`${baseUrl}/${id}`, updatedGame);
    return response.data;
};

export const removeAPI = async (id: number) => {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
};
  
