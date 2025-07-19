import Image from 'next/image'
import React from 'react'
import heroBg from "../../../../public/Images/MenuPageImages/heroBg.jpg"
import { Menu } from "@/types/menu";
const HeroSection = ({menu}:{menu:M}) => {
  console.log(menu)
  return (
     <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-white">
      {/* Background Image */}
      <Image
        src={heroBg}
        alt="Menu background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0 h-full"
      />

      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 text-center px-4">
        <h1 className="text-5xl font-semibold text-white drop-shadow-lg">
          <span className="text-white text-[75px]">MENU</span>
        </h1>
        {<p className="mt-4 text-lg md:text-base text-textGray max-w-xl mx-auto">
        {menu?.description||"Please take a look at our menu featuring food, drinks, and brunch. If you had like to place an order, use the Order Online button located below the menu."}
        </p>}
      </div>
    </section>
  )
}

export default HeroSection
