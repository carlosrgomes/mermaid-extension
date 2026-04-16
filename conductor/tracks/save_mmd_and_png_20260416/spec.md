# Specification: Save Mermaid Source and PNG

## Overview
This feature modifies the export behavior of the Mermaid extension so that whenever a diagram is generated, both the original Mermaid source code and the resulting PNG image are automatically saved to disk.

## Functional Requirements
1. **Dual Export:** The extension MUST save two files per diagram export operation: a text file containing the Mermaid syntax and an image file containing the rendered diagram.
2. **File Extension:** The source code file MUST use the `.mmd` extension.
3. **File Naming:** Both the source file and the image file MUST share the exact same base name (e.g., `diagram_name.mmd` and `diagram_name.png`).
4. **Enforcement:** This behavior is hardcoded. The extension MUST ALWAYS save both files without offering an opt-out configuration or flag.

## Acceptance Criteria
- [ ] Given a user prompt to generate a diagram named "my_architecture", the extension creates `my_architecture.mmd` and `my_architecture.png` in the current directory.
- [ ] `my_architecture.mmd` contains valid Mermaid syntax.
- [ ] `my_architecture.png` contains the rendered image of the diagram.

## Out of Scope
- Configurable flags to disable saving either the source or the PNG file.
- Support for other image formats (e.g., SVG).