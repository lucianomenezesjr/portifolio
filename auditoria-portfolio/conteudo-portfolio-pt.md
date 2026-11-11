# Conteúdo para o portfólio — PT-BR

## Descrição curta para card

Plataforma de inspeções técnicas com API, painel administrativo e app mobile para execução em campo, evidências e revisão.

## Resumo para modal

FieldOps é uma plataforma de gestão de inspeções técnicas que conecta planejamento administrativo e execução em campo. O painel Angular organiza clientes, locais, equipamentos, modelos versionados de checklist, atribuições e revisões. A API Spring Boot aplica regras de negócio, autorização por papel, persistência PostgreSQL, evidências e trilha de auditoria. No mobile Expo/React Native, técnicos consultam inspeções, respondem checklists, registram não conformidades e fotografias, inclusive com uma fila local para sincronizar quando a conectividade retorna. O projeto está em desenvolvimento avançado para um MVP técnico: os principais fluxos possuem testes automatizados, mas a operação em produção, o deploy AWS e a validação visual do mobile ainda não foram comprovados nesta auditoria.

## Estudo de caso

### Visão geral

O FieldOps foi estruturado para transformar inspeções técnicas em um fluxo rastreável, desde o planejamento até a revisão. A solução possui três clientes/limites: API, painel administrativo e aplicativo de campo.

### Problema

Inspeções feitas com planilhas e mensagens dificultam saber qual checklist foi usado, quem executou cada resposta, quais evidências foram coletadas e qual decisão encerrou o processo. A conectividade irregular do campo aumenta o risco de interromper o trabalho ou perder dados.

### Objetivo

Centralizar planejamento, execução e revisão sem perder o histórico do checklist, mantendo uma experiência de campo capaz de trabalhar com rede instável.

### Solução

O administrador cria modelos versionados e agenda inspeções. A API cria um snapshot do checklist para preservar o contexto histórico. O técnico executa no mobile, coleta respostas, fotos e não conformidades. A outbox local mantém as mutações pendentes e sincroniza em ordem. O supervisor revisa, aprova ou devolve para correção.

### Arquitetura e tecnologias

Java 21, Spring Boot 3.3.4, Spring Security, Spring Data JPA, PostgreSQL 16, Flyway, JWT, Angular 22, Angular Material, Playwright/axe, Expo 57, React Native 0.86.3, SecureStore, AsyncStorage, NetInfo, Docker Compose e implementações configuráveis para storage local/S3 e e-mail SES.

### Funcionalidades

Autenticação e recuperação de senha; usuários e papéis; clientes, locais e equipamentos; QR Code; modelos e versões de checklist; planejamento e atribuição; respostas; evidências fotográficas; não conformidades; revisão; auditoria; cache/outbox offline e endpoints de sync.

### Fluxo de negócio

Modelo publicado → inspeção atribuída → execução pelo técnico → respostas/evidências → envio → revisão → aprovação ou rejeição para correção.

### Desafios técnicos

Os pontos mais relevantes são preservar a versão do checklist por snapshot, aplicar autorização em nível de domínio, manter a ordem das operações offline e validar arquivos antes do storage. A solução favorece rastreabilidade e segurança, mas introduz consistência eventual e exige testes em dispositivo real.

### Estado atual e próximos passos

O código e os testes demonstram um núcleo funcional consistente. O próximo passo é validar E2E real de todos os papéis, executar o mobile em Android/iOS, testar sync sob falhas reais e fechar requisitos operacionais de produção, privacidade, retenção e deploy.
