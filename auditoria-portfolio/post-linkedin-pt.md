# Post para LinkedIn — PT

Estou desenvolvendo o Gepeto, um workspace pessoal de agentes com interface própria.

O projeto nasceu sobre o ecossistema OpenJarvis, mas a arquitetura separa claramente a camada de produto do runtime de inteligência. A interface em React/TypeScript concentra chat, overview, histórico, conectores, settings e observabilidade. O backend FastAPI mantém conversas e threads, transmite eventos por WebSocket e persiste traces redacted em SQLite. O Codex app-server entra como runtime principal; MCP, approvals e uma opção local de inferência completam a fronteira de ferramentas e privacidade.

Na auditoria mais recente, o build frontend e os testes selecionados passaram, e capturei as telas reais da aplicação em execução local. O fluxo autenticado completo ainda não foi validado, então o projeto segue tratado como alpha. Os próximos passos são fechar OAuth/client registration, validar o transporte MCP nativo e executar o smoke test end-to-end.
