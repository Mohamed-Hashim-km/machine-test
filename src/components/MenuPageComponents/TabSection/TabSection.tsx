import React from 'react'

const TabSection = () => {
  return (
    
    <div
      className="w-full py-4 flex justify-center bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/MenuPageImages/tabBg.png')",
      }}
    >
      <div className="flex space-x-4">
        <button className="px-6 py-2 border border-[#C5A059] text-white font-bold bg-black ">
          FOOD
        </button>

        <button className="px-6 py-2 border border-[#C5A059] text-white font-bold bg-[#C5A059]">
          DRINKS
        </button>

        <button className="px-6 py-2 border border-[#C5A059] text-white font-bold bg-black ">
          BRUNCH
        </button>
      </div>
    </div>
  );
}

 

export default TabSection
