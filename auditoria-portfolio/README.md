# Auditoria do FieldOps

Auditoria técnica e editorial realizada sobre os repositórios locais:

- `API/`: Java 21, Spring Boot e PostgreSQL.
- `interface-administrativa/`: Angular e TypeScript.
- `mobile/`: Expo/React Native e TypeScript.

## Como ler

Esta auditoria separa evidência em quatro níveis:

- **Confirmado pelo código**: localizado em código, configuração, migration ou teste.
- **Confirmado por execução**: observado ao executar build, typecheck, testes ou Playwright.
- **Documentado, não validado**: descrito em Docs, mas não comprovado nesta execução.
- **Inferido**: interpretação técnica explicitamente marcada como tal.

Não foram alterados código-fonte, configuração, dependências ou histórico Git dos repositórios auditados. As screenshots copiadas para `screenshots/` são artefatos E2E já existentes no painel administrativo, com dados demonstrativos.

## Entregáveis

- [Resumo executivo](resumo-executivo.md)
- [Arquitetura](arquitetura.md)
- [Tecnologias](tecnologias.md)
- [Funcionalidades](funcionalidades.md)
- [Modelo de dados](modelo-de-dados.md)
- [Fluxos de negócio](fluxos-de-negocio.md)
- [Desafios técnicos](desafios-tecnicos.md)
- [Avaliação técnica](avaliacao-tecnica.md)
- [Conteúdo PT](conteudo-portfolio-pt.md)
- [Content EN](conteudo-portfolio-en.md)
- [Post para LinkedIn](post-linkedin-pt.md)
- [Inventário de imagens](inventario-imagens.md)

## Validação executada

| Área | Comando | Resultado |
|---|---|---|
| API | `JAVA_HOME=/usr/lib/jvm/temurin-21-jdk mvn test` | 46/46 testes, sucesso |
| Admin | `npm test -- --watch=false` | 39/39 testes, sucesso |
| Admin | `npm run build` | sucesso; 1 warning Angular NG8011 |
| Mobile | `npm run typecheck` | sucesso |
| E2E Playwright | snapshots existentes em `interface-administrativa/e2e/...` | usados como evidência visual pré-existente; suíte real não foi repetida sem configurar seed/API |
| Mobile visual | emulador/ADB | indisponível no ambiente; sem screenshot mobile nova |

O primeiro `mvn test` com Java 25 produziu 6 erros de Mockito/Byte Buddy; a repetição com Java 21, versão declarada no `pom.xml`, passou integralmente. O detalhe está em [avaliação técnica](avaliacao-tecnica.md).
