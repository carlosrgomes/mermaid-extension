# Implementation Plan: Mermaid Documentation Specialist Skill

## Phase 1: Skill Drafting (SKILL.md)
- [x] Task: Create the directory `skills/mermaid-documenter`. b38891e
- [~] Task: Draft the initial content for `skills/mermaid-documenter/SKILL.md` in English. Include structured strategies for analyzing legacy codebases and designing new projects.
- [ ] Task: Append an exhaustive list of all supported Mermaid diagram types (Flowchart, Sequence, Class, State, ER, User Journey, Gantt, Pie, Requirement, Gitgraph, C4, Mindmap, Timeline, Zenuml, Sankey, Quadrant, XY Chart, Block) with their usage contexts to the `SKILL.md`.
- [ ] Task: Conductor - User Manual Verification 'Skill Drafting (SKILL.md)' (Protocol in workflow.md)

## Phase 2: Extension Bundling Configuration
- [ ] Task: Write a test script (e.g., `tests/package.test.ts`) that asserts the `skills/` directory is present in the `dist/src/` build output after packaging (Red Phase).
- [ ] Task: Update the `package` script in `package.json` to include copying the `skills` folder (e.g., `shx cp -R skills dist/src/`) (Green Phase).
- [ ] Task: Conductor - User Manual Verification 'Extension Bundling Configuration' (Protocol in workflow.md)