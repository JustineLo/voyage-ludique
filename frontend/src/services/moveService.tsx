import axios from 'axios';
import { Move } from '../types';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const getMovesByGameIdAPI = async (gameId: number) => {
  const response = await axios.get(`${baseUrl}/games/${gameId}/moves`);
  return response.data;
};

export const getMoveAPI = async (moveId: number) => {
  const response = await axios.get(`${baseUrl}/moves/${moveId}`);
  return response.data;
};

export const getLatestMovesAPI = async () => {
  const response = await axios.get(`${baseUrl}/latest`);
  return response.data;
};

export const createMoveAPI = async (move: Move) => {
  const response = await axios.post(`${baseUrl}/moves`, move);
  return response.data;
};

export const updateMoveAPI = async (moveId: number, move: Partial<Move>) => {
  const response = await axios.put(`${baseUrl}/moves/${moveId}`, move);
  return response.data;
};

export const deleteMoveAPI = async (moveId: number) => {
  const response = await axios.delete(`${baseUrl}/moves/${moveId}`);
  return response.data;
};
