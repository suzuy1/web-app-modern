"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function ProjectCard({ title, description, imageUrl, link }: ProjectCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block h-64 md:h-80 w-full rounded-2xl overflow-hidden group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Gambar Project */}
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-300" 
        />
      </motion.div>

      {/* Overlay dengan Detail - Always visible on mobile, hover on desktop */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 md:p-6 flex flex-col justify-end opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
        initial={{ y: 20 }}
        whileHover={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">{title}</h3>
        <p className="text-xs md:text-sm text-gray-300 line-clamp-2">{description}</p>
        <span className="mt-2 md:mt-4 text-cyan-400 text-xs md:text-sm flex items-center">
          View Project 
          <svg className="ml-1 w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </span>
      </motion.div>

      {/* Border Hover Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400 rounded-2xl transition-all duration-300" />
    </motion.a>
  );
}
