import axios from 'axios';
import { Game } from '../types';

const baseUrl = 'http://localhost:5001/api/games';

const getAll = async (): Promise<Game[]> => {
  const response = await axios.get<Game[]>(baseUrl);
  return response.data;
};

const getOne = async (id: number) => {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
};
  
const create = async (newGame: Game) => {
    const response = await axios.post(baseUrl, newGame);
    return response.data;
};

const update = async (id: number, updatedGame: Game) => {
    const response = await axios.put(`${baseUrl}/${id}`, updatedGame);
    return response.data;
};

const remove = async (id: number) => {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
};
  
  export default { getAll, getOne, create, update, remove };
