"use client";
import React from "react";

import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

export function AlureLine() {
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

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
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
    title: "Home",
    description: (
      <>
        <p>
          A página inicial da Alure apresenta um design clean e moderno, com hero section destacando as principais coleções. Navegação intuitiva com categorias organizadas, banner promocional estratégico e seção de produtos em destaque. Layout responsivo que se adapta perfeitamente a diferentes dispositivos, garantindo excelente experiência do usuário desde o primeiro acesso.
        </p>
      </>
    ),
    badge: "",
    image: "/alureImgs/alure_home.png",  },
  {
    title: "Página de Produtos",
    description: (
      <>
        <p>
          Interface de catálogo com sistema avançado de filtros por categoria, tamanho, cor e preço. Design de cards responsivos com imagens em alta resolução, preços destacados e badges de promoção. Funcionalidade de ordenação por relevância, preço e novidade. Paginação otimizada para performance com carregamento suave de produtos.
        </p>
      </>
    ),
    badge: "",
    image:
        "/alureImgs/alure_produtos.png",
},
  {
    title: "Detalhes do Produto",
    description: (
      <>
        <p>
          Página completa com galeria de imagens em zoom, seleção de variações (tamanho, cor), descrição detalhada e especificações técnicas. Seção de produtos relacionados e frete calculado em tempo real. Botões de ação claros para adicionar ao carrinho ou favoritos, com feedback visual imediato das ações do usuário.
        </p>
      </>
    ),
    badge: "",
    image:
        "/alureImgs/alure_produto_detalhes.png",
    },
    {
    title: "Avaliações e Reviews",
    description: (
      <>
        <p>
            Sistema de reviews com classificação por estrelas (1-5), comentários textuais e fotos dos clientes. Moderação de conteúdo com aprovação prévia, ordenação por utilidade e data. Média de avaliações calculada automaticamente, criando social proof confiável para potenciais compradores.        </p>
      </>
    ),
    badge: "",
    image:
        "/alureImgs/alure_avaliacao.png",
    },
    {
    title: "Cadastro de Produtos",
    description: (
      <>
        <p>
            Painel administrativo intuitivo para gerenciamento completo do inventário. Upload múltiplo de imagens com preview, cadastro de variantes, gestão de estoque em tempo real e preços promocionais. Validação de dados em tempo real e integração com API de cálculo de fretes
        </p>
      </>
    ),
    badge: "",
    image:
        "/alureImgs/cadastro_produtos.png",
    },
    {
    title: "Login",
    description: (
      <>
        <p>
            Sistema de autenticação JWT (JSON Web Token) seguro com tokens de acesso e refresh. Validação em duas etapas, recuperação de senha e proteção contra ataques de força bruta. Funcionalidade exclusiva: envio automático de e-mail de notificação sempre que o usuário faz login, informando data, hora e dispositivo, garantindo segurança e transparência.
        </p>
      </>
    ),
    badge: "",
    image:
        "/alureImgs/alure_login.png",
    },
    {
    title: "Cadastro de Usuários",
    description: (
      <>
        <p>
            Formulário otimizado com validação progressiva dos campos. Confirmação de e-mail via link único com expiração controlada. Integração com serviços de validação de dados e aceite automático dos termos de uso. Processo de onboarding que coleta informações relevantes para personalização da experiência.        
        </p>
      </>
    ),
    badge: "",
    image:
        "/alureImgs/alure_cadastro.png",
    },
    {
    title: "Explicação sobre JWT",
    description: (
      <>
        <p>
            A autenticação JWT implementada garante segurança através de tokens assinados digitalmente, invalidados automaticamente após expiração. Cada login gera um token único com informações do usuário, permitindo autorização granular nas APIs. O e-mail de notificação de login, enviado instantaneamente, contém detalhes da sessão e link para revogar acesso em caso de atividade suspeita, demonstrando nosso compromisso com a segurança dos dados dos clientes.        
        </p>
      </>
    ),
    badge: "",
    
    },
];
