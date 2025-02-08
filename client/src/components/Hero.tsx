import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { initScene } from "@/lib/scene";

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
        duration: 1,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8"
      >
        <motion.div 
          variants={itemVariants}
          className="flex-1 text-center md:text-left"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-foreground"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Creative Developer
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl"
            variants={itemVariants}
          >
            Crafting beautiful digital experiences through code and creativity
          </motion.p>
          <motion.a
            href="#projects"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(52, 152, 219, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg
                     hover:bg-primary/90 transition-all duration-300"
          >
            View My Work
          </motion.a>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex-1 relative"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <motion.div 
              className="absolute inset-0 bg-primary/20 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=800"
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-primary shadow-xl"
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <motion.div
              className="absolute inset-0 border-4 border-primary/30 rounded-full"
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}