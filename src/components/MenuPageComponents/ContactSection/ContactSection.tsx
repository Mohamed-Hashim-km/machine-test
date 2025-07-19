import React from "react";
import { Fb, Instagram, Location, Mail, Phone, Twitter, Yt } from "../../../../public/icons/icons";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section className="bg-black text-white py-10 text-sm">
      <div className="max-w-7xl  mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
       
        <div className="border lg:hidden cursor-text relative border-[#C5A059] px-6 py-2 rounded-3xl flex flex-col items-center justify-center">
          <div className="absolute -top-8">
            <Image src="/svgs/deepnet.svg" alt="Logo" width={70} height={70} />
          </div>
          <div className="text-2xl mt-10  text-[35px]">
            <span className="text-[#C5A059] ">DEEP</span> <span>NET</span> <span className="text-gray-400">SOFT</span>
          </div>
          <div className="flex gap-4 text-sm mt-4">
            <Fb />
            <Twitter />
            <Yt />
            <Instagram />
          </div>
        </div>
        <div className="border min-h-[16vh] lg:h-auto cursor-text flex flex-col justify-center items-center border-[#C5A059] px-6 py-2 rounded-3xl">
          <h3 className="text-[#C5A059] text-base font-semibold mb-4">CONNECT WITH US</h3>
          <p className="flex font-[400] text-sm items-center justify-center md:justify-start gap-3 mb-2">
            <Phone /> +91 1231231231
          </p>
          <p className="flex font-[400] text-sm items-center justify-center md:justify-start gap-3">
            <Mail /> info@deepnetsoft.com
          </p>
        </div>

        <div className="border hidden cursor-text relative border-[#C5A059] px-6 py-2 rounded-3xl lg:flex flex-col items-center justify-center">
          <div className="absolute -top-8">
            <Image src="/svgs/deepnet.svg" alt="Logo" width={70} height={70} />
          </div>
          <div className="text-2xl mt-10  text-[35px]">
            <span className="text-[#C5A059] ">DEEP</span> <span>NET</span> <span className="text-gray-400">SOFT</span>
          </div>
          <div className="flex gap-4 text-sm mt-4">
            <Fb />
            <Twitter />
            <Yt />
            <Instagram />
          </div>
        </div>

        <div className="border min-h-[16vh] lg:h-auto cursor-text border-[#C5A059] px-6 py-2 rounded-3xl">
          <div className="flex flex-col h-full items-center justify-center">
            <h3 className="text-[#C5A059] text-base font-semibold mb-4">FIND US</h3>
            <p className="flex items-start justify-center md:justify-start gap-10">
                <div>
              <Location />
              </div>
               <div>
              <p>First floor, Geo Infopark,
              <br />
              Infopark EXPY, Kakkanad
              </p>
              </div>
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
