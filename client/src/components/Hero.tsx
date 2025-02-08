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

  const skills = [
    { icon: <FaHtml5 className="text-[#E34F26]" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-[#1572B6]" />, name: "CSS" },
    { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind" },
    { icon: <RiJavascriptFill className="text-[#F7DF1E]" />, name: "JavaScript" },
    { icon: <FaReact className="text-[#61DAFB]" />, name: "React" },
    { icon: <FaNodeJs className="text-[#339933]" />, name: "Node.js" },
    { icon: <SiExpress className="text-[#000000]" />, name: "Express" },
    { icon: <SiFramer className="text-[#0055FF]" />, name: "Framer Motion" },
  ];

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
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-foreground">
            Hi, I'm <span className="text-primary">TAHMID</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl">
            Full Stack Web Developer passionate about creating interactive digital experiences
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm 
                         px-4 py-2 rounded-full border border-primary/20"
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
              </motion.div>
            ))}
          </div>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg
                     hover:bg-primary/90 transition-colors duration-300"
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
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}