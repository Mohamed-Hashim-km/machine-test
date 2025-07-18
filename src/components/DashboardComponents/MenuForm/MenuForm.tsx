'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  createMenu,
  getMenus,
} from '@/services/menu';
import {
  createMenuItem,
} from '@/services/menuItem';
import { Menu } from '@/types/menu';

export default function DashboardPage() {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [menuForm, setMenuForm] = useState({ name: '', description: '' });
  const [itemForm, setItemForm] = useState({
    name: '',
    description: '',
    price: '',
    menu: '',
  });

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    try {
      const data = await getMenus();
      setMenus(data);
    } catch (err) {
      toast.error('Failed to fetch menus');
    }
  };

  const handleMenuSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!menuForm.name) return toast.warn('Menu name is required');

    try {
      await createMenu(menuForm);
      setMenuForm({ name: '', description: '' });
      fetchMenus();
      toast.success('Menu created successfully!');
    } catch (err) {
      toast.error('Failed to create menu');
    }
  };

  const handleItemSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!itemForm.name || !itemForm.menu || !itemForm.price) {
      return toast.warn('All fields are required');
    }

    try {
      await createMenuItem({
        name: itemForm.name,
        description: itemForm.description,
        price: parseFloat(itemForm.price),
        menu: itemForm.menu,
      });

      setItemForm({ name: '', description: '', price: '', menu: '' });
      fetchMenus();
      toast.success('Menu item added!');
    } catch (err) {
      toast.error('Failed to add item');
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Menu Management</h1>

      {/* === Menu Creation Form === */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Add New Menu</h2>
        <form onSubmit={handleMenuSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Menu Name"
            value={menuForm.name}
            onChange={(e) => setMenuForm({ ...menuForm, name: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Description"
            value={menuForm.description}
            onChange={(e) => setMenuForm({ ...menuForm, description: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add Menu
          </button>
        </form>
      </div>

      {/* === Menu Item Form === */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Add Menu Item</h2>
        <form onSubmit={handleItemSubmit} className="space-y-4">
          <select
            value={itemForm.menu}
            onChange={(e) => setItemForm({ ...itemForm, menu: e.target.value })}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Menu</option>
            {menus.map((menu) => (
              <option key={menu._id} value={menu._id}>
                {menu.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Item Name"
            value={itemForm.name}
            onChange={(e) => setItemForm({ ...itemForm, name: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Item Description"
            value={itemForm.description}
            onChange={(e) => setItemForm({ ...itemForm, description: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Price"
            value={itemForm.price}
            onChange={(e) => setItemForm({ ...itemForm, price: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}
