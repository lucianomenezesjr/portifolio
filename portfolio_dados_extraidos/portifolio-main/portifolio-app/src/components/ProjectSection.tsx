"use client";
import ProjectCard from "@/components/ProjectCard";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProjectsSection() {
  const { t } = useLanguage();
  
  const projects = [
    {
      projectId: "CDA", 
      title: t('projects.cda.title'),
      objective: t('projects.cda.objective'),
      description: t('projects.cda.fullDescription'),
      languages: ["C#", "JavaScript", "TypeScript", "SQL", "React.js"],
      skills: [t('skills.backend'), t('skills.frontend'), t('skills.jwt'), "UI/UX"],
      technologies: ["ASP.NET", "Supabase (Postgres)", "Next.js"],
    },
    {
      projectId: "Alure",
      title: t('projects.alure.title'),
      objective: t('projects.alure.objective'),
      description: t('projects.alure.fullDescription'),
      languages: ["C#", "TypeScript", "React.js", "SQL"],
      skills: [t('skills.fullstack'), t('skills.optimization'), "UI/UX", t('skills.documentation')],
      technologies: ["ASP.NET", "Postgres", "Next.js", "React", "Docker"],
    },
    {
      projectId: "ExtracaoDeDados",
      title: t('projects.extraction.title'),
      objective: t('projects.extraction.objective'),
      description: t('projects.extraction.fullDescription'),
      languages: ["Python", "SQL"],
      skills: [t('skills.apis'), t('skills.dataExtraction'), t('skills.docker')],
      technologies: ["Python", "FastAPI", "Gemini API", "Postgres", "Docker"],
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold text-center text-white mb-6 underline">{t('projectsSection.title')}</h1>
      <div className="grid gap-8">
        {projects.map((proj, idx) => (
          <ProjectCard
            key={idx}
            {...proj}
          />
        ))}
      </div>
    </section>
  );
}