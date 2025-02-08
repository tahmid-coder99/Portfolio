import { motion } from "framer-motion";
import { Code2, Palette, Globe2, Sparkles } from "lucide-react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiFramer, SiTypescript } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";

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

  const skills = [
    { icon: <FaHtml5 size={40} />, name: "HTML", color: "text-[#E34F26]", level: 95 },
    { icon: <FaCss3Alt size={40} />, name: "CSS", color: "text-[#1572B6]", level: 90 },
    { icon: <SiTailwindcss size={40} />, name: "Tailwind", color: "text-[#06B6D4]", level: 88 },
    { icon: <RiJavascriptFill size={40} />, name: "JavaScript", color: "text-[#F7DF1E]", level: 85 },
    { icon: <FaReact size={40} />, name: "React", color: "text-[#61DAFB]", level: 90 },
    { icon: <FaNodeJs size={40} />, name: "Node.js", color: "text-[#339933]", level: 82 },
    { icon: <SiExpress size={40} />, name: "Express", color: "text-black dark:text-white", level: 85 },
    { icon: <SiFramer size={40} />, name: "Framer", color: "text-[#0055FF]", level: 80 },
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

        <div className="max-w-7xl mx-auto">
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className={`${skill.color} transition-transform hover:scale-110`}>
                    {skill.icon}
                  </div>
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg mx-auto text-center"
          >
            <p className="text-muted-foreground">
              As a passionate full stack developer, I blend technical expertise with creative vision
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