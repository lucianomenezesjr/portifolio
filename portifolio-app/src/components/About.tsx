"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import AboutFooter from "@/components/AboutFooter";


export default function AboutMe() {

  return (
    <section id="about" className="bg-[#141313] rounded-xl text-gray-200 py-8 px-6 shadow-[0_0_25px_rgba(168,85,247,0.3)]">
      <div className="max-w-5xl mx-auto flex flex-col items-start">

        {/* Texto */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Sobre Mim
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Olá! Meu nome é <span className="text-purple-400">Luciano de Jesus Menezes Júnior</span>, 
            sou estudante de <strong>Análise e Desenvolvimento de Sistemas</strong> e atualmente 
            estagiário na <strong>2RPnet</strong>, atuando no desenvolvimento de um sistema para 
            garantir segurança em transações bancárias.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Tenho experiência prática em <span className="text-purple-400">C# (ASP.NET)</span>, 
            <span className="text-purple-400"> Python (FastAPI)</span> e <span className="text-purple-400"> React.js (Next.js)</span>, com foco em criação de 
            <strong> APIs REST</strong>, bancos de dados como <strong>MySQL</strong> e <strong>Postgres</strong>, 
            versionamento com <strong>Git/GitFlow</strong> e metodologias ágeis (<strong>Scrum</strong>).
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Também tenho interesse em <strong>arquitetura de sistemas</strong>, <strong>UI/UX</strong>, 
            <strong> testes</strong> e conteinerização com <strong>Docker</strong>. 
            Busco sempre evoluir e aplicar boas práticas de desenvolvimento em cada projeto.
          </p>
        </div>
        <AboutFooter />
        
      </div>
    </section>
  );
}
