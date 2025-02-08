import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const navAnimation = {
    hidden: { y: -20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnimation = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="show"
      variants={navAnimation}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E5E7EB]"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-playfair font-bold text-[#2C3E50]"
          >
            Portfolio
          </motion.a>
        </Link>
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              variants={itemAnimation}
              whileHover={{ y: -2, color: "#3498DB" }}
              className="text-[#34495E]/80 hover:text-[#3498DB] transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}