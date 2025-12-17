"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PROCESS_STEPS = [
  {
    id: "01",
    title: "Discovery",
    description: "We dive deep into your brand's DNA, understanding your audience and defining clear, measurable goals.",
    color: "from-blue-400 to-cyan-300"
  },
  {
    id: "02",
    title: "Strategy",
    description: "Architecting the perfect user journey. We blueprint the structure to ensure seamless navigation and conversion.",
    color: "from-cyan-300 to-teal-400"
  },
  {
    id: "03",
    title: "Design & Build",
    description: "Where magic happens. We craft high-fidelity visuals and code them into a responsive, lightning-fast reality.",
    color: "from-teal-400 to-purple-400"
  },
  {
    id: "04",
    title: "Launch & Scale",
    description: "Deploying with confidence. We monitor performance and iterate to ensure your digital presence keeps growing.",
    color: "from-purple-400 to-pink-500"
  },
];

export default function ProcessSteps() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#030303]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-20 left-4 md:left-20 z-10 max-w-lg">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Blueprint
            </span>
          </motion.h2>
          <p className="text-gray-400 text-lg">
            Our proven methodology to transform abstract ideas into market-leading digital products.
          </p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 md:gap-12 pl-[50vw]">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.id}
              className="group relative h-[400px] w-[300px] md:h-[500px] md:w-[450px] overflow-hidden rounded-3xl bg-neutral-900 border border-white/10"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
              
              <div className="relative h-full flex flex-col justify-between p-8 md:p-12">
                <div className="text-8xl md:text-9xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                  {step.id}
                </div>
                
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
