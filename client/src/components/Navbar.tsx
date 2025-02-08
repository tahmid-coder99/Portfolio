import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <motion.a
            whileHover={{ scale: 1.05 }}
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
              whileHover={{ y: -2 }}
              className="text-[#34495E] hover:text-[#3498DB] transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
}
