import axios from 'axios';
import { MenuItem } from '../types/menuItem';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const createMenuItem = async (data: Omit<MenuItem, '_id'>) => {
  const res = await axios.post(`${API_URL}/menu-item`, data);
  return res.data;
};

export const getMenuItemsByMenu = async (menuId: string) => {
  const res = await axios.get(`${API_URL}/menu-item/menu/${menuId}`);
  return res.data;
};

export const updateMenuItem = async (id: string, data: Partial<MenuItem>) => {
  const res = await axios.put(`${API_URL}/menu-item/${id}`, data);
  return res.data;
};

export const deleteMenuItem = async (id: string) => {
  const res = await axios.delete(`${API_URL}/menu-item/${id}`);
  return res.data;
};
