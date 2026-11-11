# Resumo executivo

## O que é

O FieldOps é uma plataforma de gestão de inspeções técnicas em campo. O sistema combina uma API REST com persistência PostgreSQL, um painel administrativo Angular para planejar e revisar inspeções e um aplicativo Expo/React Native dedicado ao técnico de campo.

## Problema e proposta de valor

O produto organiza um processo que normalmente fica disperso entre planilhas, formulários, mensagens e fotografias. Ele relaciona cliente, local, equipamento, modelo versionado de checklist, técnico e supervisor; preserva as respostas e evidências; e cria uma trilha de auditoria.

O valor principal está na continuidade do fluxo: o supervisor planeja, o técnico executa mesmo com conectividade instável, e a revisão recebe um registro estruturado em vez de um relato manual.

## Usuários observados

Os papéis confirmados no código são `ADMIN`, `SUPERVISOR` e `TECHNICIAN` (`API/src/main/java/com/fieldops/user/domain/Role.java:3-7`). O painel atende principalmente administração/supervisão; o mobile rejeita usuários que não sejam técnicos (`mobile/src/auth/AuthContext.tsx:27-33,95-105`). Não foi encontrado um portal de cliente implementado.

## Estado atual

**Confirmado pelo código e execução:** API, painel e mobile possuem implementação significativa; as migrations são aplicadas em PostgreSQL 16 de teste; 46 testes da API, 39 testes unitários do admin e o typecheck do mobile passaram no ambiente suportado.

**Limites da auditoria:** não foi iniciado um ambiente persistente completo com seed para repetir os E2E reais, e não havia emulador Android/iOS ou ADB disponível para executar o mobile visualmente. Portanto, a existência do mobile é confirmada estaticamente e pelo typecheck, mas seu fluxo visual/device não foi validado nesta auditoria.

Não há evidência suficiente para afirmar produção, usuários reais, deploy AWS ou operação comercial.

## Limitações relevantes

- A suíte depende de Java 21; com Java 25, Mockito/Byte Buddy falha ao instrumentar mocks.
- O build Angular passa com warning `NG8011` em `features/auth/login.component.html:100`.
- A estratégia offline usa AsyncStorage para cache e fila; não foi encontrada suíte automatizada do mobile para provar perda de energia, reprocessamento ou conflito em dispositivo real.
- O armazenamento local de evidências é o padrão; S3 existe como implementação configurável, mas não foi validado contra AWS.
- A documentação de Docs contém planos e arquitetura pretendida que não devem ser tratados como estado implementado sem correlação com o código.
