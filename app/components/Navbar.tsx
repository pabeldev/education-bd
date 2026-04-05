"use client";
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-md px-6 py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center font-poppins">
        <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent tracking-tighter">
          Education BD
        </div>
        <div className="hidden md:flex gap-8 text-xs font-bold text-slate-300 uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
          <a href="#destinations" className="hover:text-blue-400 transition-colors">Destinations</a>
        </div>
        <a href="#contact" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all text-xs shadow-lg shadow-blue-600/20">
          APPLY NOW
        </a>
      </div>
    </nav>
  );
};
export default Navbar;