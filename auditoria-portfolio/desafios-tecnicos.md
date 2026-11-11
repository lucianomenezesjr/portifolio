# Desafios técnicos demonstrados

## Múltiplos clientes

O mesmo contrato REST atende Angular e React Native, com permissões e necessidades diferentes. O admin usa filtros/paginação; o mobile usa cache, retry e payloads simples. O trade-off é manter dois clientes sincronizados com um backend comum; serviços explícitos e testes de contrato reduzem esse risco.

Evidências: `interface-administrativa/src/app/features/*/*.service.ts`, `mobile/src/api/endpoints.ts`, controllers API.

## Integridade de checklist versionado

Inspeções não apontam diretamente para um draft mutável: a API exige versão publicada/ativa e copia itens para `inspection_item_snapshot`. Isso protege o histórico quando o template evolui, ao custo de duplicar dados e exigir manutenção do snapshot.

Evidências: `InspectionService.java:98-153`; migrations V1; `TemplateVersioningTest.java`.

## Transições e autorização

As transições são protegidas no service, não somente na tela. O técnico vinculado inicia/submete; o supervisor revisa; admin/supervisor planejam e cancelam. Isso evita confiar em guards do frontend, mas exige que cada novo endpoint mantenha a mesma matriz de autorização.

Evidências: `InspectionService.java:267-331`, controllers com `@PreAuthorize`, `InspectionWorkflowTest.java`.

## Offline-first

O mobile persiste cache e uma fila ordenada de mutações. Operações transitórias permanecem na fila; erros 4xx permanentes são removidos com mensagem; o retorno de conectividade drena automaticamente. A ordem é importante porque submit depende das respostas anteriores. O trade-off é consistência eventual e necessidade de UX para falhas permanentes/conflitos.

Evidências: `mobile/src/offline/queue.ts:4-11,15-27`, `SyncContext.tsx:28-135`, V4, `SyncIntegrationTest.java`.

## Evidências e segurança de arquivos

O backend recebe multipart, detecta tipo/tamanho e abstrai o storage local/S3. Os testes cobrem extensão, MIME, limite, compensação e conteúdo spoofado; o desafio restante é provar configuração e permissões S3 em ambiente real.

Evidências: `EvidenceService.java`, `EvidenceStorageTest.java`, `EvidenceServiceTest.java`, `application.yml:22-28`.

## Rastreabilidade

Eventos carregam inspeção, entidade, ator, timestamp e request id; o filtro de correlação aparece no shared. Isso melhora investigação, mas a política de retenção e exportação dos logs não foi encontrada.

## Qualidade e manutenção

Há testes unitários, integração real com Flyway/PostgreSQL e Playwright com axe/snapshots. O principal risco observado é o desalinhamento de runtime: a suíte exige Java 21 para funcionar com a versão atual de Byte Buddy/Mockito. O mobile tem typecheck, mas não uma suíte automatizada equivalente.
