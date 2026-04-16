# Implementation Plan: Enforce Mermaid Extension Tool Usage

## Phase 1: Update Prompt Mandates
- [ ] Task: Review current `GEMINI.md` and `skills/mermaid-documenter/SKILL.md` to identify weak points in tool instructions.
- [ ] Task: Update `GEMINI.md` with a strict mandate forbidding the use of generic file tools or shell commands for Mermaid generation.
- [ ] Task: Update `skills/mermaid-documenter/SKILL.md` to explicitly require calling `export_mermaid_to_png` for every diagram and include examples of the expected sequence.
- [ ] Task: Conductor - User Manual Verification 'Update Prompt Mandates' (Protocol in workflow.md)

## Phase 2: Package and Finalize
- [ ] Task: Run `npm run package` to ensure the updated prompts are correctly copied into the `dist/` directory.
- [ ] Task: Verify that `dist/GEMINI.md` and `dist/skills/mermaid-documenter/SKILL.md` contain the new mandates.
- [ ] Task: Conductor - User Manual Verification 'Package and Finalize' (Protocol in workflow.md)