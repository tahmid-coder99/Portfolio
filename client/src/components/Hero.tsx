import { useEffect, useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import { initScene } from "@/lib/scene";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiFramer } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const { cleanup } = initScene(canvasRef.current);
    return cleanup;
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full -z-10 opacity-50"
      />
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-playfair font-bold mb-6 text-foreground"
          >
            Hi, I'm <span className="text-primary">TAHMID</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl"
          >
            Full Stack Web Developer passionate about creating interactive
            digital experiences
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
          ></motion.div>
          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg
                     hover:bg-primary/90 transition-colors duration-300 mb-8 md:mb-0"
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
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
            <img
              src="/attached_assets/img tahmid.jpg"
              alt="TAHMID"
              className="w-full h-full object-cover rounded-full border-4 border-primary shadow-xl"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=880";
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
