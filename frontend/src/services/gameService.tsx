import axios from 'axios';
import { Game } from '../types';

const baseUrl = 'http://localhost:5001/api/games';

const getAll = async (): Promise<Game[]> => {
  const response = await axios.get<Game[]>(baseUrl);
  return response.data;
};

export default { getAll };
