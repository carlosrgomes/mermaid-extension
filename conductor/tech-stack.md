# Tech Stack

## Core Language & Environment
- **Language:** TypeScript (Strict Mode) - Ensures type safety, adherence to the Gemini CLI ecosystem, and maintainability.
- **Runtime:** Node.js (compatible with versions supported by Gemini CLI).
- **Module System:** ESM (ECMAScript Modules) - Required for modern Node.js and MCP SDK compatibility.
- **Build Tool:** `tsc` (TypeScript Compiler) - Configured for ESM output and type checking.

## Libraries & Dependencies
- **CLI Extension Framework:** Native Gemini CLI APIs for extension development (as per documentation at https://geminicli.com/docs/extensions/writing-extensions/).
- **MCP SDK:** `@modelcontextprotocol/sdk` - Standardized protocol for exposing tools to Gemini CLI.
- **Mermaid Rendering:** `@mermaid-js/mermaid-cli` (mmdc) to convert Mermaid text into PNG files.
- **File Manipulation:** Node.js native `fs/promises` module for saving diagrams locally.

## Tooling & Quality
- **Linter & Formatter:** ESLint and Prettier, ensuring standard formatting and code smell detection.
- **Test Framework:** Vitest for unit tests focused on validating diagram parsing and rendering logic.
- **CI/CD:** GitHub Actions for automated building, testing, and multi-platform distribution.
- **Packaging:** `shx` for cross-platform file management and archive creation.