"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const STATS = [
  { label: "Projects Done", value: 150, suffix: "+" },
  { label: "Happy Clients", value: 80, suffix: "+" },
  { label: "Awards Won", value: 12, suffix: "" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function FloatingStats() {
  return (
    <section className="py-12 md:py-20 border-y border-white/5 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 text-center">
        {STATS.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-cyan-500">
              <Counter target={stat.value} suffix={stat.suffix} />
            </h3>
            <p className="text-gray-500 uppercase tracking-widest text-[10px] sm:text-xs mt-2">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
