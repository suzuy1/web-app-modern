"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ImageReveal() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const width = useTransform(scrollYProgress, [0.2, 0.6], ["80%", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0.2, 0.6], ["40px", "0px"]);
  const scale = useTransform(scrollYProgress, [0.2, 0.6], [0.95, 1]);

  return (
    <section ref={ref} className="py-20 flex justify-center overflow-hidden">
      <motion.div 
        style={{ width, borderRadius, scale }}
        className="h-[500px] md:h-[700px] bg-cover bg-center overflow-hidden relative"
      >
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2940&auto=format&fit=crop')"
          }}
        >
          <div className="w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-black/60 backdrop-brightness-75 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center px-6"
            >
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
                Where Vision Meets Execution
              </h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                Transforming ideas into stunning digital experiences that captivate and convert.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
