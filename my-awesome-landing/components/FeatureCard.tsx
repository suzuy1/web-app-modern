"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";

interface Props {
  title: string;
  desc: string;
  icon: ReactNode;
}

export default function FeatureCard({ title, desc, icon }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Membuat efek spring agar gerakan miringnya halus (smooth)
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  // Transformasi posisi mouse ke derajat kemiringan (max 15 derajat)
  // Disable on mobile by returning "0deg"
  const rotateX = useTransform(mouseY, [-0.5, 0.5], 
    isMobile ? ["0deg", "0deg"] : ["15deg", "-15deg"]
  );
  const rotateY = useTransform(mouseX, [-0.5, 0.5], 
    isMobile ? ["0deg", "0deg"] : ["-15deg", "15deg"]
  );

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    // Skip mouse tracking on mobile
    if (isMobile) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    // Normalisasi nilai ke range -0.5 sampai 0.5
    x.set(mouseXPos / width - 0.5);
    y.set(mouseYPos / height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX, 
        rotateY, 
        transformStyle: isMobile ? "flat" : "preserve-3d" 
      }}
      className="relative h-64 w-full rounded-2xl border border-white/10 bg-[#0a0a0a] p-8 transition-colors hover:bg-[#111111]"
    >
      <div 
        style={{ transform: isMobile ? "none" : "translateZ(50px)" }} 
        className="flex flex-col h-full"
      >
        <div className="mb-4 text-cyan-400">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        
        {/* Spotlight Effect */}
        <div className="absolute inset-0 z-[-1] opacity-0 transition-opacity group-hover:opacity-100 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.06),transparent_80%)]" />
      </div>
    </motion.div>
  );
}