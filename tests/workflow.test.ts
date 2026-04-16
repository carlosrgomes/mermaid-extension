import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('GitHub Actions Workflow', () => {
  it('should have a release.yml workflow file', () => {
    const workflowPath = path.resolve(
      __dirname,
      '../.github/workflows/release.yml',
    );
    expect(fs.existsSync(workflowPath)).toBe(true);
  });

  it('should trigger on tags starting with v', () => {
    const workflowPath = path.resolve(
      __dirname,
      '../.github/workflows/release.yml',
    );
    if (!fs.existsSync(workflowPath)) return; // Skip if file doesn't exist yet (Red phase)

    const content = fs.readFileSync(workflowPath, 'utf-8');
    expect(content).toContain('tags:');
    expect(content).toContain("'v*'");
  });
});
