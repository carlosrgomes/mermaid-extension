# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2026-04-16

### Added
- **Initial Golden Release** of the Mermaid Extension.
- **Natural Language to Mermaid:** Automatically generate diagrams from descriptive prompts.
- **PNG & MMD Export:** High-quality image generation and source code preservation.
- **Syntax Validation:** Integrated validation using `mmdc` to ensure diagram correctness.
- **Bundled Skills:** Specialized "Mermaid Documentation Specialist" skill for architectural analysis.
- **Support for Multiple Diagram Types:** Flowcharts, Sequence Diagrams, Class Diagrams, ER Diagrams, and more.

### Changed
- **Performance Optimization:** Prioritized local `mmdc` binary over `npx` for faster rendering.
- **Engineering Standards:** Refined type safety and removed `any` usages across the codebase.
- **Build Process:** Improved packaging to include skills and manifest files in the `dist/` directory.

### Fixed
- Fixed critical dependency issues by moving `mermaid-cli` to production dependencies.
- Resolved path resolution bugs in the PNG exporter.
- Improved error handling for empty or invalid Mermaid code inputs.
