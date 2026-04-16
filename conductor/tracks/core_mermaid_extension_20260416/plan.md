# Implementation Plan

## Phase 1: Project Scaffolding
- [~] Task: Initialize Node.js project and install dependencies (TypeScript, Jest, Mermaid CLI)
    - [ ] Write Tests: Set up initial test suite structure
    - [ ] Implement Feature: Configure `package.json`, `tsconfig.json`, and ESLint/Prettier
- [ ] Task: Setup Gemini CLI extension boilerplate
    - [ ] Write Tests: Test extension registration/manifest
    - [ ] Implement Feature: Create main entry point and basic command structure
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Project Scaffolding' (Protocol in workflow.md)

## Phase 2: LLM Integration for Mermaid Generation
- [ ] Task: Create prompt template for Mermaid diagrams
    - [ ] Write Tests: Unit tests for prompt generation logic
    - [ ] Implement Feature: Implement `MermaidPromptBuilder`
- [ ] Task: Implement LLM caller to generate and extract Mermaid syntax
    - [ ] Write Tests: Mock LLM response and test Mermaid code extraction
    - [ ] Implement Feature: Create `MermaidGenerator` service
- [ ] Task: Conductor - User Manual Verification 'Phase 2: LLM Integration for Mermaid Generation' (Protocol in workflow.md)

## Phase 3: PNG Export and Error Handling
- [ ] Task: Integrate Mermaid CLI for rendering PNG
    - [ ] Write Tests: Unit tests for rendering function using dummy Mermaid strings
    - [ ] Implement Feature: Implement `PngExporter` using `@mermaid-js/mermaid-cli`
- [ ] Task: Implement syntax validation and auto-correction loop
    - [ ] Write Tests: Test error detection and LLM retry logic
    - [ ] Implement Feature: Add recovery mechanism in the generation flow
- [ ] Task: Conductor - User Manual Verification 'Phase 3: PNG Export and Error Handling' (Protocol in workflow.md)