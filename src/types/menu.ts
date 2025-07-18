import { MenuItem } from "./menuItem";

export interface Menu {
  _id?: string;
  name: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  items?: MenuItem[];
}
