import axios from 'axios';
import queryString from 'query-string';
import { AttackInterface, AttackGetQueryInterface } from 'interfaces/attack';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAttacks = async (query?: AttackGetQueryInterface): Promise<PaginatedInterface<AttackInterface>> => {
  const response = await axios.get('/api/attacks', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAttack = async (attack: AttackInterface) => {
  const response = await axios.post('/api/attacks', attack);
  return response.data;
};

export const updateAttackById = async (id: string, attack: AttackInterface) => {
  const response = await axios.put(`/api/attacks/${id}`, attack);
  return response.data;
};

export const getAttackById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/attacks/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAttackById = async (id: string) => {
  const response = await axios.delete(`/api/attacks/${id}`);
  return response.data;
};
