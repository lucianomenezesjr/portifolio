# Auditoria do Gepeto Project

Auditoria técnica, funcional e visual realizada em 2026-11-08 sobre o estado presente de `/home/lucianojr/Documents/gepeto-project/OpenJarvis`.

## Escopo e método

- Leitura da estrutura, README, `pyproject.toml`, `package.json`, configuração, especificação, backlog, módulos de runtime, API, frontend, desktop e testes.
- Cruzamento entre documentação e implementação; backlog não foi tratado como prova de funcionalidade.
- Execução segura em diretório temporário: backend Codex em `127.0.0.1:18081`, frontend Vite em `127.0.0.1:5175`, sem credenciais e sem OAuth.
- Playwright/Chromium local foi usado apenas contra os servidores locais para gerar as capturas em `screenshots/`.
- Validação: 32 testes Python selecionados passaram; 124 testes frontend passaram; `npm run build` passou.

## Legenda de evidência

- **Código**: há implementação local identificável.
- **Teste**: há teste automatizado executado nesta auditoria.
- **Execução**: a aplicação/endpoints carregaram ou responderam nesta auditoria.
- **Documentado**: descrito em especificação/backlog, mas não necessariamente exercitado.
- **Planejado/review**: ainda há pendência explícita no backlog ou release gate.

## Principais conclusões

Gepeto é a camada de produto e interface de um workspace pessoal de agentes; OpenJarvis é o pacote/runtime legado que fornece grande parte das primitivas. O caminho de produto prioriza Codex app-server local via stdio, com conversas persistentes, eventos, approvals, MCP e observabilidade sob controle do Gepeto. A execução local mostrou a casca e as rotas funcionando sem credenciais, mas não validou uma conversa real: o estado Codex ficou `unauthenticated`, o app-server não foi iniciado e não há modelo local necessário/selecionado nesse modo.

O repositório é um alpha amplo e tecnicamente organizado, com boa base de contratos e testes, mas o próprio release gate permanece `no-go` para distribuição externa por pendências em OAuth/client ID, transporte MCP nativo do Codex e smoke test autenticado.

## Entregáveis

- [Resumo executivo](resumo-executivo.md)
- [Arquitetura](arquitetura.md)
- [Funcionalidades](funcionalidades.md)
- [Tecnologias](tecnologias.md)
- [Desafios técnicos](desafios-tecnicos.md)
- [Avaliação técnica](avaliacao-tecnica.md)
- [Conteúdo de portfólio — PT](conteudo-portfolio-pt.md)
- [Portfolio content — EN](conteudo-portfolio-en.md)
- [Post LinkedIn — PT](post-linkedin-pt.md)
- [Inventário de imagens](inventario-imagens.md)

## Nota sobre o estado do repositório

A auditoria encontrou uma árvore de trabalho já modificada, principalmente na branch `feat/gepeto-warm-tech-shell`, com mudanças pré-existentes em documentação, frontend, runtime e testes. Nenhuma alteração de código, configuração de produção, migration ou commit foi realizado para esta auditoria. O build frontend gerou apenas artefatos estáticos derivados no diretório configurado pelo Vite.
