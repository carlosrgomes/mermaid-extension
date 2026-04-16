import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Manifest', () => {
  it('should have a valid gemini-extension.json', () => {
    const manifestPath = path.resolve(__dirname, '../gemini-extension.json');
    expect(fs.existsSync(manifestPath)).toBe(true);

    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    expect(manifest.name).toBe('mermaid-extension');
    expect(manifest.version).toBeDefined();
  });
});
