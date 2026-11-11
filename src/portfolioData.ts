/* ==========================================================================
   Conteúdo do portfólio (PT/EN). Para atualizar o site, edite só este arquivo.
   - Campos { pt, en } são traduzidos; strings simples são iguais nos dois idiomas.
   - projects[].repo / demo: cole aqui o link público específico de cada projeto.
     Se estiver vazio, a ação correspondente não é exibida.
   - certs[].url: cole o link de verificação da credencial (opcional).
   - config.formEndpoint: URL do Formspree (https://formspree.io/f/xxxx).
     Se estiver vazio, o formulário abre o app de e-mail do visitante.
   ========================================================================== */
const PORTFOLIO = {
  config: {
    siteUrl: "",
    email: "luciano.menezes.jr11@gmail.com",
    github: "https://github.com/lucianomenezesjr",
    linkedin: "https://www.linkedin.com/in/luciano-j%C3%BAnior-89b6b7211/",
    whatsapp: "https://wa.me/5511999422998",
    cv: "cv_luciano_menezes.pdf",
    cvEn: "cv_luciano_menezes_en.pdf",
    formEndpoint: ""
  },

  /* ------------------------------ Textos da interface ------------------------------ */
  ui: {
    pt: {
      metaTitle: "Luciano Júnior — Backend Developer / Software Engineer",
      metaDesc: "Luciano Júnior, Backend Developer / Software Engineer com experiência em .NET/C#, Python/FastAPI, AWS e sistemas de prevenção e detecção de fraudes.",
      skip: "Pular para o conteúdo",
      navLabel: "Principal",
      navAbout: "Sobre", navExp: "Experiência", navProjects: "Projetos",
      navSkills: "Skills", navEdu: "Formação", navContact: "Contato",
      themeLabel: "Alternar tema", menuLabel: "Abrir menu", closeMenuLabel: "Fechar menu",
      langShort: "EN", langLabel: "Switch to English",
      heroRole: "Backend Developer / Software Engineer",
      lead: "Desenvolvedor de software com foco em backend, atuando com <strong>.NET/C#, Python/FastAPI e AWS</strong> em sistemas financeiros de alta volumetria e prevenção de fraudes.",
      btnProjects: "Ver projetos", btnContact: "Fale comigo", btnCv: "Baixar CV",
      photoAlt: "Foto de Luciano Júnior",
      secAbout: "Sobre", secExp: "Experiência", secProjects: "Projetos",
      featuredProjects: "Projetos em destaque", otherProjects: "Outros projetos",
      secSkills: "Skills", secEdu: "Formação & Certificações",
      factsInterests: "Interesses",
      filtersLabel: "Filtrar projetos",
      fAll: "Todos", fweb: "Web", fapi: "API", fcloud: "Cloud", fiot: "IoT", fai: "IA",
      details: "Ver detalhes", close: "Fechar",
      prev: "Imagem anterior", next: "Próxima imagem",
      features: "Funcionalidades", challenges: "Desafios técnicos", problem: "Problema", solution: "Solução", architecture: "Arquitetura", status: "Estado do projeto", stack: "Tecnologias",
      repoBtn: "Ver código no GitHub", profileBtn: "Ver meu GitHub", demoBtn: "Ver demo",
      imgMissing: "Imagem indisponível",
      imgCount: "Imagem {n} de {m}",
      galleryLabel: "Galeria de imagens do projeto",
      layersAlt: "Diagrama das quatro camadas do LabControl: Edge/IoT, Supervisório, Gerencial e Estratégico",
      coreLegend: "Uso no dia a dia",
      eduTitle: "Formação", certTitle: "Certificações", verify: "Verificar credencial",
      contactEyebrow: "06. Contato",
      contactTitle: "Vamos conversar?",
      contactLead: "Estou aberto a oportunidades em desenvolvimento backend e engenharia de software, principalmente no setor financeiro. Se quiser trocar uma ideia, é só chamar.",
      formName: "Nome", formEmail: "E-mail", formMessage: "Mensagem",
      formSend: "Enviar mensagem", formSending: "Enviando...",
      formOk: "Mensagem enviada. Obrigado! Respondo em breve.",
      formErr: "Não consegui enviar agora. Tente pelo e-mail ao lado.",
      formMailto: "Abrindo seu aplicativo de e-mail...",
      copyLabel: "Copiar contato",
      copySuccess: "Contato copiado para a área de transferência.",
      copyError: "Não foi possível copiar. Tente novamente.",
      formSubject: "Contato pelo portfólio",
      direct: "Ou fale direto",
      footer: "Feito com React, TypeScript e Vite"
    },
    en: {
      metaTitle: "Luciano Júnior — Backend Developer / Software Engineer",
      metaDesc: "Luciano Júnior, Backend Developer / Software Engineer experienced with .NET/C#, Python/FastAPI, AWS and fraud prevention and detection systems.",
      skip: "Skip to content",
      navLabel: "Main",
      navAbout: "About", navExp: "Experience", navProjects: "Projects",
      navSkills: "Skills", navEdu: "Education", navContact: "Contact",
      themeLabel: "Toggle theme", menuLabel: "Open menu", closeMenuLabel: "Close menu",
      langShort: "PT", langLabel: "Mudar para português",
      heroRole: "Backend Developer / Software Engineer",
      lead: "Backend-focused software developer working with <strong>.NET/C#, Python/FastAPI and AWS</strong> on high-volume financial systems and fraud prevention.",
      btnProjects: "View projects", btnContact: "Get in touch", btnCv: "Download CV",
      photoAlt: "Photo of Luciano Júnior",
      secAbout: "About", secExp: "Experience", secProjects: "Projects",
      featuredProjects: "Featured projects", otherProjects: "Other projects",
      secSkills: "Skills", secEdu: "Education & Certifications",
      factsInterests: "Interests",
      filtersLabel: "Filter projects",
      fAll: "All", fweb: "Web", fapi: "API", fcloud: "Cloud", fiot: "IoT", fai: "AI",
      details: "View details", close: "Close",
      prev: "Previous image", next: "Next image",
      features: "Implemented features", challenges: "Technical challenges", problem: "Problem", solution: "Solution", architecture: "Architecture", status: "Project status", stack: "Tech stack",
      repoBtn: "View code on GitHub", profileBtn: "See my GitHub", demoBtn: "View demo",
      imgMissing: "Image unavailable",
      imgCount: "Image {n} of {m}",
      galleryLabel: "Project image gallery",
      layersAlt: "Diagram of the four LabControl layers: Edge/IoT, Supervisory, Management and Strategic",
      coreLegend: "Used day to day",
      eduTitle: "Education", certTitle: "Certifications", verify: "Verify credential",
      contactEyebrow: "06. Contact",
      contactTitle: "Let’s talk?",
      contactLead: "I’m open to backend development and software engineering opportunities, especially in the financial sector. If you’d like to chat, just reach out.",
      formName: "Name", formEmail: "Email", formMessage: "Message",
      formSend: "Send message", formSending: "Sending...",
      formOk: "Message sent. Thank you! I’ll reply soon.",
      formErr: "I couldn’t send it right now. Please use the email on the side.",
      formMailto: "Opening your email app...",
      copyLabel: "Copy contact",
      copySuccess: "Contact copied to the clipboard.",
      copyError: "Could not copy the contact. Please try again.",
      formSubject: "Portfolio contact",
      direct: "Or reach out directly",
      footer: "Built with React, TypeScript and Vite"
    }
  },

  /* ------------------------------ Hero ------------------------------ */
  typed: {
    pt: [
      "Backend Developer / Software Engineer",
      ".NET/C# · Python/FastAPI · AWS",
      "APIs REST e sistemas financeiros",
      "Arquitetura & Cloud"
    ],
    en: [
      "Backend Developer / Software Engineer",
      ".NET/C# · Python/FastAPI · AWS",
      "REST APIs and financial systems",
      "Architecture & Cloud"
    ]
  },

  stats: [
    { v: "9", u: { pt: "meses", en: "months" },
      l: { pt: "de estagiário a desenvolvedor", en: "from intern to developer" } },
    { v: "3", u: { pt: "cargos", en: "roles" },
      l: { pt: "evolução profissional na 2RPnet", en: "career progression at 2RPnet" } },
    { v: "7+", u: { pt: "projetos", en: "projects" },
      l: { pt: "desenvolvidos ao longo da trajetória", en: "built throughout my journey" } }
  ],

  chip: { pt: "Sorocaba, SP", en: "Sorocaba, Brazil" },

  /* ------------------------------ Sobre ------------------------------ */
  about: {
    paragraphs: {
      pt: [
        "Sou desenvolvedor de software com foco em backend e experiência no setor financeiro, atuando no desenvolvimento de sistemas de prevenção e detecção de fraudes.",
        "Atualmente, trabalho na 2RPnet, desenvolvendo aplicações e serviços para plataformas bancárias de alta volumetria, utilizando principalmente .NET/C# e Python/FastAPI. Tenho interesse em arquitetura de software, sistemas distribuídos e computação em nuvem, áreas nas quais busco aprofundar meus conhecimentos.",
        "Sou formado em Análise e Desenvolvimento de Sistemas, com formação técnica em Desenvolvimento de Sistemas e Automação Industrial. Também concluí o programa AWS Academy Cloud Developing e atualmente me preparo para a certificação AWS Certified Developer – Associate.",
        "Fora do ambiente profissional, gosto de desenvolver projetos próprios envolvendo backend, inteligência artificial, IoT e automação. Um desses projetos já foi implantado em produção na AWS, proporcionando experiência prática com infraestrutura e deploy em nuvem.",
        "Busco continuar evoluindo como engenheiro de software, participando da construção de aplicações escaláveis, confiáveis e que resolvam problemas reais."
      ],
      en: [
        "I am a backend-focused software developer with experience in the financial sector, working on fraud prevention and detection systems.",
        "I currently work at 2RPnet, developing applications and services for high-volume banking platforms, mainly using .NET/C# and Python/FastAPI. I am interested in software architecture, distributed systems and cloud computing, and continue to deepen my knowledge in these areas.",
        "I hold a degree in Systems Analysis and Development, along with technical training in Systems Development and Industrial Automation. I also completed the AWS Academy Cloud Developing program and am currently preparing for the AWS Certified Developer – Associate certification.",
        "Outside of work, I enjoy building personal projects involving backend development, artificial intelligence, IoT and automation. One of these projects has already been deployed to production on AWS, providing hands-on experience with cloud infrastructure and deployment.",
        "I want to keep growing as a software engineer by helping build scalable, reliable applications that solve real problems."
      ]
    },
    facts: [
      { label: { pt: "Localização", en: "Location" }, value: { pt: "Sorocaba, SP", en: "Sorocaba, SP, Brazil" } },
      { label: { pt: "Foco", en: "Focus" }, value: { pt: "Backend · Engenharia de software", en: "Backend · Software engineering" } },
      { label: { pt: "Estudando", en: "Studying" }, value: "AWS Developer Associate" },
      { label: { pt: "Idiomas", en: "Languages" }, value: { pt: "Português nativo · Inglês avançado", en: "Portuguese (native) · English (advanced)" } }
    ],
    interests: {
      pt: ["Arquitetura de sistemas", "UI/UX", "Testes automatizados", "Containerização com Docker"],
      en: ["Systems architecture", "UI/UX", "Automated testing", "Docker containerization"]
    }
  },

  /* ------------------------------ Experiência ------------------------------ */
  experience: [
    {
      company: "2RPnet",
      roles: [
        { role: "Intern", period: { pt: "Mar 2025 — Dez 2025", en: "Mar 2025 — Dec 2025" } },
        { role: "Fullstack Developer I", period: { pt: "Dez 2025 — Out 2026", en: "Dec 2025 — Oct 2026" } },
        { role: "Full Stack Developer III", period: { pt: "Out 2026 — Presente", en: "Oct 2026 — Present" } }
      ],
      highlights: {
        pt: [
          "Funcionalidades fullstack de prevenção e detecção de fraude (.NET/C# e React/TypeScript) em plataforma bancária de alta volumetria, com SQL avançado, indexação e ajustes de performance.",
          "Microsserviços em Docker e Kubernetes: deploy, escalonamento e orquestração no dia a dia.",
          "Motores de regras e workflows configuráveis, schedulers e testes automatizados de backend para estabilidade e cobertura das entregas.",
          "Marketplace de APIs (arquitetura modular, segurança e escalabilidade) e dashboards de negócio em BigQuery e Looker."
        ],
        en: [
          "Fullstack fraud prevention and detection features (.NET/C# and React/TypeScript) on a high-volume banking platform, including advanced SQL, indexing and performance tuning.",
          "Microservices on Docker and Kubernetes: day-to-day deployment, scaling and orchestration.",
          "Configurable rules engines and workflows, schedulers and automated backend tests for stable, reliable deliveries.",
          "An API Marketplace (modular architecture, security and scalability) and business dashboards in BigQuery and Looker."
        ]
      },
      tags: ["C#", ".NET", "React", "TypeScript", "Kubernetes", "Docker", "SQL", "BigQuery", "Scrum"]
    }
  ],

  /* ------------------------------ Projetos ------------------------------ */
  layers: [
    { pt: "Edge / IoT", en: "Edge / IoT" },
    { pt: "Supervisório", en: "Supervisory" },
    { pt: "Gerencial", en: "Management" },
    { pt: "Estratégico", en: "Strategic" }
  ],

  projects: [
    {
      id: "gepeto", title: "Gepeto", category: "featured", priority: 1,
      kinds: ["web", "api", "ai"], hue: 265, glyph: "GP",
      problem: { pt: "Assistentes pessoais costumam esconder runtime, contexto, ferramentas e dados atrás de uma interface genérica. O Gepeto busca tornar essas partes explícitas e controláveis.", en: "Personal assistants often hide runtime, context, tools and data behind a generic interface. Gepeto aims to make those concerns explicit and controllable." },
      solution: { pt: "Workspace pessoal de agentes com interface própria, conversas persistentes, conectores, ferramentas MCP e uma fronteira local com o Codex app-server.", en: "Personal agent workspace with a product-owned UI, persistent conversations, connectors, MCP tools and a local boundary to Codex app-server." },
      architecture: { pt: "A interface React/TypeScript conversa com uma API FastAPI. O serviço de conversas mantém threads e eventos, persiste estado e traces em SQLite e se comunica com o Codex app-server por JSON-RPC/stdio.", en: "The React/TypeScript interface communicates with a FastAPI API. The conversation service manages threads and events, persists state and traces in SQLite, and talks to Codex app-server over JSON-RPC/stdio." },
      challenges: [
        { pt: "Lifecycle seguro do subprocesso Codex e correlação de mensagens JSON-RPC/stdio.", en: "Safe Codex subprocess lifecycle and JSON-RPC/stdio message correlation." },
        { pt: "Deduplicação e ordenação de eventos de streaming antes de persistir um estado terminal.", en: "Deduplicating and ordering streaming events before persisting a terminal state." },
        { pt: "Aplicação de escopo, política e aprovações para ferramentas MCP sem expor segredos nos traces.", en: "Applying scope, policy and approvals to MCP tools without exposing secrets in traces." }
      ],
      status: { pt: "Alpha / em desenvolvimento; o fluxo autenticado completo ainda está em validação.", en: "Alpha / in development; the fully authenticated runtime flow is still being validated." },
      badge: { pt: "Alpha", en: "Alpha" },
      summary: { pt: "Assistente pessoal com IA que integra conversas, agentes e ferramentas em uma interface própria.", en: "AI-powered personal assistant that brings conversations, agents and tools into a dedicated interface." },
      details: {
        pt: [
          "Interface de chat, overview, histórico, fontes de dados, agentes, logs e configurações.",
          "Gerenciamento de conversas, threads, turnos e eventos.",
          "Persistência local de conversas e traces em SQLite.",
          "Política de escopo e fluxos de aprovação para ferramentas MCP.",
          "Diagnostics e componentes de observabilidade."
        ],
        en: [
          "Chat, overview, history, data sources, agents, logs and settings interfaces.",
          "Conversation, thread, turn and event management.",
          "Local persistence for conversations and traces using SQLite.",
          "Scope policy and approval flows for MCP tools.",
          "Diagnostics and observability components."
        ]
      },
      stack: ["Python", "FastAPI", "React", "TypeScript", "SQLite", "Codex app-server", "MCP"],
      coverImage: { src: "assets/gepeto/gepeto-hero.png", alt: { pt: "Arte de apresentação do Gepeto com a interface do assistente em destaque", en: "Gepeto presentation artwork with the assistant interface in focus" } },
      coverImages: {
        pt: { src: "assets/gepeto/gepeto-cover-pt.png", alt: "Arte de apresentação do Gepeto em português com a interface do assistente em destaque" }
      },
      images: [
        { src: "assets/gepeto/home-desktop.png", alt: { pt: "Tela inicial de chat do Gepeto com sidebar, composer e painel System", en: "Gepeto chat home with sidebar, composer and System panel" } },
        { src: "assets/gepeto/overview-desktop.png", alt: { pt: "Overview do Gepeto com status do engine e cards de contexto", en: "Gepeto overview with engine status and context cards" } },
        { src: "assets/gepeto/data-sources-desktop.png", alt: { pt: "Tela de fontes de dados do Gepeto com catálogo de conectores", en: "Gepeto data sources screen with the connector catalog" } },
        { src: "assets/gepeto/settings-desktop.png", alt: { pt: "Configurações do Gepeto com preferências e status de conexão Codex", en: "Gepeto settings with preferences and Codex connection status" } }
      ], repo: "", demo: ""
    },
    {
      id: "fieldops", title: "FieldOps", category: "featured", priority: 2,
      kinds: ["api", "web"], hue: 215, glyph: "FO",
      problem: { pt: "Inspeções feitas por planilhas, mensagens e fotografias dispersas dificultam o planejamento, a rastreabilidade e a revisão.", en: "Inspections handled through spreadsheets, messages and scattered photos make planning, traceability and review harder." },
      solution: { pt: "Plataforma que conecta administração, execução em campo e revisão por meio de uma API central, com checklists versionados, evidências e sincronização local.", en: "Platform connecting administration, on-site execution and review through a central API, versioned checklists, evidence and local synchronization." },
      architecture: { pt: "API Java/Spring Boot com PostgreSQL; painel Angular e aplicativo Expo/React Native comunicam-se por API REST. O backend concentra autenticação, autorização, regras, persistência e auditoria.", en: "Java/Spring Boot API with PostgreSQL; the Angular dashboard and Expo/React Native app communicate through a REST API. The backend centralizes authentication, authorization, business rules, persistence and auditing." },
      challenges: [
        { pt: "Snapshots preservam a versão do checklist usada em cada inspeção.", en: "Snapshots preserve the checklist version used by each inspection." },
        { pt: "Cache e fila local mantêm operações pendentes em conectividade instável.", en: "Local cache and an operation queue keep pending work during unstable connectivity." },
        { pt: "Papéis e eventos de auditoria protegem o fluxo e a rastreabilidade.", en: "Roles and audit events protect the workflow and traceability." }
      ],
      status: { pt: "Em desenvolvimento; o núcleo possui testes automatizados relevantes, mas o mobile ainda não foi validado visualmente em dispositivo real.", en: "In development; the core has relevant automated tests, but the mobile app has not yet been visually validated on a real device." },
      badge: { pt: "Em desenvolvimento", en: "In development" },
      summary: { pt: "Plataforma de inspeções técnicas que integra planejamento, execução em campo e revisão, com API, painel web e aplicativo mobile.", en: "Field inspection platform connecting planning, on-site execution and review through an API, web dashboard and mobile app." },
      details: {
        pt: [
          "Gestão de usuários e permissões por papel.",
          "Clientes, locais e equipamentos, com identificação por QR Code.",
          "Planejamento e atribuição de inspeções.",
          "Modelos versionados de checklist e snapshots históricos.",
          "Respostas, evidências fotográficas e não conformidades.",
          "Revisão, aprovação, correção e trilha de auditoria.",
          "Cache e fila local para sincronização offline."
        ],
        en: [
          "User management and role-based permissions.",
          "Clients, sites and equipment, with QR Code identification.",
          "Inspection planning and assignment.",
          "Versioned checklist templates and historical snapshots.",
          "Answers, photographic evidence and non-conformities.",
          "Review, approval, correction and audit trail.",
          "Local cache and queue for offline synchronization."
        ]
      },
      stack: ["Java 21", "Spring Boot", "PostgreSQL", "Angular 22", "TypeScript", "React Native", "Expo", "Docker Compose", "Playwright"],
      stackGroups: [
        { title: { pt: "Backend", en: "Backend" }, items: ["Java 21", "Spring Boot", "Spring Security", "Spring Data JPA", "PostgreSQL", "Flyway"] },
        { title: { pt: "Web", en: "Web" }, items: ["Angular 22", "TypeScript"] },
        { title: { pt: "Mobile", en: "Mobile" }, items: ["React Native", "Expo"] },
        { title: { pt: "Infraestrutura e testes", en: "Infrastructure & testing" }, items: ["Docker Compose", "Playwright", "axe"] }
      ],
      coverImage: { src: "assets/fieldops/fieldops-cover.png", alt: { pt: "Arte de apresentação do FieldOps com o dashboard de gestão de inspeções em destaque", en: "FieldOps presentation artwork featuring the inspection management dashboard" } },
      coverImages: { en: { src: "assets/fieldops/fieldops-cover-en.png", alt: "FieldOps English presentation artwork featuring the inspection management dashboard" } },
      images: [
        { src: "assets/fieldops/dashboard-desktop.png", alt: { pt: "Dashboard do painel administrativo do FieldOps com indicadores de inspeções", en: "FieldOps administrative dashboard with inspection status indicators" } },
        { src: "assets/fieldops/inspections-list-desktop.png", alt: { pt: "Lista de inspeções do painel administrativo do FieldOps", en: "FieldOps administrative inspection list" } },
        { src: "assets/fieldops/inspection-detail-desktop.png", alt: { pt: "Detalhes de uma inspeção no painel administrativo do FieldOps", en: "FieldOps administrative inspection details" } },
        { src: "assets/fieldops/inspection-review-desktop.png", alt: { pt: "Tela de revisão de inspeção no painel administrativo do FieldOps", en: "FieldOps administrative inspection review screen" } }
      ], repo: "", demo: ""
    },
    {
      id: "labcontrol", title: "LabControl 4.0", year: "2025", category: "featured", priority: 4,
      kinds: ["web", "cloud", "iot"], hue: 160, glyph: "LC", cover: "layers",
      problem: { pt: "Acompanhar informações de máquinas, consumo energético e ocupação em um contexto industrial distribuído.", en: "Tracking machine, energy and occupancy information in a distributed industrial context." },
      solution: { pt: "Plataforma em camadas para monitoramento industrial, com autenticação por perfis e integração com infraestrutura AWS.", en: "Layered industrial monitoring platform with role-based authentication and AWS infrastructure integration." },
      status: { pt: "Implantação em AWS registrada no projeto.", en: "AWS deployment documented as part of the project." },
      badge: { pt: "AWS", en: "AWS" },
      summary: {
        pt: "Plataforma em camadas para monitoramento industrial de máquinas, energia e ocupação de ambientes.",
        en: "Layered industrial monitoring platform for machines, energy use and room occupancy."
      },
      details: {
        pt: [
          "Arquitetura em camadas: Edge/IoT, Supervisório, Gerencial e Estratégico.",
          "Monitoramento em tempo real de máquinas, consumo energético e ocupação de ambientes.",
          "Autenticação JWT com controle de perfis.",
          "Infraestrutura AWS e pipeline de deploy documentados no projeto."
        ],
        en: [
          "Layered architecture: Edge/IoT, Supervisory, Management and Strategic.",
          "Real-time monitoring of machines, energy consumption and room occupancy.",
          "JWT authentication with role-based access.",
          "AWS infrastructure and a deployment pipeline documented as part of the project."
        ]
      },
      stack: ["ASP.NET", "PostgreSQL", "Next.js", "IoT", "AWS", "JWT"],
      images: [], repo: "", demo: ""
    },
    {
      id: "alure", title: "Alure E-commerce", category: "other",
      kinds: ["web"], hue: 330, glyph: "AL",
      problem: { pt: "Centralizar catálogo, avaliações, autenticação e operações administrativas de uma loja de roupas.", en: "Centralizing catalog, reviews, authentication and administrative operations for a clothing store." },
      solution: { pt: "E-commerce com catálogo, avaliações, painel administrativo e autenticação integrada entre frontend, backend e banco de dados.", en: "E-commerce application with catalog, reviews, admin panel and authentication integrated across frontend, backend and database." },
      status: { pt: "Projeto demonstrado por capturas de tela da aplicação.", en: "Project demonstrated through application screenshots." },
      badge: { pt: "E-commerce", en: "E-commerce" },
      summary: {
        pt: "Gestão completa de uma loja de roupas com e-commerce: catálogo, avaliações, painel administrativo e login seguro.",
        en: "Complete management of a clothing store with e-commerce: catalog, reviews, admin panel and secure login."
      },
      details: {
        pt: [
          "Catálogo com filtros por categoria, tamanho, cor e preço, ordenação e paginação otimizada.",
          "Detalhe do produto com galeria com zoom, variações, cálculo de frete em tempo real e produtos relacionados.",
          "Avaliações de 1 a 5 estrelas com fotos, moderação prévia e média calculada automaticamente.",
          "Painel admin com estoque em tempo real, upload de várias imagens, variações e preços promocionais.",
          "Login com JWT (access e refresh tokens), recuperação de senha, proteção contra força bruta e aviso por e-mail a cada acesso."
        ],
        en: [
          "Catalog with category, size, color and price filters, sorting and optimized pagination.",
          "Product page with zoomable gallery, variants, real-time shipping calculation and related products.",
          "1–5 star reviews with customer photos, prior moderation and automatically calculated averages.",
          "Admin panel with real-time stock, multiple image uploads, variants and promotional prices.",
          "JWT login (access and refresh tokens), password recovery, brute-force protection and an email alert on every sign-in."
        ]
      },
      stack: ["C#", "ASP.NET", "PostgreSQL", "Next.js", "React", "TypeScript", "Docker"],
      coverImage: { src: "assets/alure/alure-cover.png", alt: { pt: "Arte de apresentação do Alure E-commerce com a vitrine da loja em destaque", en: "Alure E-commerce presentation artwork featuring the storefront" } },
      coverImages: { en: { src: "assets/alure/alure-cover-en.png", alt: "Alure E-commerce English presentation artwork featuring the storefront" } },
      images: [
        { src: "assets/alure/alure_home.webp", alt: { pt: "Página inicial da loja Alure", en: "Alure store home page" } },
        { src: "assets/alure/alure_produtos.webp", alt: { pt: "Listagem de produtos com filtros", en: "Product listing with filters" } },
        { src: "assets/alure/alure_produto_detalhes.webp", alt: { pt: "Detalhes de um produto", en: "Product details" } },
        { src: "assets/alure/alure_avaliacao.webp", alt: { pt: "Avaliações e notas de clientes", en: "Customer reviews and ratings" } },
        { src: "assets/alure/cadastro_produtos.webp", alt: { pt: "Cadastro de produtos no painel admin", en: "Product registration in the admin panel" } },
        { src: "assets/alure/alure_login.webp", alt: { pt: "Tela de login", en: "Login screen" } },
        { src: "assets/alure/alure_cadastro.webp", alt: { pt: "Tela de cadastro de usuário", en: "User sign-up screen" } }
      ],
      repo: "", demo: ""
    },
    {
      id: "cda", title: "Sistema de Controle de Acesso (CDA)", category: "other",
      kinds: ["web"], hue: 215, glyph: "CDA",
      problem: { pt: "Organizar o controle de entrada e saída de alunos e turmas com diferentes perfis de acesso.", en: "Organizing student and class entry and exit control across different access profiles." },
      solution: { pt: "Sistema administrativo com dashboard, cadastros, importação em lote, autenticação e autorização por perfil.", en: "Administrative system with dashboard, registrations, batch import, authentication and role-based authorization." },
      status: { pt: "Projeto demonstrado por capturas de tela da aplicação.", en: "Project demonstrated through application screenshots." },
      badge: { pt: "Controle de acesso", en: "Access control" },
      summary: {
        pt: "Sistema para escolas e faculdades que controla a entrada e a saída de alunos e turmas, com painéis por perfil.",
        en: "System for schools and colleges that controls student and class entry and exit, with role-based dashboards."
      },
      details: {
        pt: [
          "Dashboard interativo com visão geral dos acessos e estatísticas em tempo real.",
          "Cadastro de alunos em lote, importação via CSV e atribuição automática de perfis.",
          "Integração com o sistema acadêmico para sincronização automática de dados.",
          "Autenticação JWT, controle por perfil (administrador, professor e funcionário) e gestão de sessões.",
          "Interface responsiva."
        ],
        en: [
          "Interactive dashboard with an access overview and real-time statistics.",
          "Batch student registration, CSV import and automatic profile assignment.",
          "Integration with the academic system for automatic data sync.",
          "JWT authentication, role-based access (administrator, teacher and staff) and session management.",
          "Responsive interface."
        ]
      },
      stack: ["C#", "ASP.NET", "Next.js", "React", "TypeScript", "Supabase", "JWT"],
      images: [
        { src: "assets/cda/home_cda.webp", alt: { pt: "Dashboard do sistema CDA", en: "CDA dashboard" } },
        { src: "assets/cda/cadastro_cda.webp", alt: { pt: "Tela de cadastro de alunos", en: "Student registration screen" } },
        { src: "assets/cda/login_cda.webp", alt: { pt: "Tela de login", en: "Login screen" } }
      ],
      repo: "", demo: ""
    },
    {
      id: "invoice-api", title: "API de Extração de Notas Fiscais", category: "featured", priority: 3,
      kinds: ["api", "ai"], hue: 45, glyph: "API",
      problem: { pt: "Transformar dados de notas fiscais em PDF ou imagem em informações estruturadas e consultáveis.", en: "Turning invoice data from PDFs or images into structured, queryable information." },
      solution: { pt: "API REST com upload, validação, extração assistida por IA, retorno estruturado e consultas filtradas.", en: "REST API with upload, validation, AI-assisted extraction, structured responses and filtered queries." },
      status: { pt: "Projeto demonstrado por documentação da API e capturas de tela.", en: "Project demonstrated through API documentation and screenshots." },
      badge: { pt: "API + IA", en: "API + AI" },
      summary: {
        pt: "API que extrai dados estruturados de notas fiscais em PDF ou imagem para consulta.",
        en: "API that extracts structured data from invoice PDFs or images for querying."
      },
      details: {
        pt: [
          "Endpoint POST de upload que valida formato e tamanho e devolve JSON com os dados fiscais e o nível de confiança da extração.",
          "Endpoint GET com filtros por data, valor, emissor e tipo de documento, paginação e ordenação.",
          "Gemini API para OCR e extração, com validação de campos e sugestão de revisão manual quando a confiança é baixa.",
          "Docker Compose com contêineres separados para API, banco de dados e fila de processamento."
        ],
        en: [
          "POST upload endpoint that validates format and size and returns JSON with the fiscal data and extraction confidence.",
          "GET endpoint with filters by date, amount, issuer and document type, plus pagination and sorting.",
          "Gemini API for OCR and extraction, with field validation and manual-review suggestions when confidence is low.",
          "Docker Compose with separate containers for the API, database and processing queue."
        ]
      },
      stack: ["Python", "FastAPI", "Gemini API", "PostgreSQL", "Docker"],
      coverImage: { src: "assets/api/invoice-api-cover.png", alt: { pt: "Arte de apresentação da API de Extração de Notas Fiscais com a documentação FastAPI em destaque", en: "Invoice Extraction API presentation artwork featuring the FastAPI documentation" } },
      coverImages: { en: { src: "assets/api/invoice-api-cover-en.png", alt: "Invoice Extraction API English presentation artwork featuring the FastAPI documentation" } },
      images: [
        { src: "assets/api/methodPostv2.webp", alt: { pt: "Visão geral da API de extração", en: "Extraction API overview" } },
        { src: "assets/api/methodPost.webp", alt: { pt: "Endpoint POST de upload de nota fiscal", en: "Invoice upload POST endpoint" } },
        { src: "assets/api/methodGet.webp", alt: { pt: "Endpoint GET de consulta de notas", en: "Invoice query GET endpoint" } }
      ],
      repo: "", demo: ""
    },
    {
      id: "bcti", title: "BCTI", year: "2025", category: "other",
      kinds: ["web", "ai"], hue: 265, glyph: "BCTI",
      problem: { pt: "Permitir consulta a uma base de conhecimento técnico sem perder a referência aos artigos utilizados.", en: "Enabling technical knowledge-base queries while preserving references to the articles used." },
      solution: { pt: "Sistema web com chat baseado em IA que responde a partir de artigos cadastrados e exibe as fontes consultadas.", en: "Web system with an AI-based chat that answers from registered articles and displays the consulted sources." },
      status: { pt: "MVP documentado no portfólio.", en: "MVP documented in the portfolio." },
      badge: { pt: "IA", en: "AI" },
      summary: {
        pt: "Banco de Conhecimentos Técnicos Inteligente: chat com IA que responde com base em artigos cadastrados e mostra as fontes consultadas.",
        en: "Intelligent Technical Knowledge Base: an AI chat that answers from registered articles and shows the sources it used."
      },
      details: {
        pt: [
          "Chat integrado a um modelo de IA, com respostas baseadas nos artigos cadastrados.",
          "Exibe as fontes consultadas em cada resposta.",
          "MVP entregue em 3 semanas."
        ],
        en: [
          "Chat integrated with an AI model, answering from the registered articles.",
          "Shows the sources consulted for each answer.",
          "MVP delivered in 3 weeks."
        ]
      },
      stack: [".NET", "Next.js", "PostgreSQL", "IA"],
      images: [], repo: "", demo: ""
    },
    {
      id: "wrapped", title: "Wrapped de Temporada", year: "2025", category: "other",
      kinds: ["web", "cloud"], hue: 350, glyph: "W",
      problem: { pt: "Apresentar estatísticas personalizadas de uma temporada esportiva em uma experiência mobile.", en: "Presenting personalized season statistics in a mobile experience." },
      solution: { pt: "Aplicativo mobile com backend Java, PostgreSQL em Amazon RDS e infraestrutura AWS documentada.", en: "Mobile application with a Java backend, PostgreSQL on Amazon RDS and documented AWS infrastructure." },
      status: { pt: "Projeto de hackathon documentado no portfólio.", en: "Hackathon project documented in the portfolio." },
      badge: { pt: "Hackathon", en: "Hackathon" },
      summary: {
        pt: "App mobile de estatísticas personalizadas por temporada, criado no hackathon Bundesliga × AWS.",
        en: "Mobile app with personalized season stats, built at the Bundesliga × AWS hackathon."
      },
      details: {
        pt: [
          "App mobile com estatísticas personalizadas por temporada.",
          "Backend em Java com banco PostgreSQL hospedado no Amazon RDS.",
          "Implantado em infraestrutura AWS."
        ],
        en: [
          "Mobile app with personalized stats per season.",
          "Java backend with a PostgreSQL database hosted on Amazon RDS.",
          "Deployed on AWS infrastructure."
        ]
      },
      stack: ["React Native", "Java", "PostgreSQL", "AWS RDS"],
      images: [], repo: "", demo: ""
    },
    {
      id: "encomendas", title: "Recebimento Automatizado de Encomendas", year: "2024", category: "other",
      kinds: ["iot"], hue: 25, glyph: "RPi",
      problem: { pt: "Automatizar a identificação e o recebimento de encomendas sem depender de entrega manual ao proprietário.", en: "Automating parcel identification and receipt without relying on manual handoff to the owner." },
      solution: { pt: "Compartimento automatizado com Raspberry Pi, identificação por código, QR Code, validação e notificação.", en: "Automated compartment using Raspberry Pi, code identification, QR Code, validation and notification." },
      status: { pt: "Projeto acadêmico de hardware e software.", en: "Academic hardware and software project." },
      badge: { pt: "Hardware + Software", en: "Hardware + Software" },
      summary: {
        pt: "TCC de Automação Industrial: compartimento automatizado que identifica o código da encomenda, valida a entrega e avisa o dono.",
        en: "Industrial Automation capstone: an automated compartment that identifies the parcel code, validates delivery and notifies the owner."
      },
      details: {
        pt: [
          "Identificação por código, geração de QR Code, validação de entrega e notificação ao proprietário.",
          "Projetado, construído (corte a laser) e programado de ponta a ponta."
        ],
        en: [
          "Code identification, QR Code generation, delivery validation and owner notification.",
          "Designed, built (laser cut) and programmed end to end."
        ]
      },
      stack: ["Raspberry Pi", "IoT", "QR Code"],
      images: [], repo: "", demo: ""
    }
  ],

  /* ------------------------------ Skills ------------------------------ */
  /* core: true = usado no dia a dia (destaque visual) */
  skills: [
    { title: { pt: "Linguagens", en: "Languages" },
      items: [{ n: "C#", core: true }, { n: "TypeScript", core: true }, { n: "JavaScript" }, { n: "Python" }, { n: "Java" }] },
    { title: { pt: "Backend", en: "Backend" },
      items: [{ n: "ASP.NET Core", core: true }, { n: "Microsserviços", core: true }, { n: "APIs REST" }, { n: "FastAPI" }, { n: "Node.js" }, { n: "Spring Boot" }] },
    { title: { pt: "Frontend", en: "Frontend" },
      items: [{ n: "React", core: true }, { n: "Next.js" }, { n: "React Native" }] },
    { title: { pt: "DevOps & Cloud", en: "DevOps & Cloud" },
      items: [{ n: "Docker", core: true }, { n: "Kubernetes", core: true }, { n: "CI/CD" }, { n: "AWS" }, { n: "GCP" }] },
    { title: { pt: "Dados", en: "Data" },
      items: [{ n: "SQL / PostgreSQL", core: true }, { n: "MySQL" }, { n: "MongoDB" }, { n: "BigQuery" }, { n: "Looker" }] },
    { title: { pt: "Qualidade & Processo", en: "Quality & Process" },
      items: [{ n: { pt: "Testes automatizados", en: "Automated testing" }, core: true }, { n: "Code Review" }, { n: "Git / GitHub" }, { n: "GitFlow" }, { n: "Scrum" }] }
  ],

  /* ------------------------------ Formação ------------------------------ */
  education: [
    { title: { pt: "Tecnólogo em Análise e Desenvolvimento de Sistemas", en: "Associate degree in Systems Analysis and Development" },
      place: "Universidade SENAI",
      period: { pt: "2025 – 2026 (4º período)", en: "2025 – 2026 (4th term)" } },
    { title: { pt: "Técnico em Desenvolvimento de Sistemas", en: "Technical diploma in Systems Development" },
      place: "SENAI SP", period: "2023 – 2024" },
    { title: { pt: "Técnico em Automação Industrial", en: "Technical diploma in Industrial Automation" },
      place: { pt: "IFSP – Campus Salto", en: "IFSP – Salto Campus" }, period: "2023 – 2024" }
  ],

  certs: [
    { title: "AWS Academy Graduate – Cloud Developing",
      meta: { pt: "2026 · Developer Associate em preparação", en: "2026 · Developer Associate in progress" }, url: "" },
    { title: "Google Cloud Computing Foundations",
      meta: "2025", url: "" },
    { title: "Oracle Java Foundations Junior Associate",
      meta: "2024", url: "" },
    { title: { pt: "GCP Skill Badges", en: "GCP Skill Badges" },
      meta: { pt: "Rede, Load Balancing, BigQuery ML, Ambiente de Dev · 2025", en: "Networking, Load Balancing, BigQuery ML, Dev Environment · 2025" }, url: "" },
    { title: "Atlassian Agile Project Management · IBM Data Science Foundations",
      meta: { pt: "Certificados", en: "Certificates" }, url: "" }
  ]
};

export default PORTFOLIO;
