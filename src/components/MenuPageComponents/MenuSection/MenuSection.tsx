"use client";

import React from "react";
import Image from "next/image";
import { MenuItem } from "@/types/menuItem";
import menuBackground from "../../../../public/Images/MenuPageImages/menuCard.png";
import skewerImage from "../../../../public/Images/MenuPageImages/kabab.png";
import boardImage from "../../../../public/Images/MenuPageImages/meat.png";
import saladImage from "../../../../public/Images/MenuPageImages/salad.png";
import breadBoardImage from "../../../../public/Images/MenuPageImages/sandwitch.png";

interface Props {
  items: MenuItem[];
  title?: string;
  salads: MenuItem[];
}

const MenuSection: React.FC<Props> = ({ items, title, salads }) => {

  return (
    <section className="relative min-h-[100vh] lg:min-h-[180vh] text-white py-16 px-6 md:px-16 overflow-hidden">
      {/* Background Image only on md and up */}
      <div
        className="hidden md:block absolute h-[1200px] -mx-10 inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${menuBackground.src})` }}
      ></div>

      <div className="absolute inset-0 bg-black border-2 border-[#C5A059] rounded-lg mt-10 mx-6 lg:m-26"></div>

      <div className="absolute top-18 left-5 lg:top-18 lg:left-17 w-20 h-20 lg:w-49 lg:h-49 z-10">
        <Image src={skewerImage} alt="Grilled Skewers" className="w-full h-full object-contain transform -rotate-12" />
      </div>
      <div className="absolute top-18 right-1 w-20 h-24  lg:top-15 lg:right-12 lg:w-59 lg:h-auto z-10">
        <Image src={boardImage} alt="Appetizer Board" className="w-full h-full object-contain transform rotate-12" />
      </div>
      <div className="absolute -bottom-6  w-24 h-24 left-0 lg:bottom-16 lg:left-15 lg:w-52 lg:h-auto z-10">
        <Image src={breadBoardImage} alt="Bread Board" className="w-full h-full object-contain transform rotate-6" />
      </div>

      <div className="relative z-5 lg:max-w-6xl mx-auto px-5 lg:px-15">
        <div className="text-center mt-[2rem] lg:mt-[8rem]">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-400 tracking-wider relative inline-block">
            <span
              className="before:absolute before:left-[-3rem] lg:before:left-[-6rem] before:top-1/2 before:w-10 lg:before:w-20 before:h-[2px] before:bg-gray-400 before:content-[''] 
                            after:absolute after:right-[-3rem] lg:after:right-[-6rem] after:top-1/2 after:w-10 lg:after:w-20 after:h-[2px] after:bg-gray-400 after:content-['']"
            >
              {title?.toUpperCase()}
            </span>
          </h2>
        </div>

        <div className="lg:grid md:grid-cols-2 min-h-[40vh] lg:min-h-[80vh] lg:gap-8 text-white max-w-5xl mx-auto">
          <div className="space-y-12 mt-[5rem]">
            {items
              .filter((_, index) => index % 2 === 0)
              .map((item, index) => (
                <div key={index} className="pb-2">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-grow items-center">
                      <span className="font-semibold tracking-wide whitespace-nowrap">{item.name.toUpperCase()}</span>
                      <div className="flex-grow border-b-4 border-dotted border-gray-500 mx-2 h-1"></div>
                    </div>
                    <span className="text-gray-400 font-bold">${item.price}</span>
                  </div>
                  {item.description && <p className="text-gray-300 text-sm mt-1 italic">{item.description}</p>}
                </div>
              ))}
          </div>

          <div className="space-y-12 mt-[48px] lg:mt-[5rem]">
            {items
              .filter((_, index) => index % 2 !== 0)
              .map((item, index) => (
                <div key={index} className="pb-2">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-grow items-center">
                      <span className="font-semibold tracking-wide whitespace-nowrap">{item.name.toUpperCase()}</span>
                      <div className="flex-grow border-b-4 border-dotted border-gray-500 mx-2 h-1"></div>
                    </div>
                    <span className="text-gray-400 font-bold">${item.price}</span>
                  </div>
                  {item.description && <p className="text-gray-300 text-sm mt-1 italic">{item.description}</p>}
                </div>
              ))}
          </div>
        </div>

        <div className="mt-20 relative lg:px-35">
          <div className="border-2 border-dotted rounded-lg p-8 relative bg-black/20 backdrop-blur-sm">
            <div className="absolute top-[-33] right-[-57] w-38 h-38 z-10">
              <Image src={saladImage} alt="Fresh Salad" className="w-full h-full object-contain" />
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-400 mb-4 tracking-wider">SALADS</h3>
              <p className="text-gray-300 text-sm mb-1 italic">Option to add protein</p>
              <div className="w-46 h-1 pb-2 mx-auto mb-4"></div>
              {salads ? (
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg flex-wrap">
                  {salads?.map((salad, index) => (
                    <div key={index} className="flex justify-between items-center pb-1 min-w-64">
                      <div className="flex flex-grow items-center">
                        <span className="font-semibold tracking-wide whitespace-nowrap">{salad.name.toUpperCase()}</span>
                        <div className="flex-grow border-b-4 border-dotted border-gray-500 mx-2 h-1"></div>
                      </div>
                      <span className="text-gray-400 font-bold">${salad.price}</span>
                    </div>
                  ))}
                </div>
              ) : (
                "Salads Empty"
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
