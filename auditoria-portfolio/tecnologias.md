# Tecnologias confirmadas

| Tecnologia | Evidência | Finalidade | Estado |
|---|---|---|---|
| Java 21 | `API/pom.xml:13-16`; execução Maven mostrou Java 21.0.12 | linguagem e runtime suportado | Confirmada por código e execução |
| Spring Boot 3.3.4 | `API/pom.xml:6-8` | bootstrap da API | Confirmada |
| Spring Web | `API/pom.xml:20-23` | REST/MVC | Confirmada |
| Spring Security | `API/pom.xml:24-27`; `auth/security/` | autenticação, JWT e autorização | Confirmada |
| Spring Data JPA/Hibernate | `API/pom.xml:28-31`; 19 repositórios detectados no teste | persistência | Confirmada |
| PostgreSQL 16 | `API/docker-compose.yml:2-15`; Testcontainers `jdbc:tc:postgresql:16` | banco local/teste | Confirmada por código e execução de teste |
| Flyway | `API/pom.xml:39-46`; migrations V1–V4 | evolução/validação do schema | Confirmada por execução |
| JWT JJWT 0.12.6 | `API/pom.xml:48-65` | access/refresh tokens | Confirmada |
| OpenAPI Springdoc 2.6.0 | `API/pom.xml:67-72`; `application.yml:30-34` | Swagger UI e `/v3/api-docs` | Confirmada |
| Angular 22.1.x | `interface-administrativa/package.json:17-25` | painel SPA | Confirmada |
| Angular Material/CDK | `interface-administrativa/package.json:18,23` | componentes e acessibilidade/UI | Confirmada |
| TypeScript | `interface-administrativa/package.json:37`; `mobile/package.json` | tipagem dos clientes | Confirmada |
| Playwright 1.64.1 + axe | `interface-administrativa/package.json:33-35`; `playwright.config.ts:1-34` | E2E e acessibilidade | Confirmada; snapshots existentes |
| Expo 57 / React Native 0.86.3 | `mobile/package.json` | aplicativo mobile | Confirmada por código e typecheck |
| Expo Router | `mobile/package.json`; `mobile/app/_layout.tsx:1-3` | navegação mobile | Confirmada |
| SecureStore | `mobile/package.json`; `src/auth/AuthContext.tsx:1-17` | refresh token no dispositivo | Confirmada |
| AsyncStorage | `mobile/package.json`; `mobile/src/offline/` | cache/fila offline | Confirmada |
| NetInfo | `mobile/package.json`; `src/offline/SyncContext.tsx:1-4,118-128` | detecção de conectividade | Confirmada |
| Expo Camera/Location | `mobile/package.json`; `app/camera.tsx`, `app/scanner.tsx` | foto, QR e coordenada pontual | Confirmada estaticamente |
| Docker Compose | `API/docker-compose.yml`; `docker-compose.e2e.yml` | PostgreSQL local e E2E | Confirmada |
| AWS S3/SES SDK | `API/pom.xml:74-84`; `S3EvidenceStorageService`, `AwsSesEmailService` | storage de evidência e e-mail | Código presente; AWS não validada como implantada |

## Não confirmado como implantado

AWS, CI/CD, domínio público, produção, EAS build publicado e serviço de e-mail real não foram comprovados por execução nesta auditoria. Docs contém planos para esses itens, mas eles permanecem documentação de intenção até haver evidência operacional.
