import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "Frontend Development", level: 90 },
    { name: "3D Graphics", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "Backend Development", level: 75 },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-center mb-12 text-[#2C3E50]">
          Skills
        </h2>
        <div className="max-w-2xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-[#34495E]">{skill.name}</span>
                <span className="text-[#3498DB]">{skill.level}%</span>
              </div>
              <div className="h-2 bg-[#ECF0F1] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-[#3498DB] rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
