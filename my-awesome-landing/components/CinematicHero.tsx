"use client";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";
import RevealText from "./RevealText";

export default function CinematicHero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Big Background Text (Aura) */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
        <h1 className="text-[25vw] font-black text-white/[0.02] dark:text-white/[0.02] leading-none">
          LUMINA
        </h1>
      </div>

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px]" 
        />
      </div>

      <div className="relative z-10 text-center container px-4 md:px-6">
        <motion.span 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="text-cyan-500 font-mono tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-4 block"
        >
          Innovation • Excellence • Design
        </motion.span>
        
        <RevealText 
          text="Crafting Digital Future" 
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 md:mb-8 px-4" 
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg md:text-xl mb-8 md:mb-10 leading-relaxed px-4"
        >
          Membangun pengalaman digital yang tidak hanya indah, tetapi juga bermakna dan berdampak.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 md:mt-12 px-4">
          <Magnetic>
            <button className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-black dark:bg-white dark:text-black rounded-full font-bold text-base sm:text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(6,182,212,0.3)] w-full sm:w-auto">
              Start Project
            </button>
          </Magnetic>
          
          <Magnetic>
            <button className="px-8 sm:px-10 py-3 sm:py-4 bg-transparent border-2 border-white/20 text-white rounded-full font-bold text-base sm:text-lg hover:bg-white/10 transition-all backdrop-blur-sm w-full sm:w-auto">
              View Works
            </button>
          </Magnetic>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030303] to-transparent" />
    </section>
  );
}
