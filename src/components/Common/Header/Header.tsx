"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Make a Reservation", href: "/reservation" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#121618] h-20 relative md:h-24">
      <div className="container lg:hidden lg:w-[80%] mx-auto h-full flex justify-end items-center space-x-8 text-sm uppercase tracking-widest font-light text-white relative">
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-8 fixed top-0 left-0 w-full h-screen bg-[#121618] md:static md:w-auto md:bg-transparent z-50`}
        >
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-4 right-4 text-white text-2xl focus:outline-none">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.5 3.5L21.5 21.5M21.5 3.5L3.5 21.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="flex flex-col z-50 items-center justify-center h-full space-y-4">
            {navItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`
                  block py-2 px-4 transition-colors duration-200 text-base
                  ${pathname === href ? "text-[#C5A059]" : "hover:text-[#C5A059] text-white"}
                `}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="absolute z-40 lg:z-50 top-[48px] lg:top-[41px] left-[160px] lg:left-32 md:top-1/2 md:transform md:-translate-y-1/2">
          <Image src="/svgs/deepnet.svg" alt="" width={70} height={70} className=" lg:hidden" />
        </div>
      </div>
      <div className="container hidden w-[80%]  mx-auto h-[90%]  lg:flex justify-end items-end space-x-8 text-sm uppercase tracking-widest font-light text-white">
        {navItems.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className={`
              transition-colors duration-200 text-base
              ${pathname === href ? "text-[#C5A059]" : "hover:text-[#C5A059] text-white"}
           `}
          >
            {label}
          </Link>
        ))}
        <div className="absolute z-50 top-[52px] left-32">
          <Image src="/svgs/navicon.svg" alt="" width={270} height={270} />
        </div>
      </div>
    </nav>
  );
}
