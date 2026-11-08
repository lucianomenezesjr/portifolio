# Resumo executivo

## O que é

Gepeto Project é um workspace pessoal de agentes com interface própria, construído sobre o ecossistema OpenJarvis. A proposta é separar a experiência e os dados do produto do loop de agente: Gepeto controla UI, conversas locais, escopo de projeto, MCP, approvals e observabilidade; Codex app-server executa o ciclo de agente, modelo e ferramentas.

## O que foi confirmado

- Frontend React/TypeScript/Vite com shell Warm Tech e rotas para chat, overview, dashboard, fontes, agentes, logs, settings e onboarding (`frontend/src/App.tsx:1-180`).
- Backend FastAPI com rotas gerais, conectores, autenticação Codex, conversas Codex, WebSocket de eventos e diagnostics (`src/openjarvis/server/app.py:531-543`).
- Adaptador Codex stdio com handshake JSONL/JSON-RPC, threads, turns, interrupção, eventos e lifecycle (`src/openjarvis/runtime/codex_app_server.py`).
- Persistência SQLite para associação conversa/thread e traces Gepeto (`src/openjarvis/server/app.py:53-74`).
- MCP bridge com política, escopo e approvals para tools de escrita (`src/openjarvis/runtime/codex_mcp_bridge.py`).
- Testes automatizados selecionados e build frontend passaram.

## O que não foi confirmado como fluxo completo

Não houve login, conversa real, streaming Codex autenticado, aprovação end-to-end ou integração MCP com app-server real. O backend iniciou em modo Codex sem credenciais: `/v1/codex/auth/status` retornou `unauthenticated`; diagnostics reportou `runtime_started=false`, `runtime_running=false` e `model=null`. O release gate documenta a decisão `no-go` (`docs/gepeto/release-gate.md`).

## Leitura para portfólio

Apresente Gepeto como um produto/workspace de agentes em desenvolvimento avançado, com uma camada visual própria e uma fronteira de runtime bem definida. Evite dizer que está em produção ou que o chat Codex foi validado com conta real. A melhor narrativa é: “interface e camada de produto sobre um runtime de agentes, com persistência, conectores, MCP, approvals e observabilidade em implementação/teste”.
