import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Extension Packaging', () => {
  it('should include the skills directory in the build output', () => {
    const skillsPath = path.resolve('dist/src/skills');
    const exists = fs.existsSync(skillsPath);
    
    expect(exists).toBe(true);
    
    if (exists) {
      const skillFile = path.join(skillsPath, 'mermaid-documenter/SKILL.md');
      expect(fs.existsSync(skillFile)).toBe(true);
    }
  });
});
