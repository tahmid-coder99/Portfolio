import { useEffect, useRef } from "react";
import * as THREE from "three";
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
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-[#2C3E50]">
          Creative Developer
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-[#34495E] max-w-2xl mx-auto">
          Crafting beautiful digital experiences through code and creativity
        </p>
        <a
          href="#projects"
          className="inline-block bg-[#3498DB] text-white px-8 py-3 rounded-lg
                     hover:bg-[#2980B9] transition-colors duration-300"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
