import Image from 'next/image'
import React from 'react'

const MenuSection = () => {
  return (
     <section
      className="bg-cover bg-center text-white py-12 px-6 md:px-24 relative"
      style={{
        backgroundImage: "url('/images/MenuPageImages/menuCard.png')", // 🔁 Your background image path
      }}
    >
    
      <div className="absolute top-4 left-4 w-20 h-20">
        <Image src="/images/skewer.png" alt="Skewer" fill className="object-contain" />
      </div>

     
      <div className="absolute top-4 right-4 w-24 h-24">
        <Image src="/images/board.png" alt="Board" fill className="object-contain" />
      </div>

     
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10 text-red-500">
          APPETIZERS
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-sm md:text-base">
          {/* Left Side Items */}
          <ul className="space-y-4">
            <li className="flex justify-between">
              <span>FRIED RED SNAPPER BITES</span><span>$18</span>
            </li>
            <li className="text-gray-300 text-sm">
              Deep fried red snapper, served with a house made Cajun remoulade.
            </li>
            <li className="flex justify-between">
              <span>FIRE CRACKER SALMON</span><span>$16</span>
            </li>
            <li className="text-gray-300 text-sm">
              Battered Cajun salmon bites + topped with bang bang sauce, red peppers and green chilies.
            </li>
            <li className="flex justify-between">
              <span>OXTAIL PIZZA</span><span>$24</span>
            </li>
            <li className="text-gray-300 text-sm">
              Smoked oxtail with a sweet chili base, served over mozzarella and provolone mix, topped with peppers and onions.
            </li>
            <li className="flex justify-between">
              <span>WHOLE WINGS</span><span>$12</span>
            </li>
            <li className="text-gray-300 text-sm">
              3 buttermilk battered fried wings seasoned to perfection. Sauce available.
            </li>
            <li className="flex justify-between">
              <span>CRISPY BRUSSEL SPROUTS</span><span>$8</span>
            </li>
          </ul>

          {/* Right Side Items */}
          <ul className="space-y-4">
            <li className="flex justify-between">
              <span>CORN RIBS</span><span>$12</span>
            </li>
            <li className="text-gray-300 text-sm">
              Grilled corn ribs tossed in a house made sweet chili sauce, lime and topped with cotija cheese.
            </li>
            <li className="flex justify-between">
              <span>LAMB CHOPS</span><span>$26</span>
            </li>
            <li className="text-gray-300 text-sm">
              Garlic and rosemary marinated lamb chops topped with our signature ground mustard sauce.
            </li>
            <li className="flex justify-between">
              <span>FRIED CAULIFLOWER</span><span>$10</span>
            </li>
            <li className="text-gray-300 text-sm">
              Buttermilk battered fried cauliflower; seasoned and tossed in your favorite sauce.
            </li>
            <li className="flex justify-between">
              <span>CRAB CAKE</span><span>$24</span>
            </li>
            <li className="text-gray-300 text-sm">
              Jumbo lump crab cake with peppers, onions, celery and house blend seasoning. Served with a Cajun remoulade sauce.
            </li>
          </ul>
        </div>

        {/* Salads Section */}
        <div className="mt-14 border-t border-gray-700 pt-8 relative">
          {/* Salad image */}
          <div className="absolute right-4 top-0 w-24 h-24">
            <Image src="/images/salad.png" alt="Salad" fill className="object-contain" />
          </div>

          <h2 className="text-center text-3xl font-bold text-red-500 mb-6">
            SALADS
          </h2>
          <p className="text-center text-sm text-gray-300 mb-4">
            Option to add protein
          </p>

          <div className="flex justify-center gap-10 text-lg font-semibold">
            <span>HOUSE SALAD................$6</span>
            <span>CAESAR SALAD................$8</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MenuSection
