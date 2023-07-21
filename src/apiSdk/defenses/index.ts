import axios from 'axios';
import queryString from 'query-string';
import { DefenseInterface, DefenseGetQueryInterface } from 'interfaces/defense';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDefenses = async (query?: DefenseGetQueryInterface): Promise<PaginatedInterface<DefenseInterface>> => {
  const response = await axios.get('/api/defenses', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createDefense = async (defense: DefenseInterface) => {
  const response = await axios.post('/api/defenses', defense);
  return response.data;
};

export const updateDefenseById = async (id: string, defense: DefenseInterface) => {
  const response = await axios.put(`/api/defenses/${id}`, defense);
  return response.data;
};

export const getDefenseById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/defenses/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDefenseById = async (id: string) => {
  const response = await axios.delete(`/api/defenses/${id}`);
  return response.data;
};
