# Implementation Plan

## Phase 1: Setup and Clean Up
- [x] Task: Install @modelcontextprotocol/sdk 192c665
    - [x] Write Tests: (No specific test needed for dependency addition)
    - [x] Implement Feature: Update package.json with the new dependency
- [~] Task: Remove redundant MermaidGenerator and LLM SDK
    - [ ] Write Tests: Delete tests/generator.test.ts and tests/recovery.test.ts
    - [ ] Implement Feature: Remove @google/generative-ai from package.json and delete src/generator.ts and src/promptBuilder.ts
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Setup and Clean Up' (Protocol in workflow.md)

## Phase 2: Implement MCP Server
- [ ] Task: Initialize MCP Server in src/index.ts
    - [ ] Write Tests: Add a basic test to verify the server instance is exported (if testable)
    - [ ] Implement Feature: Setup Server and StdioServerTransport from @modelcontextprotocol/sdk
- [ ] Task: Register Mermaid Tools
    - [ ] Write Tests: Update tests/scaffold.test.ts to ensure tools are registered correctly
    - [ ] Implement Feature: Define and handle validate_mermaid_syntax and export_mermaid_to_png in the setRequestHandler block
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Implement MCP Server' (Protocol in workflow.md)