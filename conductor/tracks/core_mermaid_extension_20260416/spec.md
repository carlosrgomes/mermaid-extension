# Track Specification: Build core Mermaid diagram generation and PNG export extension

## Objective
Develop a Gemini CLI extension that takes natural language input, generates valid Mermaid diagram code, and renders it to a PNG file.

## Requirements
- Setup extension structure following Gemini CLI conventions.
- Implement LLM prompt builder for Mermaid generation.
- Integrate `@mermaid-js/mermaid-cli` or similar for PNG export.
- Handle syntax error recovery.

## Out of Scope
- Support for formats other than PNG in this initial track.