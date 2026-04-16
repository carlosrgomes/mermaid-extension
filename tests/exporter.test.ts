import { describe, it, expect, vi } from 'vitest';
import { PngExporter } from '../src/exporter.js';
import { execFile } from 'child_process';
import fs from 'fs/promises';

vi.mock('child_process', () => ({
  execFile: vi.fn((cmd, args, cb) => cb(null, { stdout: '', stderr: '' })),
}));

vi.mock('fs/promises', async () => {
  const actual = (await vi.importActual(
    'fs/promises',
  )) as typeof import('fs/promises');
  return {
    ...actual,
    default: {
      ...actual,
      writeFile: vi.fn(),
      mkdtemp: vi.fn().mockResolvedValue('/tmp/mermaid-test'),
      rm: vi.fn(),
      access: vi.fn().mockRejectedValue(new Error()), // Default to npx
      mkdir: vi.fn(),
    },
    writeFile: vi.fn(),
    mkdtemp: vi.fn().mockResolvedValue('/tmp/mermaid-test'),
    rm: vi.fn(),
    access: vi.fn().mockRejectedValue(new Error()),
    mkdir: vi.fn(),
  };
});

describe('PngExporter', () => {
  it('should call mmdc with correct arguments', async () => {
    const exporter = new PngExporter();
    const mermaidCode = 'graph TD; A-->B;';
    const outputPath = 'test.png';

    await exporter.export(mermaidCode, outputPath);

    expect(execFile).toHaveBeenCalled();
    const call = vi.mocked(execFile).mock.calls[0];
    expect(call[0]).toBe('npx');
    expect(call[1]).toContain('mmdc');
    expect(call[1]).toContain('-i');
    expect(call[1]).toContain('-o');
    // It should contain the filename at least, resolved to absolute path
    expect(call[1].some((arg: string) => arg.endsWith(outputPath))).toBe(true);
  });

  it('should save both .mmd and .png files', async () => {
    const exporter = new PngExporter();
    const mermaidCode = 'graph TD; A-->B;';
    const outputPath = 'test.png';

    await exporter.export(mermaidCode, outputPath);

    // Verify that it wrote the .mmd file to the final destination
    const calls = vi.mocked(fs.writeFile).mock.calls;
    const mmdWriteCall = calls.find(
      (call) => typeof call[0] === 'string' && call[0].endsWith('test.mmd'),
    );
    expect(mmdWriteCall).toBeDefined();
    expect(mmdWriteCall![1]).toBe(mermaidCode);
  });
});
