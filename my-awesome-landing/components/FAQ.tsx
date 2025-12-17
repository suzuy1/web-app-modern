"use client";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const FAQS = [
  { 
    id: "01",
    category: "Process",
    q: "How fast can you deliver?", 
    a: "We move at the speed of light. Typical landing pages take 1-2 weeks, while complex platforms take 4-8 weeks. We sprint so you can scale." 
  },
  { 
    id: "02",
    category: "Pricing",
    q: "Is it expensive?", 
    a: "We are not cheap, we are an investment. Our pricing reflects the premium quality and ROI-focused value we deliver. Good design pays for itself." 
  },
  { 
    id: "03",
    category: "Support",
    q: "Do you offer post-launch support?", 
    a: "Absolutely. We don't ghost. We offer retainer packages to keep your digital asset polished, updated, and secure 24/7." 
  },
  { 
    id: "04",
    category: "Technology",
    q: "Why do you use Next.js?", 
    a: "Speed, SEO, and Scalability. It's the same tech used by Netflix, TikTok, and Twitch. We build your site on an enterprise-grade stack." 
  },
  { 
    id: "05",
    category: "Customization",
    q: "Can I update content myself?", 
    a: "Yes. We integrate headless CMS solutions (like Sanity or Contentful) so your marketing team can edit content without touching a line of code." 
  },
  { 
    id: "06",
    category: "Guarantee",
    q: "What if I don't like the design?", 
    a: "We work in iterate sprints. You approve every stage—from wireframes to high-fidelity mockups—before we write a single line of code." 
  }
];

export default function FAQ() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Header Section */}
        <div className="lg:col-span-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sticky top-32"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 dark:text-white text-black tracking-tight leading-none">
              Questions? <br />
              <span className="text-gray-500">We have answers.</span>
            </h2>
            <p className="text-lg text-gray-500 mb-8 max-w-sm">
              Everything you need to know about our process, pricing, and philosophy. Can&apos;t find what you&apos;re looking for? 
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-cyan-500 font-bold hover:gap-4 transition-all">
              Contact Support <FiArrowRight />
            </a>
          </motion.div>
        </div>

        {/* Grid Cards Section */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-colors duration-300"
            >
              <div className="absolute top-8 right-8 text-xs font-mono text-gray-400 opacity-50">
                {faq.id}
              </div>
              
              <div className="h-full flex flex-col justify-between gap-6">
                <div>
                  <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-2 block">
                    {faq.category}
                  </span>
                  <h3 className="text-xl font-bold dark:text-white text-black">
                    {faq.q}
                  </h3>
                </div>
                
                <div className="relative overflow-hidden">
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
                    {faq.a}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
