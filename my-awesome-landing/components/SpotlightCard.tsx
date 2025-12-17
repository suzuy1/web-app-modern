"use client";
import React, { useRef, useState } from "react";

export default function SpotlightCard() {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    // Kalkulasi posisi kursor relatif terhadap kartu
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
    setIsFocused(true);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setIsFocused(false);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative max-w-md w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-neutral-900 to-black p-8 shadow-2xl"
    >
      {/* Background Spotlight Layer */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(34, 211, 238, 0.15), transparent 80%)`,
        }}
      />

      <div className="relative z-10">
        <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium mb-4">
          Contact Us
        </span>
        <h3 className="text-2xl font-bold text-white mb-2">Let's build something epic.</h3>
        <p className="text-gray-400 mb-6">
          Punya project seru atau sekadar mau ngobrol soal tech? Drop pesan kamu di sini.
        </p>
        
        <form className="space-y-4">
          <input 
            type="email" 
            placeholder="your@email.com" 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500/50 transition-colors"
          />
          <button className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-cyan-400 transition-colors duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}