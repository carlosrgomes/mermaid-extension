# Implementation Plan: Comprehensive Documentation Update

## Objective
To replace the existing `README.md` with a comprehensive, detailed documentation set in English, as requested. The new documentation will cover the project's objectives, architecture, technical stack, features, installation, usage, and development processes.

## Key Files & Context
- **Target File:** `/Users/carlosbarbero/mermaid-extension/README.md` (To be completely rewritten)
- **Source Context:** 
  - `conductor/product.md` (Objectives, Target Audience, Expected Outcomes)
  - `conductor/tech-stack.md` (TypeScript, Node.js, MCP SDK, `@mermaid-js/mermaid-cli`, Vitest, GitHub Actions)
  - `src/index.ts`, `src/validator.ts`, `src/exporter.ts` (Architecture details: MCP Server, Validator, Exporter)
  - `architecture.png` & `architecture.mmd` (Generated C4 Diagrams)
  - `skills/mermaid-documenter/SKILL.md` (Bundled specialized skill)

## Implementation Steps
1. **Draft Content:** Construct the Markdown content for `README.md`.
   - **Introduction & Objective:** Define the Mermaid Extension for Gemini CLI and its core problem-solving capability (Natural Language to Diagrams as Code).
   - **Architecture:** Explain the MCP Server model, detailing the `Mermaid Validator` and `PNG Exporter` components. Include the previously generated C4 diagram (`architecture.png`).
   - **Technology Stack:** List TypeScript, Node.js (ESM), `@modelcontextprotocol/sdk`, `@mermaid-js/mermaid-cli`, Vitest, and GitHub Actions.
   - **Features & Capabilities:** Highlight Natural Language to Diagram, Dual Export (PNG+MMD), Syntax Validation, and the bundled `mermaid-documenter` skill.
   - **Installation & Setup:** Provide clear steps to clone, build, and link the extension (`gemini extensions link .`).
   - **Usage Guide:** Detail the available MCP tools (`validate_mermaid_syntax`, `export_mermaid_to_png`) and provide example natural language prompts.
   - **Development & Contribution:** Explain how to run tests, linting, formatting, and the automated release process.
2. **Apply Changes:** Execute a tool call (outside of Plan Mode) to overwrite `README.md` with the finalized content.

## Verification & Testing
- Visually inspect the newly generated `README.md` to ensure all requested sections are present, well-formatted, and written in clear English.
- Confirm the inclusion of the C4 architecture diagram reference.