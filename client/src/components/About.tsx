import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-playfair font-bold text-center mb-12 text-[#2C3E50]"
        >
          About Me
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed mb-6"
          >
            I'm a passionate developer focused on creating intuitive and engaging web experiences. 
            With expertise in modern web technologies and a keen eye for design, I bring ideas to life 
            through clean code and creative solutions.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed"
          >
            My approach combines technical excellence with artistic vision, resulting in 
            websites that not only function flawlessly but also captivate users with smooth 
            animations and interactive elements.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
