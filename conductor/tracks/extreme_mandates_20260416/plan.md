# Implementation Plan: Extreme Prompt Mandates and Robust Dependency Resolution

## Phase 1: Robust Path Resolution
- [x] Task: Review `src/exporter.ts` and `src/validator.ts` for fragile `mmdc` path resolution.
- [x] Task: Update the `mmdc` path resolution logic to use `import.meta.url` and search multiple possible locations (e.g., relative to `dist/`, `process.cwd()`).
- [x] Task: Run unit tests to verify the new resolution logic doesn't break existing functionality.
- [x] Task: Conductor - User Manual Verification 'Robust Path Resolution' (Protocol in workflow.md)

## Phase 2: Extreme Prompt Mandates
- [x] Task: Review current `GEMINI.md` and `skills/mermaid-documenter/SKILL.md` to identify instructions that allow or fail to prevent shell fallback behavior.
- [x] Task: Update `GEMINI.md` with "CRITICAL MANDATES" explicitly forbidding the use of shell commands (`mmdc`, `npx`) and generic file tools for diagrams.
- [x] Task: Update `skills/mermaid-documenter/SKILL.md` to include explicit "Do NOT" instructions preventing the agent from trying to install dependencies or verify binaries.
- [x] Task: Conductor - User Manual Verification 'Extreme Prompt Mandates' (Protocol in workflow.md)

## Phase 3: Package and Finalize
- [x] Task: Run `npm run build` and `npm run package` to ensure the updated TypeScript code and prompts are correctly compiled and copied into the `dist/` directory.
- [x] Task: Verify that `dist/exporter.js`, `dist/validator.js`, `dist/GEMINI.md`, and `dist/skills/mermaid-documenter/SKILL.md` contain the new fixes and mandates.
- [x] Task: Conductor - User Manual Verification 'Package and Finalize' (Protocol in workflow.md)