"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Gunakan transform translate3d agar diproses oleh GPU (Hardware Acceleration)
      // Ini jauh lebih ringan daripada mengubah top/left atau state React
      cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
      dot.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <>
      {/* Lingkaran Luar (dengan delay transisi agar smooth) */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 border border-cyan-400/50 rounded-full pointer-events-none z-[9999] transition-transform duration-[400ms] ease-[out] hidden md:block"
      />
      {/* Titik Tengah (instan mengikuti mouse) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-cyan-400 rounded-full pointer-events-none z-[9999] hidden md:block"
      />
    </>
  );
}