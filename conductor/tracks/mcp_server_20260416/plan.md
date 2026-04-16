# Implementation Plan

## Phase 1: Setup and Clean Up [checkpoint: f93af49b]
- [x] Task: Install @modelcontextprotocol/sdk 192c665
    - [x] Write Tests: (No specific test needed for dependency addition)
    - [x] Implement Feature: Update package.json with the new dependency
- [x] Task: Remove redundant MermaidGenerator and LLM SDK 1cdfe00
    - [x] Write Tests: Delete tests/generator.test.ts and tests/recovery.test.ts
    - [x] Implement Feature: Remove @google/generative-ai from package.json and delete src/generator.ts and src/promptBuilder.ts
- [x] Task: Conductor - User Manual Verification 'Phase 1: Setup and Clean Up' (Protocol in workflow.md)

## Phase 2: Implement MCP Server [checkpoint: 45d6c4eb]
- [x] Task: Initialize MCP Server in src/index.ts 7f0cecc
    - [x] Write Tests: Add a basic test to verify the server instance is exported (if testable)
    - [x] Implement Feature: Setup Server and StdioServerTransport from @modelcontextprotocol/sdk
- [x] Task: Register Mermaid Tools 11e59b5
    - [x] Write Tests: Update tests/scaffold.test.ts to ensure tools are registered correctly
    - [x] Implement Feature: Define and handle validate_mermaid_syntax and export_mermaid_to_png in the setRequestHandler block
- [x] Task: Conductor - User Manual Verification 'Phase 2: Implement MCP Server' (Protocol in workflow.md)