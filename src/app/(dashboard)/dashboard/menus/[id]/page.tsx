'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

import { MenuItem } from '@/types/menuItem';
import { Menu } from '@/types/menu';
import { getMenus } from '@/services/menu';
import { deleteMenuItem, getMenuItemsByMenu, updateMenuItem } from '@/services/menuItem';

export default function MenuDetailPage() {
  const router = useRouter();
  const { id } = useParams();
  const [menu, setMenu] = useState<Menu | null>(null);
  const [items, setItems] = useState<MenuItem[]>([]);
  const [search, setSearch] = useState('');

  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState<MenuItem | null>(null);
  const [editForm, setEditForm] = useState({
    name: '',
    description: '',
    price: '',
  });

  useEffect(() => {
    const fetchMenuData = async () => {
      const allMenus = await getMenus();
      const current = allMenus.find((m) => m._id === id);
      setMenu(current || null);
    };

    const fetchItems = async () => {
      const data = await getMenuItemsByMenu(id as string);
      setItems(data);
    };

    if (id) {
      fetchMenuData();
      fetchItems();
    }
  }, [id]);

  const handleDelete = async (itemId: string) => {
    await deleteMenuItem(itemId);
    setItems((prev) => prev.filter((item) => item._id !== itemId));
  };

  const handleEditClick = (item: MenuItem) => {
    setEditItem(item);
    setEditForm({
      name: item.name,
      description: item.description,
      price: String(item.price),
    });
    setIsEditing(true);
  };

  const handleEditSubmit = async () => {
    if (!editItem) return;

    const updated = {
      name: editForm.name,
      description: editForm.description,
      price: Number(editForm.price),
    };

    const updatedItem = await updateMenuItem(editItem._id, updated);
    setItems((prev) =>
      prev.map((i) => (i._id === updatedItem._id ? updatedItem : i))
    );

    setIsEditing(false);
    setEditItem(null);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!menu) return <p className="p-4">Loading menu...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{menu.name}</h1>
      <p className="mb-4 text-gray-600">{menu.description}</p>

      <input
        type="text"
        placeholder="Search menu items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full rounded"
      />

      <div className="grid md:grid-cols-2 gap-4">
        {filteredItems.map((item) => (
          <div key={item._id} className="border rounded p-4 shadow bg-white">
            <h2 className="font-semibold text-lg">{item.name}</h2>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className="text-green-600 font-bold mt-1">₹{item.price}</p>
            <div className="mt-2 flex gap-2">
              <button
                className="px-3 py-1 bg-yellow-500 text-white rounded"
                onClick={() => handleEditClick(item)}
              >
                Edit
              </button>
              <button
                className="px-3 py-1 bg-red-500 text-white rounded"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0  bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded w-full max-w-md shadow">
            <h2 className="text-lg font-bold mb-4">Edit Menu Item</h2>

            <input
              type="text"
              placeholder="Name"
              value={editForm.name}
              onChange={(e) =>
                setEditForm((prev) => ({ ...prev, name: e.target.value }))
              }
              className="border p-2 w-full mb-3 rounded"
            />
            <textarea
              placeholder="Description"
              value={editForm.description}
              onChange={(e) =>
                setEditForm((prev) => ({ ...prev, description: e.target.value }))
              }
              className="border p-2 w-full mb-3 rounded"
            />
            <input
              type="number"
              placeholder="Price"
              value={editForm.price}
              onChange={(e) =>
                setEditForm((prev) => ({ ...prev, price: e.target.value }))
              }
              className="border p-2 w-full mb-3 rounded"
            />
            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={handleEditSubmit}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
