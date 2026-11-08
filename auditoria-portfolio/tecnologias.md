# Tecnologias confirmadas

| Tecnologia | Onde | Papel | Evidência | Estado |
|---|---|---|---|---|
| Python 3.10–3.13 | `pyproject.toml` | Backend/runtime/CLI | `requires-python >=3.10,<3.14` | Confirmada; ambiente usado: `.venv` Python 3.13 |
| FastAPI + Uvicorn | `pyproject.toml` extra `server`, `src/openjarvis/server` | API REST/WebSocket | `create_app`, routers, OpenAPI | Confirmada e executada |
| asyncio / threads / queues | runtime/server | I/O assíncrono, workers e eventos | `codex_app_server.py`, `codex_event_routes.py` | Confirmada |
| JSONL / JSON-RPC | `codex_app_server.py` | Protocolo com app-server | handshake e requests correlacionados | Confirmada/testada com fake |
| SQLite | conversation/trace stores, config | persistência local | `ConversationStore`, `GepetoTraceStore` | Confirmada/testada |
| React + TypeScript | `frontend/src` | UI | `App.tsx`, páginas e componentes | Confirmada |
| Vite | `frontend/vite.config.ts`, scripts | dev server/build/proxy | `npm run dev/build` | Confirmada; build passou |
| Zustand | `frontend/src/lib/store.ts` | estado e persistência local | `create(...)` | Confirmada |
| WebSocket | backend + frontend Codex events | deltas, approvals e lifecycle | `/v1/codex/.../events` | Confirmada em código/testes |
| Tauri 2 / Rust | `frontend/src-tauri`, `desktop/src-tauri` | desktop/webview, sidecars e lifecycle | `tauri.conf.json`, `src/lib.rs` | Código confirmado; não empacotado |
| MCP | `src/openjarvis/mcp`, `codex_mcp_bridge.py` | tools e conectores | policy/provider/bridge | Parcial; transporte final pendente |
| Codex app-server | runtime/docs | runtime primário | `codex app-server --listen stdio://` | Adapter confirmado; sessão real não validada |
| OAuth/PKCE | `chatgpt_auth.py`, connector OAuth | login e tokens | state, nonce, PKCE, token store | Parcial/review |
| Recharts/Lucide/Manrope | frontend | gráficos, ícones, tipografia | imports/package | Confirmadas na UI |
| Docker/systemd/Windows deploy | `deploy/` | operação/distribuição | compose, service, scripts | Presente; não validado em deploy |

## Integrações que não devem ser superafirmadas

`openai`, `anthropic`, Google, Slack, Spotify, Strava e dezenas de conectores aparecem como dependências/módulos do OpenJarvis. Isso comprova suporte de código ou catálogo, não que cada integração esteja conectada no ambiente do Gepeto. O endpoint local listou 27 conectores, com Hacker News como único conectado e sem credenciais pessoais usadas nesta auditoria.
