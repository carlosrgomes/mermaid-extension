# Tech Stack

## Core Language & Environment
- **Language:** TypeScript (Strict Mode) - Ensures type safety, adherence to the Gemini CLI ecosystem, and maintainability.
- **Runtime:** Node.js (compatible with versions supported by Gemini CLI).

## Libraries & Dependencies
- **CLI Extension Framework:** Native Gemini CLI APIs for extension development (as per documentation at https://geminicli.com/docs/extensions/writing-extensions/).
- **Mermaid Rendering:** `@mermaid-js/mermaid-cli` (mmdc) to convert LLM-generated text into PNG files.
- **File Manipulation:** Node.js native `fs/promises` module for saving diagrams locally.

## Tooling & Quality
- **Linter & Formatter:** ESLint and Prettier, ensuring standard formatting and code smell detection.
- **Test Framework:** Vitest for unit tests focused on validating diagram generators and parsing.
- **CI/CD:** GitHub Actions for automated building, testing, and multi-platform distribution.
- **Bundler:** `esbuild` for efficient Node.js bundling and distribution.
- **Packaging:** `shx` for cross-platform file management and archive creation.