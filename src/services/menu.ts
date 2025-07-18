import axios from 'axios';
import { Menu } from '../types/menu';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const createMenu = async (data: Omit<Menu, '_id'>) => {
  const res = await axios.post(`${API_URL}/menu`, data);
  return res.data;
};

export const getMenus = async () => {
  const res = await axios.get<Menu[]>(`${API_URL}/menu`);
  return res.data;
};

export const getMenusWithItems = async () => {
  const res = await axios.get(`${API_URL}/menu/with-items`);
  return res.data;
};

export const updateMenu = async (id: string, data: Partial<Menu>) => {
  const res = await axios.put(`${API_URL}/menu/${id}`, data);
  return res.data;
};

export const deleteMenu = async (id: string) => {
  const res = await axios.delete(`${API_URL}/menu/${id}`);
  return res.data;
};
