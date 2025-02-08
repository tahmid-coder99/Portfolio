import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function ProjectCard({ title, description, image, tags }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <CardHeader className="p-4">
          <h3 className="text-xl font-playfair font-bold text-[#2C3E50]">{title}</h3>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-[#34495E] mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#3498DB]/10 text-[#3498DB] rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
