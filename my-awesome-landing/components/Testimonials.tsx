"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

const TESTIMONIALS = [
  { 
    name: "Andi Wijaya", 
    role: "CEO TechFlow", 
    text: "Landing page ini bener-bener ngerubah cara client ngelihat brand kita. Interaksinya gokil!" 
  },
  { 
    name: "Siska Putri", 
    role: "UI Designer", 
    text: "Detail animasinya smooth banget. Belum pernah nemu landing page yang 'licin' kayak gini." 
  },
  { 
    name: "Budi Santoso", 
    role: "Marketing Manager", 
    text: "Fitur-fiturnya modern dan sangat user-friendly. Sangat direkomendasikan!" 
  },
  { 
    name: "Jessica", 
    role: "Entrepreneur", 
    text: "Prosesnya cepat dan hasilnya jauh melampaui ekspektasi saya. Keren banget!" 
  },
  { 
    name: "Rizky", 
    role: "Freelancer", 
    text: "Efek mikronya bikin betah scroll terus. User experience-nya juara." 
  },
];

export default function Testimonials() {
  const constraintsRef = useRef(null);

  return (
    <section className="py-24 bg-white dark:bg-[#030303] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 dark:text-white text-black">
          Apa Kata <span className="text-cyan-500">Mereka?</span>
        </h2>

        {/* Container untuk Drag Area */}
        <div ref={constraintsRef} className="cursor-grab active:cursor-grabbing">
          <motion.div
            drag="x"
            dragConstraints={constraintsRef} // Agar tidak lari keluar layar
            dragElastic={0.1} // Bounce effect saat mentok
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }} // Spring physics
            className="flex gap-6 w-max"
            whileTap={{ cursor: "grabbing" }}
          >
            {TESTIMONIALS.map((item, index) => (
              <motion.div
                key={index}
                className="w-[300px] md:w-[400px] p-8 rounded-3xl bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/10"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-lg italic mb-6 dark:text-gray-300 text-gray-700">
                  &ldquo;{item.text}&rdquo;
                </p>
                <div>
                  <h4 className="font-bold dark:text-white text-black">{item.name}</h4>
                  <p className="text-sm text-cyan-600 dark:text-cyan-400">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <p className="mt-8 text-sm text-gray-500 animate-pulse text-center">
          ← Geser untuk melihat lebih banyak →
        </p>
      </div>
    </section>
  );
}
