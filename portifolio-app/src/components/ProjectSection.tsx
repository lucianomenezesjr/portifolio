"use client";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      projectId: "CDA", 
      title: "Sistema de Controle de Acessos",
      objective: "Controle de acesso em ambientes escolares ou facultades.",
      description: "Desenvolvimento de um sistema para controle de acesso escolar/faculdade...",
      languages: ["C#", "JavaScript", "TypeScript", "SQL", "React.js"],
      skills: ["Desenvolvimento Backend", "Desenvolvimento Frontend", "Autenticação JWT", "UI/UX"],
      technologies: ["ASP.NET", "Supabase (Postgres)", "Next.js"],
    },
    {
      projectId: "Alure",
      title: "Sistema de Loja de Roupas",
      objective: "Gerenciamento completo de uma loja de roupas com funcionalidades de e-commerce.",
      description: "Desenvolvimento de um sistema completo com backend e frontend integrados...",
      languages: ["C#", "TypeScript", "React.js", "SQL"],
      skills: ["Desenvolvimento Fullstack", "Otimização de Consultas", "UI/UX", "Documentação Técnica"],
      technologies: ["ASP.NET", "Postgres", "Next.js", "React", "Docker"],
    },
    {
      projectId: "ExtracaoDeDados", // ID para a rota
      title: "API de Extração de Dados de Notas Fiscais",
      objective: "Extração automatizada de dados de notas fiscais em PDF ou imagem.",
      description: "API em Python (FastAPI) para extração de dados de notas fiscais...",
      languages: ["Python", "SQL"],
      skills: ["Desenvolvimento de APIs", "Extração de Dados", "Containerização com Docker"],
      technologies: ["Python", "FastAPI", "Gemini API", "Postgres", "Docker"],
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold text-center text-white mb-6 underline">Projetos</h1>
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