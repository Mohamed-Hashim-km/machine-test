"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getMenusWithItems, updateMenu, deleteMenu, getMenus } from "@/services/menu";
import { Menu } from "@/types/menu";

import { getMenuItemsByMenu } from "@/services/menuItem";
import { toast } from "react-toastify";

export default function MenusPage() {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [search, setSearch] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editMenu, setEditMenu] = useState<Menu | null>(null);
  const [menuItemCounts, setMenuItemCounts] = useState<{ [key: string]: number }>({});

  const [editForm, setEditForm] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    const fetchMenus = async () => {
      const data = await getMenusWithItems(); // Use getMenusWithItems instead of getMenus
      setMenus(data);
    };
    fetchMenus();
  }, []);

  const filteredMenus = menus.filter((menu) => menu.name.toLowerCase().includes(search.toLowerCase()));

  const handleEditClick = (menu: Menu) => {
    setEditMenu(menu);
    setEditForm({
      name: menu.name,
      description: menu.description ?? "",
    });
    setIsEditing(true);
  };

  const handleEditSubmit = async () => {
    if (!editMenu) return;
    try {
      if (!editMenu?._id) return;

      const updated = await updateMenu(editMenu._id, editForm);

      setMenus((prev) => prev.map((m) => (m._id === updated._id ? updated : m)));
      toast.success("Menu updated successfully!");
      setIsEditing(false);
      setEditMenu(null);
    } catch (error) {
      toast.error("Failed to update menu.");
    }
  };

  const handleDelete = async (menuId: string) => {
    try {
      await deleteMenu(menuId);
      setMenus((prev) => prev.filter((m) => m._id !== menuId));
      toast.success("Menu deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete menu.");
    }
  };

  useEffect(() => {
    const fetchMenus = async () => {
      const data = await getMenus();
      setMenus(data);

      // Fetch item counts per menu
      const counts: { [key: string]: number } = {};
      for (const menu of data) {
        if (!menu._id) return;

        const items = await getMenuItemsByMenu(menu._id);
        counts[menu._id] = items.length;
      }
      setMenuItemCounts(counts);
    };
    fetchMenus();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Menus</h1>
      <input
        type="text"
        placeholder="Search menu..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full rounded"
      />
      <div className="grid md:grid-cols-3 gap-4">
        {filteredMenus.map((menu) => (
          <div key={menu._id} className="border rounded p-4 shadow bg-white flex flex-col justify-between">
            <div>
              <Link href={`/dashboard/menus/${menu._id}`}>
                <h2 className="font-semibold text-lg hover:underline">{menu.name}</h2>
              </Link>
              <p className="text-gray-600">{menu.description}</p>
              <p className="text-sm text-blue-600 mt-2">{menuItemCounts[menu._id] ?? 0} items</p>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-3 py-1 bg-yellow-500 text-white rounded" onClick={() => handleEditClick(menu)}>
                Edit
              </button>
              {menu._id &&<button className="px-3 py-1 bg-red-500 text-white rounded" onClick={() => handleDelete(menu._id)}>
                Delete
              </button>}
              <Link href={`/dashboard/menus/${menu._id}`}>
                <button className="px-3 py-1 bg-blue-500 text-white rounded">Show All Menu Items</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-blur flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded w-full max-w-md shadow">
            <h2 className="text-lg font-bold mb-4">Edit Menu</h2>
            <input
              type="text"
              placeholder="Menu Name"
              value={editForm.name}
              onChange={(e) => setEditForm((prev) => ({ ...prev, name: e.target.value }))}
              className="border p-2 w-full mb-3 rounded"
            />
            <textarea
              placeholder="Menu Description"
              value={editForm.description}
              onChange={(e) =>
                setEditForm((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              className="border p-2 w-full mb-3 rounded"
            />
            <div className="flex justify-end gap-2">
              <button className="bg-gray-400 text-white px-4 py-2 rounded" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleEditSubmit}>
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
