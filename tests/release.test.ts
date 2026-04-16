import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Release Package', () => {
  it('should have the expected distribution files after build', () => {
    // This test assumes 'npm run build' and 'npm run package' have been run or will be run.
    // In a real TDD cycle, this would fail if the files don't exist.
    const distDir = path.resolve(__dirname, '../dist/src');
    const bundlePath = path.join(distDir, 'index.js');
    const manifestPath = path.join(distDir, 'gemini-extension.json');
    const geminiMdPath = path.join(distDir, 'GEMINI.md');

    expect(fs.existsSync(distDir)).toBe(true);
    expect(fs.existsSync(bundlePath)).toBe(true);
    expect(fs.existsSync(manifestPath)).toBe(true);
    expect(fs.existsSync(geminiMdPath)).toBe(true);
  });
});