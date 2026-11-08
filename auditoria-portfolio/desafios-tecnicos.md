# Desafios e decisões técnicas

## Delegar o loop ao Codex

Problema: duplicar loop de agente, ferramentas, approvals e lifecycle aumentaria complexidade. Decisão: Codex app-server é a fronteira primária (`docs/gepeto/kb/decisions.md`, D-002). O adapter preserva thread/turn/eventos em vez de transformar tudo em uma chamada simples de inferência.

## Lifecycle de subprocesso

`codex_app_server.py` usa argv explícito, `shell=False`, leitores separados de stdout/stderr, timeouts, IDs correlacionados, buffer de eventos e shutdown determinístico. Trade-off: a aplicação depende do schema e versão do CLI instalado; o próprio KB registra incertezas de schemas futuros.

## Streaming e estado terminal

Eventos chegam fora de ordem lógica em relação às respostas solicitadas. O serviço publica sequência/event ID, o frontend deduplica e o store não trata falha/interrupção como sucesso. A pendência é replay por cursor em reconexões longas e smoke visual autenticado (`GEP-004.1`, `GEP-002.5`).

## Segurança de approvals e tools

O bridge filtra manifest por projeto/sessão e exige approval de uso único para escrita/destruição, vinculado aos argumentos. Isso reduz replay indevido, mas a integração do bridge ao transporte MCP nativo do Codex ainda está aberta (`GEP-003.2`).

## OAuth sem expor tokens

O token store vive fora do repo, o browser recebe apenas URL/estado, e o processo filho recebe access token mínimo. O desafio restante é a integração real do registro/client ID, validação completa de ID token/JWKS e teste com app-server autenticado (`GEP-002.3`).

## Separação de produto e legado

O produto se chama Gepeto, mas o pacote, rotas antigas e diversos identificadores ainda são `openjarvis` por compatibilidade. Isso reduz risco de migração, porém aumenta carga editorial e exige distinguir produto, runtime e legado.

## Observabilidade sem segredos

Traces SQLite, redaction, correlation IDs e diagnostics são implementados. O trade-off é que a redaction reduz fidelidade diagnóstica; a própria documentação deixa instrumentação automática de tool/approval e retenção configurável como próximas etapas.
