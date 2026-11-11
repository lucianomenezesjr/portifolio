# Inventário e seleção de imagens

## Origem

As imagens copiadas para esta pasta vêm de snapshots já versionados em:

`interface-administrativa/e2e/fo-006-quality.spec.ts-snapshots/`

Os snapshots são gerados pelo Playwright a partir do painel real, com dados demonstrativos criados pelos cenários E2E (`e2e/support/real-api.ts`). Não foram geradas imagens fictícias.

## Arquivos selecionados

| Arquivo | Origem | Dimensão sugerida | Uso recomendado | Avaliação |
|---|---|---|---|---|
| `dashboard-desktop.png` | snapshot FO-006 dashboard | desktop | capa do card ou primeira galeria | melhor visão geral, navegação e indicadores |
| `inspections-list-desktop.png` | snapshot FO-006 list | desktop | galeria | mostra filtros e planejamento |
| `inspection-detail-desktop.png` | snapshot FO-006 detail | desktop | galeria | mostra contexto, checklist e timeline |
| `inspection-review-desktop.png` | snapshot FO-006 review | desktop | galeria | mostra revisão/reprovação |
| `dashboard-mobile.png` | snapshot FO-006 dashboard | 390×844 | galeria responsiva | demonstra painel em viewport móvel, não é app nativo |
| `list-mobile.png` | snapshot FO-006 list | 390×844 | galeria responsiva | demonstra adaptação do admin |

## Recomendação editorial

Usar `dashboard-desktop.png` como capa do card: contém marca, navegação, contagens de status e chamada operacional, sem depender de um texto longo. Para o modal, usar a sequência dashboard → lista → detalhe → revisão. A composição comunica a integração administrativa; não deve ser apresentada como screenshot do aplicativo mobile.

Não há screenshots reais do mobile nesta auditoria. Os assets de ícone/splash do Expo não representam telas funcionais. Para o futuro estudo de caso, capturar no Android um conjunto paralelo: início, agenda, checklist offline, câmera/evidência e sincronização.

## Segurança editorial

Os arquivos selecionados exibem apenas o usuário demonstrativo `FieldOps Admin`/`Sara Supervisor` e títulos E2E. Não há e-mail pessoal, token ou dado de produção visível. Antes de publicar, revisar novamente se o cenário E2E permanecerá considerado seguro.
