# Specification: Mermaid Documentation Specialist Skill

## Overview
This feature introduces a specialized documentation skill (`SKILL.md`) bundled directly within the Mermaid extension. The skill equips the Gemini CLI agent with expert instructions for analyzing both legacy and new projects and documenting their architectures using the full spectrum of Mermaid diagrams. The skill's instructions will be exclusively in English.

## Functional Requirements
1. **Skill Inclusion:** Create a new `SKILL.md` file within a dedicated `skills/mermaid-documenter/` directory.
2. **Skill Content (Language):** The `SKILL.md` must be written entirely in English.
3. **Analysis Instructions:** The skill must provide specific, actionable guidelines for the agent to analyze:
    - **Legacy Projects:** Reverse-engineering existing codebases using tools like `codebase_investigator` to map out architectures, workflows, and dependencies.
    - **New Projects:** Designing and planning structures, data flows, and architectures prior to or during initial implementation.
4. **Comprehensive Diagram Support:** The skill MUST explicitly list, describe, and provide basic usage contexts for ALL diagrams supported by Mermaid (e.g., Flowchart, Sequence, Class, State, Entity-Relationship, User Journey, Gantt, Pie, Requirement, Gitgraph, C4, Mindmap, Timeline, Zenuml, Sankey, Quadrant, XY Chart, Architecture, Block).
5. **Extension Bundling:** The build process (e.g., in `package.json`) MUST be updated to ensure the `skills/` directory is copied to the `dist/` directory or appropriately packaged so it's available when the extension is installed.

## Acceptance Criteria
- [ ] A `skills/mermaid-documenter/SKILL.md` file is created and written in English.
- [ ] The `SKILL.md` contains clear analysis strategies for legacy vs. new projects.
- [ ] The `SKILL.md` contains an explicit, exhaustive list of Mermaid diagram types with brief usage instructions.
- [ ] The build script correctly copies the `skills/` folder to the distribution build.

## Out of Scope
- Implementing new programmatic tools or code parsers (the skill relies on existing agent capabilities).
- Creating templates for specific tech stacks (the skill remains generally applicable).