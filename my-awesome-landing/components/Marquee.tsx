"use client";
import { motion } from "framer-motion";

const marqueeVariants = {
  animate: {
    x: [0, -1000], // Sesuaikan dengan panjang teks
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

export default function Marquee() {
  return (
    <div className="relative w-full py-10 overflow-hidden bg-white/5 border-y border-white/5 backdrop-blur-sm">
      <motion.div
        className="flex whitespace-nowrap text-[8vw] font-black uppercase tracking-tighter text-white/10"
        variants={marqueeVariants}
        animate="animate"
      >
        {/* Kita ulangi teksnya supaya nggak putus pas loop */}
        <span className="mr-20">Creative Design • Future Tech • Digital Experience • Innovation •</span>
        <span className="mr-20">Creative Design • Future Tech • Digital Experience • Innovation •</span>
      </motion.div>
    </div>
  );
}