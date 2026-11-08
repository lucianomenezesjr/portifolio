# Conteúdo para portfólio — português

## A. Descrição curta — até 180 caracteres

Workspace pessoal de agentes com interface própria, conversas persistentes, conectores, ferramentas MCP, approvals e runtime Codex.

## B. Apresentação resumida — 80–120 palavras

Gepeto é um workspace pessoal de agentes que separa a experiência do produto do runtime de inteligência. A interface React/TypeScript oferece chat, overview, histórico, fontes de dados, agentes, logs e configurações. No backend, FastAPI coordena conversas e eventos, enquanto um adapter local conversa com o Codex app-server por JSON-RPC/stdio. Conversas, threads e traces usam persistência local; conectores e ferramentas MCP são filtrados por escopo e podem exigir aprovação. O projeto também mantém um provedor local opcional e uma aplicação desktop baseada em Tauri. O estado atual é alpha: a base de contratos e testes está implementada, mas o fluxo autenticado completo ainda está em validação.

## C. Estudo de caso técnico

### Visão geral

Gepeto Project é a camada de produto do ecossistema OpenJarvis para uso pessoal de agentes.

### Problema

Assistentes pessoais tendem a esconder o runtime, os dados e as ferramentas atrás de uma interface genérica. O projeto busca dar ao usuário controle local sobre interface, contexto, conectores e observabilidade sem reimplementar o loop de agente.

### Objetivo

Oferecer um workspace que possa iniciar uma conversa Codex sem exigir um modelo local, mantendo uma alternativa local explícita para privacidade/offline.

### Solução

Uma UI React fala com uma API FastAPI. O serviço de conversas mantém o vínculo entre conversas Gepeto e threads Codex, transmite eventos por WebSocket e persiste estado e traces em SQLite. O bridge MCP aplica política e approvals antes de expor tools.

### Arquitetura

Browser/Tauri → FastAPI → `CodexConversationService` → `CodexAppServerClient` → processo Codex app-server → modelo/ferramentas. Stores locais registram conversas, eventos e traces redacted.

### Tecnologias

Python, FastAPI, Uvicorn, React, TypeScript, Vite, Zustand, WebSocket, SQLite, JSON-RPC, MCP, OAuth/PKCE, Tauri/Rust e infraestrutura Docker/systemd/Windows.

### Funcionalidades implementadas

Chat shell, overview, settings, fontes/conectores, agentes, logs, persistência de threads, streaming/event envelopes, cancelamento, approvals, diagnostics, MCP policy e traces possuem código local. Contratos principais têm testes automatizados.

### Desafios técnicos

Lifecycle seguro de subprocesso, correlação de eventos, deduplicação, escopo owner/project, redaction, OAuth sem expor tokens e compatibilidade entre identidade Gepeto e identificadores OpenJarvis.

### Estado atual

Alpha e em revisão para release. Nesta auditoria, build e testes passaram; a aplicação carregou localmente, mas não houve login ou conversa Codex real.

### Próximos passos

Fechar registro OAuth/client ID, validar transporte MCP nativo, executar smoke test autenticado, melhorar replay/cancelamento, corrigir health/models no modo Codex-only, fazer build Tauri e evoluir o layout mobile.

## D. Texto para LinkedIn

Estou documentando o Gepeto, um projeto autoral de workspace pessoal de agentes construído sobre o ecossistema OpenJarvis.

A arquitetura separa a interface e os dados do produto do loop de agente: React/TypeScript e FastAPI cuidam da experiência, conversas, conectores, approvals e observabilidade, enquanto o Codex app-server é integrado como runtime por uma fronteira local de eventos e threads. O projeto também mantém MCP, persistência SQLite, traces redacted, uma opção de inferência local e uma aplicação desktop com Tauri.

Na auditoria atual, os testes e o build passaram e a interface real foi capturada. O fluxo autenticado completo ainda está em validação; por isso, estou tratando o projeto como alpha e usando o release gate como guia para os próximos passos.
