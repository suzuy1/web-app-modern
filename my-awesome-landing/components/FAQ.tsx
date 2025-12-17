"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";

const FAQS = [
  { 
    q: "Apakah project ini bisa di-custom?", 
    a: "Tentu! Semua komponen dibangun secara modular menggunakan Tailwind CSS, jadi kamu bisa ubah warna, ukuran, dan animasi dengan sangat mudah." 
  },
  { 
    q: "Tech stack apa yang digunakan?", 
    a: "Kami menggunakan Next.js 15, Tailwind CSS untuk styling, dan Framer Motion untuk engine animasinya." 
  },
  { 
    q: "Bagaimana dengan performanya?", 
    a: "Sangat ngebut! Kami mengoptimasi aset, menggunakan GPU acceleration untuk animasi, dan menerapkan server-side rendering." 
  },
  { 
    q: "Apakah support dark mode?", 
    a: "Ya! Semua komponen sudah didesain dengan dark mode support menggunakan next-themes. Toggle bisa kamu temukan di navbar." 
  },
  { 
    q: "Berapa lama development time-nya?", 
    a: "Dengan komponen yang sudah modular seperti ini, kamu bisa launch landing page premium dalam hitungan jam, bukan hari." 
  }
];

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section className="py-24 max-w-3xl mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center dark:text-white text-black">
        Common <span className="text-cyan-500">Questions</span>
      </h2>
      <div className="space-y-4">
        {FAQS.map((faq, i) => (
          <div 
            key={i} 
            className="border-b border-black/5 dark:border-white/10 pb-4"
          >
            <button 
              onClick={() => setActiveIdx(activeIdx === i ? null : i)}
              className="w-full flex justify-between items-center py-4 text-left group"
            >
              <span className="text-lg font-medium dark:text-white text-black group-hover:text-cyan-500 transition-colors">
                {faq.q}
              </span>
              <motion.div 
                animate={{ rotate: activeIdx === i ? 45 : 0 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-cyan-500"
              >
                <FiPlus size={24} />
              </motion.div>
            </button>
            <AnimatePresence>
              {activeIdx === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-500 dark:text-gray-400 pb-4 leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
