# Matriz de funcionalidades

| Funcionalidade | Classificação | Evidências | Limitação/observação |
|---|---|---|---|
| Login, refresh, logout | Implementada e validada | `AuthController.java`; `AuthenticationTest.java`; admin `auth.service.spec.ts` | E2E real não repetido nesta auditoria |
| Recuperação/troca de senha | Implementada e validada | `AuthService.java`; `AuthenticationTest.java`; telas auth admin | e-mail real depende de SES/configuração |
| Usuários e papéis | Implementada e validada | `UserController.java`, `Role.java`, `users/` | três papéis; sem portal cliente confirmado |
| Guards/rotas admin | Implementada e validada | `app.routes.ts:22-80`; guards; 39 testes unitários | validação visual via snapshots existentes |
| Dashboard | Implementada e validada | `DashboardController.java`; dashboard service; E2E snapshot | indicadores são contagens de inspeção/NC, não relatório avançado |
| Clientes | Implementada e validada | `ClientController.java`, `clients/` | CRUD/status; sem evidência de multi-tenant completo |
| Locais | Implementada e validada | `SiteController.java`, `sites/` | CRUD/status por cliente |
| Equipamentos/QR | Implementada, mas não validada em device | `EquipmentController.java`; `app/scanner.tsx` | QR usa API; câmera não foi executada |
| Modelos de inspeção | Implementada e validada | `TemplateController.java`; `TemplateVersioningTest.java`; builder admin | sem drag-and-drop confirmado |
| Planejamento/atribuição | Implementada e validada | `InspectionService.java:67-132,267-282`; `inspection-new` specs | um técnico e um supervisor por inspeção |
| Checklist/respostas | Implementada e validada | `InspectionResponseController.java`; `InspectionWorkflowTest.java`; mobile checklist | validação de UI mobile não executada |
| Evidências fotográficas | Implementada e validada no backend | `EvidenceController.java`; 7 testes com Java 21; `app/camera.tsx` | tipo confirmado é foto; S3 não foi executado contra AWS |
| Não conformidades | Implementada, mas não validada ponta a ponta | `NonConformityController.java`; admin service | fluxo de tratamento é simples; não há plano de ação confirmado |
| Revisão/aprovação/reprovação | Implementada e validada | `ReviewController.java`; inspection review specs; snapshot | aprovação é supervisor; screenshot mostra formulário de reprovação |
| Histórico/auditoria | Implementada e validada | `AuditEventController.java`; `audit_event`; audit test | retenção/expurgo não encontrado |
| Relatórios/PDF | Não confirmada | nenhum controller/serviço de relatório encontrado | Docs pode mencionar evolução; não apresentar como implementado |
| Mobile autenticado | Implementada, não validada por device | `mobile/src/auth/`; `app/_layout.tsx` | typecheck passou; sem emulador |
| Cache offline | Implementada, não validada por device | `mobile/src/offline/cache.ts` | AsyncStorage, sem teste de reinstalação/limite |
| Outbox e sync | Implementada e validada no backend; mobile não validado por device | V4; `SyncServiceTest`/`SyncIntegrationTest`; `SyncContext.tsx` | conflitos complexos e retomada real não observados |
| CI/CD | Parcial/documentada | workflows/configuração e Docs | execução de pipeline remoto não realizada |
| AWS | Parcial/configurável | SDK S3/SES e Docs | nenhuma evidência de deploy/conta/endpoint operacional |

## Endpoints representativos

Os contratos estão nos controllers API e nos serviços Angular/mobile. Os principais grupos são auth, cadastros, templates, inspeções, respostas, evidências, revisão, auditoria e sync; a lista consolidada está em [arquitetura](arquitetura.md).
