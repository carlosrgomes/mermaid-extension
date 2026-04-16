# Implementation Plan: Enforce Mermaid Extension Tool Usage

## Phase 1: Update Prompt Mandates
- [x] Task: Review current `GEMINI.md` and `skills/mermaid-documenter/SKILL.md` to identify weak points in tool instructions. 038ad71
- [x] Task: Update `GEMINI.md` with a strict mandate forbidding the use of generic file tools or shell commands for Mermaid generation. e3a0334
- [x] Task: Update `skills/mermaid-documenter/SKILL.md` to explicitly require calling `export_mermaid_to_png` for every diagram and include examples of the expected sequence. 3be3f62
- [x] Task: Conductor - User Manual Verification 'Update Prompt Mandates' (Protocol in workflow.md) a0f2313

## Phase 2: Package and Finalize
- [x] Task: Run `npm run package` to ensure the updated prompts are correctly copied into the `dist/` directory. 21cce6f
- [x] Task: Verify that `dist/GEMINI.md` and `dist/skills/mermaid-documenter/SKILL.md` contain the new mandates. 27be76d
- [x] Task: Conductor - User Manual Verification 'Package and Finalize' (Protocol in workflow.md) 619d8c0