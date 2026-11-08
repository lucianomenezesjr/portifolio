"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectCardProps {
  title: string;
  objective: string;
  description: string;
  languages: string[];
  skills: string[];
  technologies: string[];
  projectId: string; // Novo prop para identificar o projeto
}

export default function ProjectCard({
  title,
  objective,
  description,
  languages,
  skills,
  technologies,
  projectId,
}: ProjectCardProps) {
  const { t } = useLanguage();
  
  return (
    <Link href={`/Projetos/${projectId}`} passHref>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gray-900 border border-purple-500/50 p-6 rounded-2xl shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all cursor-pointer"   
      >
        <div className="flex flex-col md:flex-row gap-6">
          {/* Coluna 1 */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-purple-400 mb-2">{title}</h2>
            <p className="text-sm text-gray-400 italic mb-4">{objective}</p>
            <p className="text-gray-200">{description}</p>
          </div>

          {/* Coluna 2 */}
          <div className="flex-1">
            <div className="mb-3">
              <h3 className="text-sm font-semibold text-gray-300">{t('projectCard.languages')}:</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-purple-600/20 text-purple-300 border border-purple-500/30"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <h3 className="text-sm font-semibold text-gray-300">{t('projectCard.skills')}:</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-300">{t('projectCard.technologies')}:</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-green-600/20 text-green-300 border border-green-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}