import { useEffect, useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import { initScene } from "@/lib/scene";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const { cleanup } = initScene(canvasRef.current);
    return cleanup;
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-[#2C3E50]">
            Creative Developer
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#34495E] max-w-2xl">
            Crafting beautiful digital experiences through code and creativity
          </p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#3498DB] text-white px-8 py-3 rounded-lg
                     hover:bg-[#2980B9] transition-colors duration-300"
          >
            View My Work
          </motion.a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <div className="absolute inset-0 bg-[#3498DB] rounded-full opacity-20 animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=800"
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-[#3498DB] shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}