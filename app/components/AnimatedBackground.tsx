"use client";
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#020617] overflow-hidden">
      {/* Moving Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/20 blur-[100px] rounded-full animate-float-slow" />
      <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-cyan-500/10 blur-[80px] rounded-full animate-fly-vertical" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617]" />
    </div>
  );
};
export default AnimatedBackground;