"use client";
import React from "react";

import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

export function ControleFluxoLine() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl mb-4">
              {item.title}
            </p>

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
  );
}

const dummyContent = [
  {
    title: "Resumo do Projeto",
    description: (
      <>
        <p>
          O Sistema de Controle de Acesso é voltado para escolas e faculdades, com foco em gerenciar a entrada e saída de alunos e turmas de forma segura e organizada. Possui dashboards interativos, autenticação segura via JWT e interface responsiva, garantindo usabilidade e controle eficiente para administradores e funcionários.
        </p>
      </>
    ),
    badge: "",
  },
  {
    title: "Objetivo",
    description: (
      <>
        <p>
          Oferecer uma solução completa para gerenciamento de acessos, aumentando a segurança, controle e organização das atividades de entrada e saída em ambientes educacionais, com integração de autenticação, relatórios e controle de usuários.
        </p>
      </>
    ),
    badge: "",
  },
  {
    title: "Home",
    description: (
      <>
        <p>
          Página inicial com visão geral do sistema: exibição de turmas, alunos e solicitações de acesso pendentes. Interface intuitiva, permitindo que administradores vejam rapidamente os eventos de entrada e saída e façam ações rápidas de autorização ou cancelamento.
        </p>
      </>
    ),
    badge: "",
    image: "/CdaImagens/home_cda.png",
  },
  {
    title: "Cadastro de Usuários",
    description: (
      <>
        <p>
          Formulário de registro de usuários com validação dos campos e confirmação via e-mail. Cada usuário recebe permissões de acordo com seu perfil (aluno, professor ou administrador). O processo garante que apenas usuários autorizados tenham acesso ao sistema.
        </p>
      </>
    ),
    badge: "",
    image: "/CdaImagens/cadastro_cda.png",
  },
  {
    title: "Login",
    description: (
      <>
        <p>
          Sistema de autenticação JWT, com tokens de acesso e refresh, garantindo login seguro. Inclui recuperação de senha e notificações de sessão por e-mail, permitindo rastrear acessos e proteger contra tentativas de login suspeitas.
        </p>
      </>
    ),
    badge: "",
    image: "/CdaImagens/login_cda.png",
  },
];
