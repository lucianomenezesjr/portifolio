# Publicação para LinkedIn — PT-BR

Estou trabalhando no FieldOps, uma plataforma para gestão de inspeções técnicas em campo.

O projeto reúne uma API REST em Java/Spring Boot, um painel administrativo em Angular e um aplicativo mobile em Expo/React Native. O fluxo cobre criação de modelos versionados de checklist, planejamento e atribuição, execução pelo técnico, registro de evidências e não conformidades, revisão e auditoria.

Um dos desafios mais interessantes foi tratar conectividade instável como parte do domínio: o mobile mantém cache e uma outbox local, preserva a ordem das operações e sincroniza quando a rede retorna. No backend, snapshots de checklist protegem o histórico mesmo quando o modelo evolui.

Durante a auditoria, a API passou por 46 testes com PostgreSQL 16 via Testcontainers, o painel passou por 39 testes unitários e build, e o mobile passou pelo typecheck. A próxima etapa é validar o app em dispositivo real e fechar os requisitos operacionais de produção.

#Java #SpringBoot #Angular #ReactNative #Expo #PostgreSQL #SoftwareEngineering #FieldOperations
