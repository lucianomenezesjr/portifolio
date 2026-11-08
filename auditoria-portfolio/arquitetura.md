# Arquitetura real identificada

## Visão geral

```mermaid
flowchart LR
  U[Usuário] --> UI[React + TypeScript + Vite\nChat / Overview / Settings]
  UI -->|HTTP REST| API[FastAPI\nAPI geral + rotas Gepeto]
  UI -->|WebSocket| EVT[/v1/codex/.../events]
  API --> CS[CodexConversationService]
  CS --> STORE[(SQLite\nConversationStore)]
  CS --> TRACE[(SQLite\nGepetoTraceStore)]
  CS --> AUTH[ChatGPTTokenStore\nrefresh / logout]
  CS --> ADAPTER[CodexAppServerClient]
  ADAPTER -->|stdio JSONL / JSON-RPC| CODEX[codex app-server]
  CODEX --> MODEL[ChatGPT / Responses runtime]
  CODEX --> MCP[CodexMCPBridge]
  MCP --> POLICY[GepetoToolPolicy\nproject/session scope]
  MCP --> TOOLS[MCP providers / connectors]
  EVT --> UI
  API --> CONNECT[Connector router\nOAuth / local / token / filesystem]
  CONNECT --> DATA[(Indexed connector data)]
```

## Fluxo de uma mensagem

1. A UI cria uma conversa por `POST /v1/codex/conversations`, identificando `conversation_id` e `project_id` (`codex_conversation_routes.py:49-69`).
2. O serviço cria ou retoma uma thread Codex sob demanda. O `ConversationStore` conserva a relação de escopo local com o `thread_id`.
3. Um turno é enviado por `POST /v1/codex/conversations/{conversation_id}/turns` (`codex_conversation_routes.py:71-96`).
4. O cliente stdio faz `initialize`/`initialized`, `thread/start` ou `thread/resume` e `turn/start`; eventos não solicitados são bufferizados e associados ao turno.
5. O serviço publica envelopes com sequência/event ID; o WebSocket aceita eventos e decisões de approval (`codex_event_routes.py:20-89`).
6. A UI reduz/deduplica eventos, acumula deltas e distingue conclusão, falha, interrupção e approval. A persistência ocorre apenas após estado terminal válido, conforme testes e backlog GEP-002.4/GEP-004.1.

## Autenticação e segurança

`create_app` instancia token store, conversation store e trace store; quando não há token, a criação do cliente falha com “ChatGPT sign-in is required” (`app.py:53-74`). Tokens são mantidos fora do repositório; o ambiente filho recebe apenas o access token e o mínimo de runtime. O WebSocket autentica o handshake porque o middleware HTTP não cobre upgrade (`app.py:361-364`, `codex_event_routes.py:22-33`).

## Persistência

O caminho Gepeto usa SQLite para conversas Codex e traces. A especificação exige owner/project scope, thread ID, deduplicação e redaction. A implementação e os testes cobrem store, replay, sequência e estado, mas a própria ficha GEP-004.1 deixa retenção e replay de cursor como pendências.

## Limites arquiteturais

O runtime Codex não é reimplementado pelo Gepeto. A aplicação é uma camada de produto e protocolo ao redor do app-server. O pacote ainda conserva muitas rotas e engines locais do OpenJarvis; isso cria uma distinção importante entre “capacidade disponível no monorepo” e “fluxo principal do Gepeto”.
