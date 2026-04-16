import { describe, it, expect, vi } from 'vitest';
import { MermaidValidator } from '../src/validator.js';
import { exec } from 'child_process';

vi.mock('child_process', () => ({
  exec: vi.fn((cmd, cb) => cb(null, { stdout: '', stderr: '' }))
}));

describe('MermaidValidator', () => {
  it('should return valid true when mmdc succeeds', async () => {
    const validator = new MermaidValidator();
    const result = await validator.validate('graph TD; A-->B;');
    expect(result.isValid).toBe(true);
  });

  it('should return valid false when mmdc fails', async () => {
    const error: any = new Error('Command failed');
    error.stderr = 'Syntax Error';
    vi.mocked(exec).mockImplementationOnce((cmd, cb: any) => 
      cb(error, { stdout: '', stderr: 'Syntax Error' })
    );
    const validator = new MermaidValidator();
    const result = await validator.validate('invalid syntax');
    expect(result.isValid).toBe(false);
    expect(result.error).toBe('Syntax Error');
  });
});