# Track Specification: Implement MCP Server and Register Mermaid Tools

## Objective
Transform the core logic into an MCP (Model Context Protocol) server within `src/index.ts`. This allows the Gemini CLI to discover and call the `validate_mermaid_syntax` and `export_mermaid_to_png` tools natively, using the CLI's own LLM context to generate the diagrams.

## Requirements
- **MCP SDK Integration:** Install and configure `@modelcontextprotocol/sdk` to run an stdio-based server.
- **Tool Registration:** Register two specific tools:
    1.  `validate_mermaid_syntax`: Accepts raw Mermaid code and uses `MermaidValidator` to ensure syntax correctness.
    2.  `export_mermaid_to_png`: Accepts raw Mermaid code and a destination file path, and uses `PngExporter` to save the PNG file locally.
- **Refactor Entry Point:** Update `src/index.ts` to boot the MCP server and handle incoming tool call requests.
- **Remove Redundant Dependencies:** (Optional but recommended) Since the Gemini CLI will handle LLM generation natively, the `@google/generative-ai` SDK and the `MermaidGenerator` class are no longer strictly needed in production and can be marked as deprecated or removed to streamline the package.

## Out of Scope
- Dedicated API key handling for the extension itself (since Gemini CLI provides the AI context).