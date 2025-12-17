"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Magnetic from "./Magnetic";

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);

  return (
    <section ref={containerRef} className="py-32 md:py-48 px-4 overflow-hidden bg-white dark:bg-[#030303]">
      <motion.div 
        style={{ scale, rotate }}
        className="max-w-6xl mx-auto bg-gradient-to-br from-cyan-500 to-purple-600 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden"
      >
        {/* Background Patterns */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/10 backdrop-blur-[2px]"></div>

        <div className="relative z-10 text-white">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
            Ready to Ignite <br />
            Your <span className="text-black/20 dark:text-white/20">Digital Presence?</span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto font-medium">
            Don&apos;t let your brand fade into the background. Let&apos;s build something loud, proud, and impossible to ignore.
          </p>

          <Magnetic>
            <button className="px-12 py-6 bg-white text-black text-xl font-bold rounded-full hover:scale-105 transition-transform shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
              Let&apos;s Talk Business 🚀
            </button>
          </Magnetic>

          <div className="mt-12 flex items-center justify-center gap-4 opacity-60 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Available for new projects
            </span>
            <span>•</span>
            <span>Est. Reply Time: &lt; 2 Hours</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
