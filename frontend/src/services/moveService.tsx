import axios from 'axios';
import { Move } from '../types';

const baseUrl = 'http://localhost:5001/api/moves'; 

export const getMovesByGameIdAPI = async (gameId: number) => {
  const response = await axios.get(`${baseUrl}/games/${gameId}/moves`);
  return response.data;
};

export const getMoveAPI = async (moveId: number) => {
  const response = await axios.get(`${baseUrl}/${moveId}`);
  return response.data;
};

export const createMoveAPI = async (move: Move) => {
  const response = await axios.post(`${baseUrl}`, move);
  return response.data;
};

export const updateMoveAPI = async (moveId: number, move: Partial<Move>) => {
  const response = await axios.put(`${baseUrl}/${moveId}`, move);
  return response.data;
};

export const deleteMoveAPI = async (moveId: number) => {
  const response = await axios.delete(`${baseUrl}/${moveId}`);
  return response.data;
};
