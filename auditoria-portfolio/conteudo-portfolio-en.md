# Portfolio content — English

## A. Short description — up to 180 characters

Personal agent workspace with a product-owned UI, persistent conversations, connectors, MCP tools, approvals, and a Codex runtime boundary.

## B. Short presentation — 80–120 words

Gepeto is a personal agent workspace that separates the product experience from the intelligence runtime. Its React/TypeScript interface includes chat, overview, history, data sources, agents, logs, and settings. The FastAPI backend coordinates conversations and events, while a local adapter communicates with Codex app-server over JSON-RPC/stdio. Conversations, threads, and traces use local persistence; connectors and MCP tools are scoped and can require approval. The repository also keeps an optional local provider and a Tauri desktop application. The current state is alpha: core contracts and tests are in place, while the fully authenticated runtime flow is still being validated.

## C. Technical case study

### Overview

Gepeto Project is the product layer of the OpenJarvis ecosystem for personal agent workflows.

### Problem

Personal assistants often hide runtime, context, tools, and data behind a generic chat surface. Gepeto aims to make those product-owned concerns explicit without reimplementing the agent loop.

### Goal

Provide a workspace that can start Codex conversations without requiring a downloaded local model, while keeping local inference as an explicit privacy/offline option.

### Solution

A React UI communicates with a FastAPI API. The conversation service maps Gepeto conversations to Codex threads, streams events through WebSocket, and persists state and redacted traces in SQLite. The MCP bridge applies policy and approvals before exposing tools.

### Architecture

Browser/Tauri → FastAPI → `CodexConversationService` → `CodexAppServerClient` → Codex app-server process → model/tools. Local stores keep conversations, events, and redacted traces.

### Technologies

Python, FastAPI, Uvicorn, React, TypeScript, Vite, Zustand, WebSocket, SQLite, JSON-RPC, MCP, OAuth/PKCE, Tauri/Rust, Docker, systemd, and Windows deployment scripts.

### Implemented functionality

The repository contains the chat shell, overview, settings, connectors, agents, logs, thread persistence, event envelopes, cancellation, approvals, diagnostics, MCP policy, and tracing. Core protocol contracts have automated tests.

### Technical challenges

Safe subprocess lifecycle, event correlation, deduplication, owner/project scope, redaction, token-safe OAuth, and compatibility between the Gepeto product identity and OpenJarvis legacy identifiers.

### Current state

Alpha and still under release review. In this audit, frontend build and selected tests passed and the real UI was captured locally; no authenticated Codex conversation was run.

### Next steps

Complete OAuth/client registration, validate native MCP transport, run an authenticated smoke test, improve replay/cancellation, clarify Codex-only health/model endpoints, build Tauri artifacts, and refine mobile layout.

## D. LinkedIn-ready summary

I am documenting Gepeto, an author-built personal agent workspace built on the OpenJarvis ecosystem.

The architecture separates product-owned experience and data from the agent loop: React/TypeScript and FastAPI handle the UI, conversations, connectors, approvals, and observability, while Codex app-server is integrated through a local thread-and-event boundary. The project also includes MCP policy, SQLite persistence, redacted traces, an optional local inference path, and a Tauri desktop surface.

The current audit passed the frontend build and selected automated tests and captured the real interface locally. The fully authenticated flow is still being validated, so I am presenting Gepeto as an alpha project and using its release gate to guide the next engineering steps.
