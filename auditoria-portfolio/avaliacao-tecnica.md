# Avaliação técnica

## Organização

A separação por contexto no backend facilita localizar regras de negócio e contratos. O painel segue feature-based routing e lazy loading. O mobile separa API, autenticação, inspeção, offline, componentes e tema. A estrutura é coerente com o escopo e reduz acoplamento entre clientes.

## Arquitetura

Pontos fortes: serviços transacionais, DTOs, repositories, migrations, snapshot de template, storage abstrato e trilha de auditoria. A arquitetura é preparada para evolução, mas ainda não prova escalabilidade, processamento assíncrono de arquivos ou observabilidade operacional completa.

## Segurança

Pontos positivos: JWT access/refresh, rotação/revogação de refresh session, SecureStore para refresh token mobile, guards no admin, `@PreAuthorize` na API, validação de vínculo entre ator e inspeção, mensagens de recuperação sem revelar existência da conta e correlação de request.

Pontos de atenção: `server.error.include-message: always` em `application.yml:34-35` merece revisão para produção; CORS e segredos dependem de ambiente; não foi feita revisão de dependências/SAST; retenção de auditoria, LGPD para fotos/localização e política de exclusão de evidências não estão completamente documentadas nesta auditoria.

## Testes

- API: 46/46 passaram com JDK 21, PostgreSQL 16 via Testcontainers e Flyway V1–V4.
- Admin: 39/39 testes unitários passaram.
- Admin build: passou; warning `NG8011` no login.
- Mobile typecheck: passou.
- E2E: configuração e cenários reais existem, mas dependem de API saudável, seed e `FIELDOPS_E2E_PASSWORD`; não foram repetidos nesta auditoria. Snapshots existentes foram inspecionados.
- Mobile: sem testes automatizados e2e/device encontrados.

## Deploy e infraestrutura

Docker Compose para Postgres e scripts de E2E existem. O backend tem Dockerfile, health/readiness e configurações para storage/e-mail. AWS S3/SES estão no código. Ainda assim, não há evidência nesta auditoria de imagem publicada, pipeline executado, banco remoto, domínio ou deploy AWS.

## Oportunidades

1. Fixar Java 21 no CI e documentar toolchain para evitar a incompatibilidade Java 25/Byte Buddy.
2. Resolver o warning NG8011 do login.
3. Adicionar testes mobile para fila, cache, autorização de câmera, retry e conflito.
4. Executar E2E real em ambiente efêmero e preservar relatório de execução.
5. Formalizar retenção de auditoria, LGPD, limites de evidência e política de falhas de sync.
6. Separar claramente documentação planejada de estado implementado.
