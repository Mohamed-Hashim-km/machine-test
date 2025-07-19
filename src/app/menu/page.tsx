'use client';

import React, { useEffect, useState } from "react";
import Footer from "@/components/Common/Footer/Footer";
import Header from "@/components/Common/Header/Header";
import ContactSection from "@/components/MenuPageComponents/ContactSection/ContactSection";
import HeroSection from "@/components/MenuPageComponents/HeroSection/HeroSection";
import MenuSection from "@/components/MenuPageComponents/MenuSection/MenuSection";
import TabSection from "@/components/MenuPageComponents/TabSection/TabSection";

import { getMenus } from "@/services/menu";
import { Menu } from "@/types/menu";
import { MenuItem } from "@/types/menuItem";
import { getMenuItemsByMenu } from "@/services/menuItem";

const Page = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [selectedMenu, setSelectedMenu] = useState<Menu | null>(null);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [saladItems, setSaladItems] = useState<MenuItem[]>([]); 
  useEffect(() => {
    const loadMenus = async () => {
      const allMenus = await getMenus();
      setMenus(allMenus);

      const saladsMenu = allMenus.find(menu =>
        menu.name.toLowerCase().includes("salads")
      );

      if (saladsMenu && saladsMenu._id) {
        const salads = await getMenuItemsByMenu(saladsMenu._id);
        setSaladItems(salads);
      }

      if (allMenus.length > 0) {
        handleMenuClick(allMenus[0]);
      }
    };

    loadMenus();
  }, []);

  const handleMenuClick = async (menu: Menu) => {
    if (!menu._id) {
      console.error("Menu _id is undefined");
      return;
    }

    setSelectedMenu(menu);

    try {
      const items = await getMenuItemsByMenu(menu._id);
      setMenuItems(items);
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  };

  return (
    <>
      <Header />

      <section>
        <HeroSection menu={selectedMenu} />
      </section>

      <section>
        <TabSection
          menus={menus}
          onMenuClick={handleMenuClick}
          selectedMenuId={selectedMenu?._id}
        />
      </section>

      <section>
        <MenuSection
          title={selectedMenu?.name}
          items={menuItems}
          salads={saladItems.length > 0 ? saladItems : undefined} />
          
      </section>

      <section>
        <ContactSection />
      </section>

      <Footer />
    </>
  );
};

export default Page;
