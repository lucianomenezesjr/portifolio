"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    name: "Luciano Jr",
    roles: {
      fullstack: "Fullstack Developer",
      backend: "Backend Developer",
      frontend: "Frontend Developer"
    },
    navbar: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact"
    },
    about: "About Me",
    projectsTitle: "Projects",
    contact: "Contact",
    technologies: "Technologies",
    aboutSection: {
      title: "About Me",
      intro: "Hello! My name is <span class='text-purple-400'>Luciano de Jesus Menezes Júnior</span>, I'm a <strong>Systems Analysis and Development</strong> student and currently a <strong>Fullstack</strong> Developer at <strong>2RP Net</strong>, where I work on developing solutions focused on security and reliability in banking transactions.",
      experience: "I have practical experience in <span class='text-purple-400'>C# (ASP.NET)</span>, <span class='text-purple-400'>Python (FastAPI)</span> and <span class='text-purple-400'>React.js (Next.js)</span>, with a focus on creating and maintaining <strong>REST APIs</strong>, as well as working with databases like <strong>MySQL</strong> and <strong>Postgres</strong>, version control with <strong>Git/GitFlow</strong> and agile methodologies (<strong>Scrum</strong>).",
      interests: "I also have interests in <strong>systems architecture</strong>, <strong>UI/UX</strong>, <strong>automated testing</strong> and containerization with <strong>Docker</strong>. I enjoy continuous learning and applying good development practices to build efficient, scalable and well-structured solutions."
    },
    projectsSection: {
      title: "My Projects",
      subtitle: "Some of my work",
      viewMore: "View More",
      viewProject: "View Project",
      technologies: "Technologies Used"
    },
    techSection: {
      title: "Technologies & Tools",
      subtitle: "Technologies I work with"
    },
    contactSection: {
      title: "Contact",
      subtitle: "Let's get in touch",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Error sending message. Please try again.",
      placeholders: {
        name: "Your name",
        email: "your.email@example.com",
        message: "Tell me about your project..."
      }
    },
    footer: {
      rights: "All rights reserved",
      madeWith: "Made with",
      by: "by"
    },
    buttons: {
      downloadCV: "Download CV",
      viewCode: "View Code",
      liveDemo: "Live Demo"
    },
    projects: {
      alure: {
        title: "Alure E-commerce",
        description: "Complete e-commerce platform with product management, shopping cart, and secure checkout system.",
        objective: "Complete management of a clothing store with e-commerce functionalities.",
        fullDescription: "Development of a complete system with integrated backend and frontend..."
      },
      cda: {
        title: "Access Control System",
        description: "Administrative system for managing certificates and digital documents with authentication.",
        objective: "Access control in school or college environments.",
        fullDescription: "Development of a system for school/college access control..."
      },
      extraction: {
        title: "Invoice Data Extraction API",
        description: "RESTful API for extracting and processing data from various sources with automated validation.",
        objective: "Automated extraction of invoice data from PDF or image files.",
        fullDescription: "Python API (FastAPI) for extracting invoice data..."
      }
    },
    skills: {
      backend: "Backend Development",
      frontend: "Frontend Development",
      fullstack: "Fullstack Development",
      jwt: "JWT Authentication",
      optimization: "Query Optimization",
      documentation: "Technical Documentation",
      apis: "API Development",
      dataExtraction: "Data Extraction",
      docker: "Docker Containerization"
    },
    projectCard: {
      languages: "Languages",
      skills: "Skills",
      technologies: "Technologies"
    },
    cvButton: {
      view: "View CV",
      title: "My Resume",
      download: "Download CV",
      downloadSuccess: "Resume downloaded successfully!"
    },
    projectPages: {
      alure: {
        title: "Alure",
        sections: {
          home: {
            title: "Home",
            description: "Alure's homepage features a clean and modern design with hero section highlighting main collections. Intuitive navigation with organized categories, strategic promotional banner and featured products section. Responsive layout that adapts perfectly to different devices, ensuring excellent user experience from first access."
          },
          products: {
            title: "Products Page",
            description: "Catalog interface with advanced filter system by category, size, color and price. Responsive card design with high resolution images, highlighted prices and promotional badges. Sorting functionality by relevance, price and novelty. Optimized pagination for performance with smooth product loading."
          },
          productDetails: {
            title: "Product Details",
            description: "Complete page with zoom image gallery, variation selection (size, color), detailed description and technical specifications. Related products section and real-time shipping calculation. Clear action buttons to add to cart or favorites, with immediate visual feedback of user actions."
          },
          reviews: {
            title: "Reviews & Ratings",
            description: "Review system with star rating (1-5), text comments and customer photos. Content moderation with prior approval, sorting by usefulness and date. Automatically calculated average ratings, creating reliable social proof for potential buyers."
          },
          productRegistration: {
            title: "Product Registration",
            description: "Intuitive administrative panel for complete inventory management. Multiple image upload with preview, variant registration, real-time stock management and promotional prices. Real-time data validation and integration with shipping calculation API."
          },
          login: {
            title: "Login",
            description: "Secure JWT (JSON Web Token) authentication system with access and refresh tokens. Two-step validation, password recovery and brute force attack protection. Exclusive feature: automatic email notification whenever user logs in, informing date, time and device, ensuring security and transparency."
          },
          userRegistration: {
            title: "User Registration",
            description: "Optimized form with progressive field validation. Email confirmation via unique link with controlled expiration. Integration with data validation services and automatic acceptance of terms of use. Onboarding process that collects relevant information for experience personalization."
          },
          jwtExplanation: {
            title: "JWT Explanation",
            description: "The implemented JWT authentication ensures security through digitally signed tokens, automatically invalidated after expiration. Each login generates a unique token with user information, allowing granular authorization in APIs. The login notification email, sent instantly, contains session details and link to revoke access in case of suspicious activity, demonstrating our commitment to customer data security."
          }
        }
      },
      cda: {
        title: "Access Control System",
        sections: {
          summary: {
            title: "Project Summary",
            description: "The Access Control System is designed for schools and colleges, focusing on managing student and class entry and exit in a secure and organized manner. Features interactive dashboards, secure JWT authentication and responsive interface, ensuring usability and efficient control for administrators and staff."
          },
          home: {
            title: "Home",
            description: "Main dashboard with access overview, real-time statistics and quick navigation. Clean interface designed for educational administrators with access cards, recent activity summaries and direct shortcuts to main system functions."
          },
          login: {
            title: "Login",
            description: "Secure authentication system with JWT implementation, role-based access control and session management. Multi-level security with administrators, teachers and staff access, each with specific permissions and customized interface according to user profile."
          },
          registration: {
            title: "Registration",
            description: "Complete user management system with batch student registration, CSV import functionality and automatic profile assignment. Integration with academic system for automatic data synchronization and maintenance of updated database with academic information."
          }
        }
      },
      extraction: {
        title: "Invoice Data Extraction API",
        sections: {
          summary: {
            title: "Project Summary",
            description: "The invoice data extraction system was developed to automate the reading and processing of fiscal documents sent by users. It organizes and stores information in database, allowing quick queries and generation of structured reports."
          },
          postMethod: {
            title: "POST Method",
            description: "Main endpoint for invoice upload and processing. Accepts PDF and image files, validates format and size, processes with Gemini API for intelligent text extraction. Returns structured JSON with all identified fiscal information and confidence level of extraction."
          },
          getMethod: {
            title: "GET Method",
            description: "Query endpoint for retrieving stored invoices. Advanced filtering by date, amount, issuer and document type. Supports pagination, sorting and field selection for optimized queries. Returns complete data with extraction metadata and processing history."
          },
          dockerization: {
            title: "Dockerization",
            description: "Complete containerization with Docker Compose for easy deployment and scalability. Separate containers for API, database and file processing queue. Automated environment configuration with volumes for data persistence and horizontal scaling support."
          },
          geminiIntegration: {
            title: "Gemini Integration",
            description: "Advanced integration with Google's Gemini API for intelligent OCR and natural language processing. Optimized prompts for fiscal document recognition, field validation and automatic error correction. High precision extraction with confidence analysis and manual review suggestions when necessary."
          }
        }
      }
    }
  },
  pt: {
    name: "Luciano Jr",
    roles: {
      fullstack: "Desenvolvedor Fullstack",
      backend: "Desenvolvedor Backend",
      frontend: "Desenvolvedor Frontend"
    },
    navbar: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato"
    },
    about: "Sobre Mim",
    projectsTitle: "Projetos",
    contact: "Contato",
    technologies: "Tecnologias",
    aboutSection: {
      title: "Sobre Mim",
      intro: "Olá! Meu nome é <span class='text-purple-400'>Luciano de Jesus Menezes Júnior</span>, sou estudante de <strong>Análise e Desenvolvimento de Sistemas</strong> e atualmente Desenvolvedor <strong>Fullstack</strong> na <strong>2RP Net</strong>, onde atuo no desenvolvimento de soluções voltadas para segurança e confiabilidade em transações bancárias.",
      experience: "Tenho experiência prática em <span class='text-purple-400'>C# (ASP.NET)</span>, <span class='text-purple-400'>Python (FastAPI)</span> e <span class='text-purple-400'>React.js (Next.js)</span>, com foco na criação e manutenção de <strong>APIs REST</strong>, além de trabalhar com bancos de dados como <strong>MySQL</strong> e <strong>Postgres</strong>, versionamento com <strong>Git/GitFlow</strong> e metodologias ágeis (<strong>Scrum</strong>).",
      interests: "Também tenho interesse em <strong>arquitetura de sistemas</strong>, <strong>UI/UX</strong>, <strong>testes automatizados</strong> e conteinerização com <strong>Docker</strong>. Gosto de aprender continuamente e aplicar boas práticas de desenvolvimento para construir soluções eficientes, escaláveis e bem estruturadas."
    },
    projectsSection: {
      title: "Meus Projetos",
      subtitle: "Alguns dos meus trabalhos",
      viewMore: "Ver Mais",
      viewProject: "Ver Projeto",
      technologies: "Tecnologias Utilizadas"
    },
    techSection: {
      title: "Tecnologias e Ferramentas",
      subtitle: "Tecnologias com as quais trabalho"
    },
    contactSection: {
      title: "Contato",
      subtitle: "Vamos conversar",
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      send: "Enviar Mensagem",
      sending: "Enviando...",
      success: "Mensagem enviada com sucesso!",
      error: "Erro ao enviar mensagem. Tente novamente.",
      placeholders: {
        name: "Seu nome",
        email: "seu.email@exemplo.com",
        message: "Conte-me sobre seu projeto..."
      }
    },
    footer: {
      rights: "Todos os direitos reservados",
      madeWith: "Feito com",
      by: "por"
    },
    buttons: {
      downloadCV: "Baixar CV",
      viewCode: "Ver Código",
      liveDemo: "Demo Ao Vivo"
    },
    projects: {
      alure: {
        title: "E-commerce Alure",
        description: "Plataforma completa de e-commerce com gerenciamento de produtos, carrinho de compras e sistema de checkout seguro.",
        objective: "Gerenciamento completo de uma loja de roupas com funcionalidades de e-commerce.",
        fullDescription: "Desenvolvimento de um sistema completo com backend e frontend integrados..."
      },
      cda: {
        title: "Sistema de Controle de Acessos",
        description: "Sistema administrativo para gestão de certificados e documentos digitais com autenticação.",
        objective: "Controle de acesso em ambientes escolares ou faculdades.",
        fullDescription: "Desenvolvimento de um sistema para controle de acesso escolar/faculdade..."
      },
      extraction: {
        title: "API de Extração de Dados de Notas Fiscais",
        description: "API RESTful para extração e processamento de dados de várias fontes com validação automatizada.",
        objective: "Extração automatizada de dados de notas fiscais em PDF ou imagem.",
        fullDescription: "API em Python (FastAPI) para extração de dados de notas fiscais..."
      }
    },
    skills: {
      backend: "Desenvolvimento Backend",
      frontend: "Desenvolvimento Frontend",
      fullstack: "Desenvolvimento Fullstack",
      jwt: "Autenticação JWT",
      optimization: "Otimização de Consultas",
      documentation: "Documentação Técnica",
      apis: "Desenvolvimento de APIs",
      dataExtraction: "Extração de Dados",
      docker: "Containerização com Docker"
    },
    projectCard: {
      languages: "Linguagens",
      skills: "Habilidades",
      technologies: "Tecnologias"
    },
    cvButton: {
      view: "Visualizar CV",
      title: "Meu Currículo",
      download: "Download CV",
      downloadSuccess: "Currículo baixado com sucesso!"
    },
    projectPages: {
      alure: {
        title: "Alure",
        sections: {
          home: {
            title: "Home",
            description: "A página inicial da Alure apresenta um design clean e moderno, com hero section destacando as principais coleções. Navegação intuitiva com categorias organizadas, banner promocional estratégico e seção de produtos em destaque. Layout responsivo que se adapta perfeitamente a diferentes dispositivos, garantindo excelente experiência do usuário desde o primeiro acesso."
          },
          products: {
            title: "Página de Produtos",
            description: "Interface de catálogo com sistema avançado de filtros por categoria, tamanho, cor e preço. Design de cards responsivos com imagens em alta resolução, preços destacados e badges de promoção. Funcionalidade de ordenação por relevância, preço e novidade. Paginação otimizada para performance com carregamento suave de produtos."
          },
          productDetails: {
            title: "Detalhes do Produto",
            description: "Página completa com galeria de imagens em zoom, seleção de variações (tamanho, cor), descrição detalhada e especificações técnicas. Seção de produtos relacionados e frete calculado em tempo real. Botões de ação claros para adicionar ao carrinho ou favoritos, com feedback visual imediato das ações do usuário."
          },
          reviews: {
            title: "Avaliações e Reviews",
            description: "Sistema de reviews com classificação por estrelas (1-5), comentários textuais e fotos dos clientes. Moderação de conteúdo com aprovação prévia, ordenação por utilidade e data. Média de avaliações calculada automaticamente, criando social proof confiável para potenciais compradores."
          },
          productRegistration: {
            title: "Cadastro de Produtos",
            description: "Painel administrativo intuitivo para gerenciamento completo do inventário. Upload múltiplo de imagens com preview, cadastro de variantes, gestão de estoque em tempo real e preços promocionais. Validação de dados em tempo real e integração com API de cálculo de fretes."
          },
          login: {
            title: "Login",
            description: "Sistema de autenticação JWT (JSON Web Token) seguro com tokens de acesso e refresh. Validação em duas etapas, recuperação de senha e proteção contra ataques de força bruta. Funcionalidade exclusiva: envio automático de e-mail de notificação sempre que o usuário faz login, informando data, hora e dispositivo, garantindo segurança e transparência."
          },
          userRegistration: {
            title: "Cadastro de Usuários",
            description: "Formulário otimizado com validação progressiva dos campos. Confirmação de e-mail via link único com expiração controlada. Integração com serviços de validação de dados e aceite automático dos termos de uso. Processo de onboarding que coleta informações relevantes para personalização da experiência."
          },
          jwtExplanation: {
            title: "Explicação sobre JWT",
            description: "A autenticação JWT implementada garante segurança através de tokens assinados digitalmente, invalidados automaticamente após expiração. Cada login gera um token único com informações do usuário, permitindo autorização granular nas APIs. O e-mail de notificação de login, enviado instantaneamente, contém detalhes da sessão e link para revogar acesso em caso de atividade suspeita, demonstrando nosso compromisso com a segurança dos dados dos clientes."
          }
        }
      },
      cda: {
        title: "Sistema de Controle de Acesso",
        sections: {
          summary: {
            title: "Resumo do Projeto",
            description: "O Sistema de Controle de Acesso é voltado para escolas e faculdades, com foco em gerenciar a entrada e saída de alunos e turmas de forma segura e organizada. Possui dashboards interativos, autenticação segura via JWT e interface responsiva, garantindo usabilidade e controle eficiente para administradores e funcionários."
          },
          home: {
            title: "Home",
            description: "Dashboard principal com visão geral dos acessos, estatísticas em tempo real e navegação rápida. Interface limpa projetada para administradores educacionais com cards de acesso, resumos de atividades recentes e atalhos diretos para as principais funções do sistema."
          },
          login: {
            title: "Login",
            description: "Sistema de autenticação segura com implementação JWT, controle de acesso baseado em funções e gerenciamento de sessões. Segurança multinível com acesso de administradores, professores e funcionários, cada um com permissões específicas e interface customizada conforme perfil do usuário."
          },
          registration: {
            title: "Cadastro",
            description: "Sistema completo de gerenciamento de usuários com cadastro em lote de alunos, funcionalidade de importação CSV e atribuição automática de perfis. Integração com sistema acadêmico para sincronização automática de dados e manutenção de base de dados atualizada com informações acadêmicas."
          }
        }
      },
      extraction: {
        title: "API de Extração de Dados de Notas Fiscais",
        sections: {
          summary: {
            title: "Resumo do Projeto",
            description: "O sistema de extração de dados de notas fiscais foi desenvolvido para automatizar a leitura e processamento de documentos fiscais enviados pelos usuários. Ele organiza e armazena as informações em banco de dados, permitindo consultas rápidas e geração de relatórios estruturados."
          },
          postMethod: {
            title: "Método POST",
            description: "Endpoint principal para upload e processamento de notas fiscais. Aceita arquivos PDF e imagem, valida formato e tamanho, processa com Gemini API para extração inteligente de texto. Retorna JSON estruturado com todas as informações fiscais identificadas e nível de confiança da extração."
          },
          getMethod: {
            title: "Método GET",
            description: "Endpoint de consulta para recuperar notas fiscais armazenadas. Filtragem avançada por data, valor, emissor e tipo de documento. Suporta paginação, ordenação e seleção de campos para consultas otimizadas. Retorna dados completos com metadados de extração e histórico de processamento."
          },
          dockerization: {
            title: "Dockerização",
            description: "Containerização completa com Docker Compose para deploy fácil e escalabilidade. Containers separados para API, banco de dados e fila de processamento de arquivos. Configuração automatizada do ambiente com volumes para persistência de dados e suporte a escalonamento horizontal."
          },
          geminiIntegration: {
            title: "Integração Gemini",
            description: "Integração avançada com Gemini API do Google para OCR inteligente e processamento de linguagem natural. Prompts otimizados para reconhecimento de documentos fiscais, validação de campos e correção automática de erros. Extração de alta precisão com análise de confiança e sugestões de revisão manual quando necessário."
          }
        }
      }
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'pt' : 'en');
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
