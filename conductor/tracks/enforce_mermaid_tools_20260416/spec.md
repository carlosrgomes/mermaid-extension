# Specification: Enforce Mermaid Extension Tool Usage

## Overview
This track addresses a behavioral issue where the Gemini CLI agent bypasses the specialized MCP tools (`validate_mermaid_syntax`, `export_mermaid_to_png`) provided by the Mermaid extension. The goal is to update the system prompts (`GEMINI.md` and `skills/mermaid-documenter/SKILL.md`) to enforce strict usage of these tools for all diagram generation and documentation tasks, preventing the agent from falling back to generic shell commands or file operations.

## Functional Requirements
- **Strict Tool Mandates:** `GEMINI.md` must include explicit instructions that forbid the use of generic file tools (e.g., `WriteFile`) or shell commands (e.g., `npx`, `mmdc`) for generating or saving Mermaid diagrams.
- **Skill Updates:** The `mermaid-documenter` skill must be updated to require the agent to call `export_mermaid_to_png` for every architecture diagram it creates.
- **Usage Examples:** The prompts must include clear examples demonstrating the expected sequence of tool calls (e.g., `validate_mermaid_syntax` followed by `export_mermaid_to_png`).

## Acceptance Criteria
- [ ] `GEMINI.md` contains strict mandates enforcing MCP tool usage and forbidding shell fallbacks.
- [ ] `skills/mermaid-documenter/SKILL.md` requires the generation of a PNG via the extension's tools for every diagram.
- [ ] The agent successfully uses the extension's tools when asked to "document with architecture diagram" without attempting to run `npx` or generic file writes for the diagram artifacts.
- [ ] Documentation includes examples of the expected tool sequence.

## Out of Scope
- Modifying the underlying TypeScript code for the MCP server or the `mmdc` wrapper (this is strictly a prompt engineering task).