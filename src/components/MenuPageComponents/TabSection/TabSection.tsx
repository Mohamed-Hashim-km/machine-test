import React from "react";
import { Menu } from "@/types/menu";

interface Props {
  menus: Menu[];
  onMenuClick: (menu: Menu) => void;
  selectedMenuId?: string;
}

const TabSection: React.FC<Props> = ({ menus, onMenuClick, selectedMenuId }) => {
  return (
    <div
      className="w-full py-6 flex justify-center bg-center bg-cover"
      style={{
        backgroundImage: "url('/Images/MenuPageImages/tabBg.png')",
      }}
    >
      <div className="flex space-x-4">
        {menus.map((menu) => {
          if (menu.name.toLowerCase().includes("salads")) return null; 
          return (
            <button
              key={menu._id}
              onClick={() => onMenuClick(menu)}
              className={`px-6 py-2 border border-[#C5A059] text-[12px] lg:text-base text-white font-bold ${
                menu._id === selectedMenuId ? "bg-[#C5A059]" : "bg-black"
              }`}
            >
              {menu.name.toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TabSection;
