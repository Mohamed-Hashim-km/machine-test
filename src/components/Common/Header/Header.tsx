// components/Navbar.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Make a Reservation', href: '/reservation' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <nav className="bg-[#121618] h-20 relative">
      <div className="container w-[80%]  mx-auto h-[90%]  flex justify-end items-end space-x-8 text-sm uppercase tracking-widest font-light text-white">
        {navItems.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className={`
              transition-colors duration-200 text-base
              ${pathname === href ? 'text-[#C5A059]' : 'hover:text-[#C5A059] text-white'}
           ` }
          >
            {label}
          </Link>
        ))}
        <div className='absolute z-50 top-[41px] left-32'>
        <Image src="/svgs/navicon.svg" alt='' width={270} height={270}/>
        </div>
      </div>
    </nav>
  )
}
