// src/components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#161616] text-[#857878] text-sm py-4 px-6 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row text-sm justify-between items-center gap-2">
        <p>© 2025 Deepnetsoft Solutions. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="/terms" className="hover:text-white text-sm transition">
            Terms & Conditions
          </a>
          <a href="/privacy" className="hover:text-white text-sm transition">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
