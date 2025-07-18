'use client';

import React, { useEffect, useState } from 'react';
import { MdList, MdRestaurantMenu } from 'react-icons/md';
import { getMenus } from '@/services/menu';
import { getMenuItemsByMenu } from '@/services/menuItem';

export default function Dashboard() {
  const [menuCount, setMenuCount] = useState<number>(0);
  const [itemCount, setItemCount] = useState<number>(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const menus = await getMenus();
        setMenuCount(menus.length);

        let totalItems = 0;
        for (const menu of menus) {
          const items = await getMenuItemsByMenu(menu._id);
          totalItems += items.length;
        }
        setItemCount(totalItems);
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };

    fetchCounts();
  }, []);

  const stats = [
   
    {
      title: 'Total Menus',
      count: menuCount,
      icon: <MdRestaurantMenu className="text-4xl text-green-600" />,
      bg: 'bg-green-100',
    },
     {
      title: 'Total Dishes',
      count: itemCount,
      icon: <MdList className="text-4xl text-blue-600" />,
      bg: 'bg-blue-100',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`rounded-2xl p-6 shadow-md flex items-center gap-4 ${stat.bg}`}
        >
          {stat.icon}
          <div>
            <h4 className="text-lg font-semibold text-gray-600">{stat.title}</h4>
            <p className="text-2xl font-bold text-gray-900">{stat.count}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
