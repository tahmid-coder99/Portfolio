import { motion } from "framer-motion";
import { Code2, Palette, Globe2, Sparkles } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing elegant, maintainable, and efficient code is my passion.",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Design",
      description: "Combining aesthetics with functionality to create memorable experiences.",
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "Global Mindset",
      description: "Creating solutions that resonate across cultural boundaries.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Innovation",
      description: "Always exploring new technologies and creative approaches.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-playfair font-bold text-center mb-16 text-foreground"
        >
          About Me
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg dark:prose-invert mx-auto"
          >
            <p className="text-center text-muted-foreground">
              As a passionate developer, I blend technical expertise with creative vision
              to craft engaging digital experiences. My approach combines modern technologies
              with thoughtful design principles, ensuring each project not only meets but
              exceeds expectations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}