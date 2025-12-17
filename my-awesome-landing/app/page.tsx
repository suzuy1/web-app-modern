"use client";
import CinematicHero from "@/components/CinematicHero";
import FAQ from "@/components/FAQ";
import FeatureCard from "@/components/FeatureCard";
import FloatingStats from "@/components/FloatingStats";
import Footer from "@/components/Footer";
import ImageReveal from "@/components/ImageReveal";
import Marquee from "@/components/Marquee";
import ProjectCard from "@/components/ProjectCard";
import Testimonials from "@/components/Testimonials";
import { motion } from "framer-motion";
import { FiCloudLightning, FiCode, FiLayers, FiShield } from "react-icons/fi";

const FEATURES = [
  { title: "Fast Performance", desc: "Optimized for speed and SEO out of the box.", icon: <FiCloudLightning size={24} /> },
  { title: "Clean Code", desc: "Built with the latest standards of React & Next.js.", icon: <FiCode size={24} /> },
  { title: "Layered Design", desc: "Complex visual layers for a deep immersive feel.", icon: <FiLayers size={24} /> },
  { title: "Secure by Default", desc: "Enterprise grade security for your modern apps.", icon: <FiShield size={24} /> },
];

const PROJECTS = [
  {
    title: "Reimagined E-commerce",
    description: "A sleek, modern e-commerce platform with AI-powered recommendations.",
    imageUrl: "https://images.unsplash.com/photo-1522204523234-8729aa67e2e6?q=80&w=2940&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Interactive Dashboard",
    description: "Data visualization for insights, designed for clarity and impact.",
    imageUrl: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=2940&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Mobile App Redesign",
    description: "User-centric mobile app experience with stunning UI/UX.",
    imageUrl: "https://images.unsplash.com/photo-1610461872633-87b60589a8c6?q=80&w=2940&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Brand Website & Identity",
    description: "Crafting unique brand stories through captivating web presence.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop",
    link: "#"
  },
];

export default function Home() {
  return (
    <main className="bg-[#030303] min-h-screen">
      {/* 1. Hero Section - Cinematic Reveal */}
      <CinematicHero />

      {/* 2. Floating Stats - Counter Animation */}
      <FloatingStats />

      {/* 3. Marquee - Running Text */}
      <Marquee />

      {/* 4. Features Grid - 3D Tilt */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-12 md:mb-16 px-4"
        >
          Why Choose{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Lumina
          </span>
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Image Reveal - Masking Scroll */}
      <ImageReveal />

      {/* 6. Project Gallery - Hover Zoom */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-12 md:mb-16 px-4"
        >
          Our Latest <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Works</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* 7. Testimonials - Draggable */}
      <Testimonials />

      {/* 8. FAQ & Footer */}
      <FAQ />
      <Footer />
    </main>
  );
}