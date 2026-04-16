# Specification: Extreme Prompt Mandates and Robust Dependency Resolution

## Overview
This track addresses a severe behavioral loop where the Gemini CLI agent bypasses the specialized MCP tools (`validate_mermaid_syntax`, `export_mermaid_to_png`) provided by the Mermaid extension and attempts to run shell commands (`npx`) to manually install or verify dependencies. The goal is to update the system prompts (`GEMINI.md` and `skills/mermaid-documenter/SKILL.md`) with "Extreme Mandates" forbidding this behavior, and to ensure the `mmdc` path resolution in the extension code is robust enough to prevent `npx` fallbacks.

## Functional Requirements
- **Extreme Tool Mandates:** `GEMINI.md` and `SKILL.md` must explicitly forbid the agent from attempting to "help" with dependencies via shell commands or `npx`. They must mandate the direct and exclusive use of the provided MCP tools.
- **Robust Path Resolution:** The TypeScript code (`src/exporter.ts` and `src/validator.ts`) must reliably locate the pre-bundled `mmdc` binary across different installation contexts (e.g., global extension vs. local development) to prevent falling back to `npx`.

## Acceptance Criteria
- [x] `GEMINI.md` contains strict mandates forbidding shell fallbacks and generic file writes.
- [x] `skills/mermaid-documenter/SKILL.md` includes explicit "Do NOT" instructions regarding shell commands and `npx`.
- [x] `src/exporter.ts` and `src/validator.ts` correctly resolve the `mmdc` path relative to `import.meta.url`.
- [x] The agent successfully uses the extension's tools without falling into a shell execution loop.

## Out of Scope
- Adding new diagram types or modifying the core rendering logic beyond path resolution.