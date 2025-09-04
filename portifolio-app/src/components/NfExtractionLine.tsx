"use client";

import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";

export function NfExtractionLine() {
  return (
    <section className="relative z-10 pb-20"> {/* Mantém o efeito acima do footer */}
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p className="text-xl mb-4">{item.title}</p>

              <div className="text-sm prose prose-sm dark:prose-invert">
                {item?.image && (
                  <img
                    src={item.image}
                    alt="screenshot"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </section>
  );
}


const dummyContent = [
  {
    title: "Resumo do Projeto",
    description: (
      <>
        <p>
          O sistema de <strong>extração de dados de notas fiscais</strong> foi
          desenvolvido para automatizar a leitura e processamento de documentos
          fiscais enviados pelos usuários. Ele organiza e armazena as informações
          em banco de dados, permitindo consultas rápidas e geração de relatórios
          estruturados.
        </p>
      </>
    ),
    badge: "2025 - 2025",
  },
  {
    title: "Objetivo",
    description: (
      <>
        <p>
          Garantir a <strong>extração automática</strong> e <strong>precisa</strong> de dados de notas fiscais,
          reduzindo erros manuais e otimizando o tempo de análise. O sistema
          centraliza informações para uso em relatórios e dashboards financeiros.
        </p>
      </>
    ),
    badge: "",
    image: "/GeminiAPI/methodGet.png",

  },
  {
    title: "Funcionalidades",
    description: (
      <>
        <ul className="list-disc list-inside">
          <li>Upload de notas fiscais em PDF/Imagem.</li>
          <li>Processamento via IA para extração de campos relevantes.</li>
          <li>Armazenamento em banco de dados estruturado.</li>
          <li>Dashboard para visualização dos dados extraídos.</li>
        </ul>
      </>
    ),
    badge: "",
    image: "/GeminiAPI/methodPost.png",
  },
  {
    title: "Tecnologias",
    description: (
      <>
        <p>
          O projeto utiliza uma stack moderna para garantir desempenho e
          escalabilidade:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>FastAPI</strong> para backend e processamento de dados.</li>
          <li><strong>Postgres (Docker)</strong> para armazenamento das notas.</li>
          <li><strong>Integração com IA (Gemini API)</strong> para extração inteligente de campos.</li>
        </ul>
      </>
    ),
    badge: "",
  },
  {
    title: "Destaques",
    description: (
      <>
        <p>
          O sistema se diferencia por integrar o <strong>Gemini (IA do Google)</strong> para análise
          e extração de dados, oferecendo segurança no armazenamento e uma
          experiência de usuário fluida. O uso de <strong>Docker</strong> garante
          portabilidade e fácil implantação em diferentes ambientes.
        </p>
      </>
    ),
    badge: "",
  },
];
