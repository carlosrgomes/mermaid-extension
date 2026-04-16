import { describe, it, expect, vi } from 'vitest';
import { MermaidValidator } from '../src/validator.js';
import { execFile } from 'child_process';

vi.mock('child_process', () => ({
  execFile: vi.fn((cmd, args, cb) => cb(null, { stdout: '', stderr: '' })),
}));

describe('MermaidValidator', () => {
  it('should return valid true when mmdc succeeds', async () => {
    const validator = new MermaidValidator();
    const result = await validator.validate('graph TD; A-->B;');
    expect(result.isValid).toBe(true);
  });

  it('should return valid false when mmdc fails', async () => {
    const error = new Error('Command failed') as Error & { stderr: string };
    error.stderr = 'Syntax Error';
    vi.mocked(execFile).mockImplementationOnce(
      (
        cmd: string,
        args: readonly string[] | undefined | null,
        cb: unknown,
      ) => {
        const callback = cb as (
          err: Error | null,
          res: { stdout: string; stderr: string },
        ) => void;
        callback(error, { stdout: '', stderr: 'Syntax Error' });
      },
    );
    const validator = new MermaidValidator();
    const result = await validator.validate('invalid syntax');
    expect(result.isValid).toBe(false);
    expect(result.error).toBe('Syntax Error');
  });
});
