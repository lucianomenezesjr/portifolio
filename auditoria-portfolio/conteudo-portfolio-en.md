# Portfolio content — EN

## Short card description

Technical inspection platform with an API, admin console and field mobile app for checklists, evidence and review.

## Modal summary

FieldOps is a technical inspection management platform connecting administrative planning with field execution. Its Angular console manages clients, sites, equipment, versioned checklist templates, assignments and reviews. A Spring Boot API enforces business rules, role-based authorization, PostgreSQL persistence, evidence storage and an audit trail. In the Expo/React Native app, technicians browse assigned inspections, answer checklists, record non-conformities and capture photos, with a local queue that synchronizes when connectivity returns. The project is in advanced MVP development: the core workflows have automated coverage, while production operation, AWS deployment and visual validation of the mobile app were not proven in this audit.

## Case study

### Overview

FieldOps turns technical inspections into a traceable workflow from planning to review. The solution is divided into an API, an administrative web console and a field application.

### Problem

Spreadsheet- and message-based inspections make it difficult to prove which checklist version was used, who answered each item, which evidence was collected and how the final decision was made. Unreliable connectivity adds the risk of interrupting field work or losing data.

### Goal

Centralize planning, execution and review while preserving checklist history and supporting field work in unstable network conditions.

### Solution

Administrators publish versioned templates and schedule inspections. The API snapshots checklist items so historical inspections keep their original context. Technicians execute inspections in the mobile app, collecting answers, photos and non-conformities. A local outbox preserves pending mutations and synchronizes them in order. Supervisors review, approve or return an inspection for correction.

### Architecture and technology

Java 21, Spring Boot 3.3.4, Spring Security, Spring Data JPA, PostgreSQL 16, Flyway, JWT, Angular 22, Angular Material, Playwright/axe, Expo 57, React Native 0.86.3, SecureStore, AsyncStorage, NetInfo, Docker Compose, plus configurable local/S3 evidence storage and SES email integration.

### Functionality

Authentication and password recovery; users and roles; clients, sites and equipment; QR identification; checklist template versioning; planning and assignment; answers; photographic evidence; non-conformities; review; audit events; offline cache/outbox and synchronization endpoints.

### Business flow

Published template → assigned inspection → technician execution → answers/evidence → submission → review → approval or correction.

### Engineering challenges

The central challenges are preserving checklist versions through snapshots, enforcing domain-level authorization, maintaining offline operation order and validating files before storage. These choices improve traceability and safety, but introduce eventual consistency and require device-level testing.

### Current state and next steps

The code and automated tests demonstrate a coherent functional core. Next steps are real end-to-end validation for every role, Android/iOS execution, failure-oriented sync testing and the operational work required for production, privacy, retention and deployment.
