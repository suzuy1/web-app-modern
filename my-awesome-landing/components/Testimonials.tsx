"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const TESTIMONIALS = [
  { 
    name: "Alex Rivera", 
    role: "CTO at FinEdge", 
    text: "Lumina didn't just build a website; they engineered a digital presence that doubled our conversion rate in 30 days. Absolute wizardry.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  { 
    name: "Sarah Chen", 
    role: "Founder, Artistry", 
    text: "The level of detail is insane. They treated our project like it was their own masterpiece. Best investment we've made this year.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  { 
    name: "Marcus Thorne", 
    role: "Director, Nexus Corp", 
    text: "Fast, responsive, and incredibly creative. They took our vague ideas and turned them into a concrete, award-winning reality.",
    image: "https://randomuser.me/api/portraits/men/86.jpg"
  },
  { 
    name: "Emily Watson", 
    role: "VP Marketing", 
    text: "I was skeptical about the 'Cinematic' claim, but wow. The user retention metrics speak for themselves. Truly immersive.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  { 
    name: "David Kim", 
    role: "Start-up Founder", 
    text: "Clean code, scalable architecture, and a design that drops jaws. If you want to stand out, you go to Lumina.",
    image: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  { 
    name: "Olivia Grant", 
    role: "Creative Lead", 
    text: "Finally, an agency that understands that performance and aesthetics aren't mutually exclusive. 10/10 experience.",
    image: "https://randomuser.me/api/portraits/women/29.jpg"
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-white dark:bg-[#050505] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 dark:text-white text-black tracking-tight">
            Client <span className="text-cyan-500">Stories</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what industry leaders rely on us for.
          </p>
        </motion.div>

        {/* Masonry Grid "Wall of Love" */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 p-8 rounded-3xl hover:border-cyan-500/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold dark:text-white text-black text-lg leading-tight">{item.name}</h4>
                  <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">{item.role}</p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                "{item.text}"
              </p>

              {/* Star Rating Decoration */}
              <div className="flex gap-1 mt-6 text-yellow-500 text-sm">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
