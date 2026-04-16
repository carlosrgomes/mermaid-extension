# Track Specification: Release Process for Gemini CLI Extension

## Objective
Automate the release process for the `mermaid-extension` using GitHub Actions and prepare the repository to be listed in the public Gemini CLI extension gallery.

## Requirements
- **Automated Workflow:** Create a GitHub Actions workflow (`.github/workflows/release.yml`) that triggers when a new version tag (e.g., `v1.0.0`) is pushed.
- **Platform-Specific Archives:** The workflow must build the extension and package it into platform-specific archives (e.g., `.tar.gz`) following the convention `{platform}.{arch}.{name}.{extension}`.
- **GitHub Release:** The workflow must create a GitHub Release and attach the generated archives as assets.
- **Gallery Preparation:** Provide a script or documentation step to add the `gemini-cli-extension` topic to the GitHub repository, ensuring it appears in the public gallery.

## Out of Scope
- Publishing to npm or other package registries.
- Complex CI/CD pipelines (e.g., deploying to testing environments before release).