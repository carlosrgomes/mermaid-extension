import { describe, it, expect, vi } from 'vitest';
import { PngExporter } from '../src/exporter.js';
import { execFile } from 'child_process';

vi.mock('child_process', () => ({
  execFile: vi.fn((cmd, args, cb) => cb(null, { stdout: '', stderr: '' }))
}));

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
    expect(call[1]).toContain(outputPath);
  });
});