"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Deteksi scroll untuk mengubah state navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 md:p-6 transition-all duration-300">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          width: isScrolled ? "90%" : "100%",
          maxWidth: "1200px",
        }}
        className={`relative w-full flex items-center justify-between px-4 md:px-8 py-4 transition-all duration-500 rounded-2xl ${
          isScrolled 
            ? "bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]" 
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-cyan-400 to-purple-600 rounded-lg animate-pulse" />
          <span className="text-white font-bold text-xl tracking-tighter italic">Lumina.</span>
        </div>

        {/* Menu Items - Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          {["Features", "Showcase", "Pricing", "About"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Theme Toggle */}
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          
          {/* Call to Action Button - Hidden on mobile when menu is open */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-5 py-2 bg-white text-black text-sm font-bold rounded-xl hover:bg-cyan-400 transition-colors"
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-xl md:hidden border border-white/10 rounded-2xl overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {["Features", "Showcase", "Pricing", "About"].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    onClick={handleLinkClick}
                    className="text-gray-400 hover:text-white transition-colors py-2 text-lg font-medium"
                  >
                    {item}
                  </a>
                ))}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="mt-2 px-5 py-3 bg-white text-black text-sm font-bold rounded-xl hover:bg-cyan-400 transition-colors"
                  onClick={handleLinkClick}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}
