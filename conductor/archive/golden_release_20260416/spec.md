# Specification: Mermaid Extension Golden Release (1.0.0)

## Overview
This track focuses on the final end-to-end validation of the Mermaid Extension to ensure all recent bug fixes, performance improvements, and MCP integrations are functioning correctly in a production-like scenario. Once validated, the extension will be packaged and distributed as the first "Golden Release".

## Functional Requirements
- **End-to-End Validation:** Perform manual and automated checks to confirm the extension successfully interprets prompts, validates Mermaid syntax, and exports PNG/MMD files.
- **Build Verification:** Ensure `npm run package` generates the correct artifacts in the `dist/` directory, including skills and documentation.
- **Test Suite:** Confirm 100% pass rate for all unit and integration tests.

## Distribution & Release
- **Platforms:** The final release artifacts must be published to both **npm** and **GitHub Releases**.
- **Versioning:** Ensure all manifests (`package.json`, `gemini-extension.json`) reflect the correct version (1.0.0).

## Acceptance Criteria
- [ ] All tests pass without errors.
- [ ] Manual validation confirms the extension works as expected within the Gemini CLI environment.
- [ ] Release artifacts are successfully generated and staged.
- [ ] The package is published to npm and a GitHub Release is drafted.

## Out of Scope
- Adding new feature enhancements to the extension.
- Modifying the core architecture.