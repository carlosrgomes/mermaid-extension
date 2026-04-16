# Implementation Plan: Save Mermaid Source and PNG

## Phase 1: Update Exporter Logic
- [x] Task: Write failing tests in `tests/exporter.test.ts` to verify that a `.mmd` file is created alongside the `.png` file.
- [x] Task: Modify `src/exporter.ts` to parse the `outputPath`, change the extension to `.mmd`, and write the `mermaidCode` to this new path before or after generating the PNG.
- [x] Task: Verify that all tests pass and coverage is > 80%. f44d635
- [x] Task: Conductor - User Manual Verification 'Update Exporter Logic' (Protocol in workflow.md)

## Phase 2: Update Server Output Message
- [x] Task: Write or update integration tests (if applicable) to verify the new success message.
- [x] Task: Modify `src/index.ts` in the `export_mermaid_to_png` handler to reflect that both files were saved in the return message. 6d846c6
- [~] Task: Conductor - User Manual Verification 'Update Server Output Message' (Protocol in workflow.md)