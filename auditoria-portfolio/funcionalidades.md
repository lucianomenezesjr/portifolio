# Funcionalidades e estado

| Funcionalidade | Evidência | Estado nesta auditoria | Limitação |
|---|---|---|---|
| Chat e shell Warm Tech | `frontend/src/App.tsx`, `pages/ChatPage.tsx`, componentes `Chat/` | Implementada e validada visualmente | Sem conversa real Codex autenticada |
| Conversas locais | `frontend/src/lib/store.ts`, `codex_conversations.py` | Implementada; testes passam | UI local e store Codex têm fronteiras distintas |
| Threads/turns Codex | `runtime/codex_app_server.py`, `codex_conversations.py` | Implementada e testada com fake runtime | Não exercitada contra app-server autenticado |
| Streaming/eventos | `server/codex_event_routes.py`, `frontend/src/lib/codex-events.ts` | Implementada; testes de reducer passam | Smoke visual autenticado pendente |
| Interrupção/cancelamento | `turn/interrupt`, `POST .../cancel` | Implementada em código/testes | Cancelamento remoto completo é pendência GEP-002.5 |
| Aprovações | WebSocket `approval_decision`, `ApprovalBell`, `ToolCallCard`, `codex_mcp_bridge.py` | Parcialmente implementada/testada | End-to-end com Codex real não validado |
| Autenticação ChatGPT | `chatgpt_auth.py`, `codex_auth_routes.py`, Settings | Implementada em partes; testes passam | Client ID/registro e integração real ainda em review |
| Diagnóstico/runtime identity | `codex_diagnostics_routes.py`, Settings | Implementada e validada por endpoint | Modelo exato pode ser indisponível |
| MCP | `codex_mcp_bridge.py`, providers/config | Parcialmente implementada | Transporte MCP nativo do Codex é pendência explícita |
| Conectores | `connectors_router.py`, `connectors/`, `DataSourcesPage.tsx` | Catálogo e rotas implementados; endpoint list validado | OAuth/contas reais não foram usados |
| Fontes conectadas | Tela Data Sources; Hacker News apareceu conectado no ambiente temporário | Visualmente validada | Estado depende de ambiente/configuração; não foi sincronizado |
| Histórico | Sidebar/store/localStorage | Implementada | Nenhuma conversa demonstrativa segura foi criada |
| Settings | `SettingsPage.tsx` | Implementada e capturada | Mostra Codex desconectado no teste |
| Observabilidade | `traces/`, `GepetoTraceStore`, diagnostics, Logs | Implementada em código/testes; tela carregou | Instrumentação completa de tools/approvals ainda pendente |
| Agentes gerenciados | `AgentsPage.tsx`, `agent_manager_routes.py` | Implementada no monorepo | Não é o mesmo que conversa Codex validada |
| Desktop | `frontend/src-tauri`, `desktop/src-tauri` | Código/configuração presente | Build nativo não foi executado nesta auditoria |
| Mobile responsivo | captura 390×844 | Parcial: carrega, mas sidebar domina a viewport | Não há evidência de UX mobile final |
| Deploy | Docker, systemd, Windows, Tauri | Planejado/implementado como infraestrutura | Release gate externo permanece no-go |

## Classificação resumida

**Implementada e validada:** contratos Codex com fake runtime, persistência e traces selecionados, rotas e diagnostics, frontend build/tests, navegação e telas principais.

**Implementada, mas não testada nesta auditoria:** OAuth real, app-server real, connectors OAuth, desktop nativo, tools destrutivas com approval real.

**Parcial/review:** streaming visual integrado ao chat autenticado, MCP via transporte nativo do Codex, retenção/replay longo de eventos, cancelamento remoto completo, release gate.

**Planejada ou não confirmada:** produção, distribuição externa, disponibilidade de modelos/conta ChatGPT e qualquer conectividade pessoal do usuário.
